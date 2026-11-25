"use client";

import { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Check, X } from 'lucide-react';

const TOTAL_METERS = 195;
const TARGET_METERS = 97.5;
const C_M_PER_NS = 0.3; // Speed of light ~0.3 meters per nanosecond
const DEADLINE_NS = TOTAL_METERS / C_M_PER_NS; // 650 ns limit
const MAX_CLOCK_AXIS = 1150;

function computeTiming(posMeters) {
  const tA = posMeters / C_M_PER_NS;
  const tB = (TOTAL_METERS - posMeters) / C_M_PER_NS;
  const tMeet = Math.max(tA, tB);
  const waitNs = Math.abs(tA - tB);
  const returnA = tMeet + tA;
  const returnB = tMeet + tB;
  const maxReturn = Math.max(returnA, returnB);
  const delayNs = Math.max(0, maxReturn - DEADLINE_NS);
  const isPass = Math.abs(posMeters - TARGET_METERS) <= 1.0;
  const lateStation = posMeters < TARGET_METERS ? 'B' : 'A';
  const earlyStation = posMeters < TARGET_METERS ? 'A' : 'B';

  return {
    tA,
    tB,
    tMeet,
    waitNs,
    returnA,
    returnB,
    maxReturn,
    delayNs,
    isPass,
    lateStation,
    earlyStation,
  };
}

export default function QuantumPositionWidget() {
  const [tab, setTab] = useState('speed'); // 'speed' | 'hackers'
  const [pos, setPos] = useState(TARGET_METERS);
  const [phase, setPhase] = useState('done'); // 'running' | 'done'
  const [simNs, setSimNs] = useState(DEADLINE_NS);

  // Tab 2 state
  const [mode, setMode] = useState('quantum'); // 'classical' | 'quantum'
  const [attackProgress, setAttackProgress] = useState(1);
  const [attackRunning, setAttackRunning] = useState(false);

  const rafRef = useRef(null);
  const attackRafRef = useRef(null);
  const timing = computeTiming(pos);

  const runSimulation = (targetPos = pos) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const calc = computeTiming(targetPos);
    const durationMs = 1900;
    const start = performance.now();
    setPhase('running');
    setSimNs(0);

    const tick = (now) => {
      const ratio = Math.min(1, (now - start) / durationMs);
      setSimNs(ratio * calc.maxReturn);

      if (ratio < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase('done');
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  const runAttackSimulation = () => {
    if (attackRafRef.current) cancelAnimationFrame(attackRafRef.current);
    const durationMs = 1600;
    const start = performance.now();
    setAttackRunning(true);
    setAttackProgress(0);

    const tick = (now) => {
      const ratio = Math.min(1, (now - start) / durationMs);
      setAttackProgress(ratio);

      if (ratio < 1) {
        attackRafRef.current = requestAnimationFrame(tick);
      } else {
        setAttackRunning(false);
      }
    };

    attackRafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (attackRafRef.current) cancelAnimationFrame(attackRafRef.current);
    };
  }, []);

  const handleSliderChange = (nextVal) => {
    const num = Number(nextVal);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setPos(num);
    const calc = computeTiming(num);
    setSimNs(calc.maxReturn);
    setPhase('done');
  };

  const handleModeSwitch = (nextMode) => {
    setMode(nextMode);
    runAttackSimulation();
  };

  // Map 0..195m to SVG x coordinates 116..524 (leaving clean left gutter for lane labels)
  const xMin = 116;
  const xMax = 524;
  const toX = (m) => xMin + (m / TOTAL_METERS) * (xMax - xMin);
  const targetX = toX(TARGET_METERS);
  const userX = toX(pos);

  // Track 1 (upper lane y=78): outgoing challenges A -> YOU & B -> YOU
  const progAIn = Math.min(1, simNs / Math.max(1, timing.tA));
  const progBIn = Math.min(1, simNs / Math.max(1, timing.tB));
  const pulseAX = xMin + progAIn * (userX - xMin);
  const pulseBX = xMax - progBIn * (xMax - userX);
  const isWaiting = !timing.isPass && simNs >= Math.min(timing.tA, timing.tB) && simNs < timing.tMeet;

  // Track 2 (lower lane y=134): return replies YOU -> A & YOU -> B
  const replyProgressA =
    simNs > timing.tMeet ? Math.min(1, (simNs - timing.tMeet) / Math.max(1, timing.tA)) : 0;
  const replyProgressB =
    simNs > timing.tMeet ? Math.min(1, (simNs - timing.tMeet) / Math.max(1, timing.tB)) : 0;
  const replyAX = userX - replyProgressA * (userX - xMin);
  const replyBX = userX + replyProgressB * (xMax - userX);

  // Live Clock Bar mapping 0..MAX_CLOCK_AXIS across x=94..546
  const barX0 = 94;
  const barW = 452;
  const deadlineBarX = barX0 + (DEADLINE_NS / MAX_CLOCK_AXIS) * barW;
  const currentBarNs = Math.min(MAX_CLOCK_AXIS, simNs);
  const currentBarW = (currentBarNs / MAX_CLOCK_AXIS) * barW;
  const okBarW = Math.min(currentBarW, deadlineBarX - barX0);
  const lateBarW = Math.max(0, currentBarW - (deadlineBarX - barX0));

  return (
    <div className="my-8 sm:my-10 rounded-2xl bg-white text-slate-900 border-2 border-slate-900 shadow-md overflow-hidden not-prose">
      {/* Header & Joined Segmented Control Tabs */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b-2 border-slate-900 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Interactive Simulation (195m NIST Testbed)
          </p>
          <p className="text-sm sm:text-base font-extrabold text-slate-900">
            {tab === 'speed'
              ? 'Drag the bar to move spots, then fire the light clock'
              : 'Compare how normal signals and single photons handle two attackers'}
          </p>
        </div>

        <div className="inline-flex border-2 border-slate-900 rounded-lg overflow-hidden shrink-0 self-start md:self-auto bg-white">
          <button
            type="button"
            onClick={() => setTab('speed')}
            className={`px-3.5 py-2 text-xs font-bold border-r border-slate-900 cursor-pointer transition-colors ${
              tab === 'speed'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            1. Speed-of-Light Trap
          </button>
          <button
            type="button"
            onClick={() => {
              setTab('hackers');
              runAttackSimulation();
            }}
            className={`px-3.5 py-2 text-xs font-bold cursor-pointer transition-colors ${
              tab === 'hackers'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            2. Two-Hacker Check
          </button>
        </div>
      </div>

      {tab === 'speed' ? (
        <div className="p-4 sm:p-6">
          {/* Readouts Strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 text-center">
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                Responder Spot
              </p>
              <p className="text-sm sm:text-lg font-extrabold text-slate-900 mt-0.5 font-mono">
                {pos.toFixed(1)} m
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                Clock Limit
              </p>
              <p className="text-sm sm:text-lg font-extrabold text-slate-900 mt-0.5 font-mono">
                650 ns
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                Slowest Reply
              </p>
              <p
                className={`text-sm sm:text-lg font-extrabold mt-0.5 font-mono ${
                  timing.isPass ? 'text-slate-900' : 'text-slate-900 underline decoration-2 underline-offset-4'
                }`}
              >
                {phase === 'running'
                  ? `${simNs.toFixed(0)} ns`
                  : `${timing.maxReturn.toFixed(0)} ns`}
              </p>
            </div>
          </div>

          {/* 2-Lane Animated Diagram */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 p-2 sm:p-4 mb-5">
            <svg
              viewBox="0 0 640 264"
              className="w-full h-auto block"
              role="img"
              aria-label="195 meter monochrome light timing testbed"
            >
              <defs>
                <pattern id="lateStripe" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width="8" height="8" fill="#E2E8F0" />
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#0F172A" strokeWidth="3" />
                </pattern>
              </defs>

              {/* True Center Vertical Marker */}
              <line x1={targetX} y1="22" x2={targetX} y2="165" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" />
              <text x={targetX} y="15" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="800">
                REAL SPOT (97.5 m)
              </text>

              {/* Forced wait callout cleanly above tracks */}
              {(isWaiting || (!timing.isPass && phase === 'done')) && (
                <g>
                  <circle
                    cx={userX}
                    cy="78"
                    r="21"
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <rect x={Math.min(Math.max(userX - 92, 94), 362)} y="24" width="184" height="20" rx="4" fill="#0F172A" />
                  <text
                    x={Math.min(Math.max(userX, 186), 454)}
                    y="38"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="10"
                    fontWeight="800"
                  >
                    STUCK WAITING +{timing.waitNs.toFixed(0)} ns ({timing.lateStation})
                  </text>
                </g>
              )}

              {/* Left gutter lane labels (overlap-proof) */}
              <text x="12" y="81" fill="#475569" fontSize="10" fontWeight="800">
                1. LIGHT IN
              </text>
              <text x="12" y="137" fill="#475569" fontSize="10" fontWeight="800">
                2. REPLY OUT
              </text>

              {/* Lane 1 Track */}
              <line x1={xMin} y1="78" x2={xMax} y2="78" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
              {simNs > 0 && (
                <>
                  <line x1={xMin} y1="78" x2={pulseAX} y2="78" stroke="#0F172A" strokeWidth="3.5" />
                  <circle cx={pulseAX} cy="78" r="6" fill="#0F172A" />
                  <line x1={xMax} y1="78" x2={pulseBX} y2="78" stroke="#475569" strokeWidth="3.5" />
                  <circle cx={pulseBX} cy="78" r="6" fill="#475569" stroke="#0F172A" strokeWidth="1.5" />
                </>
              )}

              {/* Lane 2 Track */}
              <line x1={xMin} y1="134" x2={xMax} y2="134" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="5 4" />
              {simNs >= timing.tMeet && (
                <>
                  <line x1={userX} y1="134" x2={replyAX} y2="134" stroke="#0F172A" strokeWidth="3" />
                  {replyProgressA < 1 && <circle cx={replyAX} cy="134" r="5.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />}
                  <line x1={userX} y1="134" x2={replyBX} y2="134" stroke="#0F172A" strokeWidth="3" />
                  {replyProgressB < 1 && <circle cx={replyBX} cy="134" r="5.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />}
                </>
              )}

              {/* Station A Box */}
              <rect x={xMin - 22} y="56" width="44" height="102" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
              <text x={xMin} y="79" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="900">A</text>
              <text x={xMin} y="96" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="700">0 m</text>
              <text x={xMin} y="140" textAnchor="middle" fill="#0F172A" fontSize="9.5" fontWeight="800">
                {timing.returnA.toFixed(0)}ns
              </text>

              {/* Station B Box */}
              <rect x={xMax - 22} y="56" width="44" height="102" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
              <text x={xMax} y="79" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="900">B</text>
              <text x={xMax} y="96" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="700">195 m</text>
              <text x={xMax} y="140" textAnchor="middle" fill="#0F172A" fontSize="9.5" fontWeight="800">
                {timing.returnB.toFixed(0)}ns
              </text>

              {/* Responder Marker Pill spanning Lane 1 -> Lane 2 */}
              <rect x={userX - 18} y="64" width="36" height="86" rx="9" fill="#0F172A" />
              <text x={userX} y="111" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900">
                YOU
              </text>

              {/* Station Delay Annotations cleanly below boxes */}
              <text x={xMin - 22} y="175" textAnchor="start" fill="#475569" fontSize="10" fontWeight="700">
                A reach: {timing.tA.toFixed(0)} ns
              </text>
              <text x={xMax + 22} y="175" textAnchor="end" fill="#475569" fontSize="10" fontWeight="700">
                B reach: {timing.tB.toFixed(0)} ns
              </text>

              {/* Clock Deadline Comparison Bar */}
              <text x={barX0} y="200" fill="#0F172A" fontSize="10.5" fontWeight="800">
                CLOCK (0 TO 1150 ns):
              </text>
              <rect x={barX0} y="208" width={barW} height="22" rx="4" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />

              {okBarW > 0 && (
                <rect x={barX0} y="208" width={okBarW} height="22" rx="3" fill="#0F172A" />
              )}
              {lateBarW > 0 && (
                <rect x={deadlineBarX} y="208" width={lateBarW} height="22" fill="url(#lateStripe)" stroke="#0F172A" strokeWidth="1.5" />
              )}

              {/* 650 ns Deadline Wall */}
              <line x1={deadlineBarX} y1="202" x2={deadlineBarX} y2="237" stroke="#0F172A" strokeWidth="2.5" />
              <text x={deadlineBarX} y="251" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="900">
                650 ns DEADLINE
              </text>
              {!timing.isPass && lateBarW > 0 && (
                <text
                  x={Math.min(deadlineBarX + lateBarW + 6, 546)}
                  y="223"
                  textAnchor={deadlineBarX + lateBarW > 465 ? 'end' : 'start'}
                  fill="#0F172A"
                  fontSize="10"
                  fontWeight="900"
                >
                  +{timing.delayNs.toFixed(0)} ns LATE
                </text>
              )}
            </svg>
          </div>

          {/* Single Position Bar Control + Unmistakable Rectangular Action Button */}
          <div className="mb-5">
            <input
              type="range"
              min="15"
              max="180"
              step="0.5"
              value={pos}
              onChange={(e) => handleSliderChange(e.target.value)}
              onPointerUp={() => runSimulation(pos)}
              onKeyUp={(e) => {
                if (e.key.startsWith('Arrow')) runSimulation(pos);
              }}
              aria-label="Move responder position between 15m and 180m"
              className="w-full accent-slate-900 cursor-pointer h-3 bg-slate-200 rounded-lg border border-slate-400"
            />
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-slate-600 mt-1.5 font-mono">
              <span>15 m (Near A)</span>
              <span>97.5 m (Real Spot)</span>
              <span>180 m (Near B)</span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => runSimulation(pos)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-slate-900 bg-slate-900 hover:bg-slate-800 active:translate-y-0.5 text-white text-xs sm:text-sm font-bold shadow-[0_3px_0_#475569] active:shadow-none cursor-pointer transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Fire Light Pulses</span>
              </button>
              <span className="text-xs font-semibold text-slate-500">
                Tip: drag slider away from 97.5 m and release to test spoofing.
              </span>
            </div>
          </div>

          {/* Monochrome Verdict Box */}
          <div
            className={`rounded-xl p-4 border-2 border-slate-900 flex items-start gap-3 ${
              timing.isPass ? 'bg-slate-50' : 'bg-slate-900 text-white'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border-2 ${
                timing.isPass
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-white bg-white text-slate-900'
              }`}
            >
              {timing.isPass ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </div>
            <div className="text-xs sm:text-sm leading-relaxed font-medium">
              {timing.isPass ? (
                <>
                  <strong className="font-extrabold block mb-0.5 text-slate-900">
                    PASS (650 ns): Verified at 97.5 m.
                  </strong>
                  <span className="text-slate-700">
                    Both light flashes arrived at the exact same instant (325 ns), so both replies returned inside the 650 ns speed-of-light limit.
                  </span>
                </>
              ) : (
                <>
                  <strong className="font-extrabold block mb-0.5 text-white">
                    CAUGHT (+{timing.delayNs.toFixed(0)} ns late at Station {timing.lateStation})
                  </strong>
                  <span className="text-slate-200">
                    Station {timing.earlyStation}&apos;s pulse arrived early in {Math.min(timing.tA, timing.tB).toFixed(0)} ns, but you stayed stuck waiting {timing.waitNs.toFixed(0)} ns more for Station {timing.lateStation}&apos;s half. You cannot fake this spot without beating light.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-6">
          {/* Clear Tactile Mode Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => handleModeSwitch('classical')}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold border-2 border-slate-900 cursor-pointer transition-all shadow-[0_3px_0_#475569] active:translate-y-0.5 active:shadow-none ${
                  mode === 'classical'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-900 hover:bg-slate-100'
                }`}
              >
                Normal Radio / GPS
              </button>
              <button
                type="button"
                onClick={() => handleModeSwitch('quantum')}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold border-2 border-slate-900 cursor-pointer transition-all shadow-[0_3px_0_#475569] active:translate-y-0.5 active:shadow-none ${
                  mode === 'quantum'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-900 hover:bg-slate-100'
                }`}
              >
                NIST Single Photon
              </button>
            </div>

            <button
              type="button"
              onClick={runAttackSimulation}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border-2 border-slate-900 bg-white hover:bg-slate-100 active:translate-y-0.5 text-slate-900 text-xs sm:text-sm font-bold shadow-[0_3px_0_#475569] active:shadow-none cursor-pointer transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{attackRunning ? 'Running...' : 'Replay Attack'}</span>
            </button>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-300 p-2 sm:p-4 mb-5">
            <svg viewBox="0 0 640 195" className="w-full h-auto block" role="img" aria-label="Two attacker test diagram">
              <line x1="64" y1="108" x2="576" y2="108" stroke="#CBD5E1" strokeWidth="3" />

              {/* Real empty target */}
              <circle cx="320" cy="108" r="14" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />
              <text x="320" y="142" textAnchor="middle" fill="#64748B" fontSize="10.5" fontWeight="700">
                Nobody actually here
              </text>

              {/* Stations */}
              <rect x="34" y="84" width="50" height="48" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
              <text x="59" y="113" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="900">A</text>

              <rect x="556" y="84" width="50" height="48" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
              <text x="581" y="113" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="900">B</text>

              {/* Two Attackers */}
              <rect x="138" y="86" width="84" height="44" rx="8" fill="#0F172A" />
              <text x="180" y="112" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800">Hacker 1</text>

              <rect x="418" y="86" width="84" height="44" rx="8" fill="#0F172A" />
              <text x="460" y="112" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800">Hacker 2</text>

              {mode === 'classical' ? (
                <>
                  {/* Incoming signals + copy swap arc */}
                  <line x1="86" y1="108" x2={86 + Math.min(1, attackProgress * 2.5) * 50} y2="108" stroke="#0F172A" strokeWidth="3.5" />
                  <line x1="554" y1="108" x2={554 - Math.min(1, attackProgress * 2.5) * 50} y2="108" stroke="#0F172A" strokeWidth="3.5" />

                  <path d="M 180 84 Q 320 26 460 84" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeDasharray="6 4" />
                  {attackProgress > 0.3 && (
                    <circle
                      cx={180 + Math.min(1, (attackProgress - 0.3) / 0.7) * 280}
                      cy={84 - Math.sin(Math.min(1, (attackProgress - 0.3) / 0.7) * Math.PI) * 29}
                      r="6"
                      fill="#0F172A"
                    />
                  )}
                  <rect x="200" y="16" width="240" height="24" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                  <text x="320" y="32" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="800">
                    COPY NUMBERS &amp; SWAP ON TIME
                  </text>
                </>
              ) : (
                <>
                  {/* Single fragile photon stopping at Hacker 1 */}
                  <line x1="86" y1="108" x2="136" y2="108" stroke="#0F172A" strokeWidth="3.5" />
                  <circle
                    cx={86 + Math.min(1, attackProgress * 2) * 50}
                    cy="108"
                    r="6.5"
                    fill="#FFFFFF"
                    stroke="#0F172A"
                    strokeWidth="2.5"
                  />

                  {/* Shattered link lines */}
                  {attackProgress > 0.45 && (
                    <g>
                      <line x1="224" y1="90" x2="290" y2="54" stroke="#0F172A" strokeWidth="2" strokeDasharray="3 3" />
                      <line x1="190" y1="74" x2="208" y2="56" stroke="#0F172A" strokeWidth="2.5" />
                      <line x1="208" y1="74" x2="190" y2="56" stroke="#0F172A" strokeWidth="2.5" />
                    </g>
                  )}

                  <rect x="175" y="16" width="290" height="24" rx="6" fill="#0F172A" />
                  <text x="320" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">
                    1 PHOTON CANNOT BE COPIED CLEANLY
                  </text>
                </>
              )}
            </svg>
          </div>

          <div
            className={`rounded-xl p-4 border-2 border-slate-900 flex items-start gap-3 ${
              mode === 'classical' ? 'bg-slate-50 text-slate-900' : 'bg-slate-900 text-white'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border-2 ${
                mode === 'classical'
                  ? 'border-slate-900 bg-white text-slate-900'
                  : 'border-white bg-white text-slate-900'
              }`}
            >
              {mode === 'classical' ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </div>
            <div className="text-xs sm:text-sm leading-relaxed font-medium">
              {mode === 'classical' ? (
                <>
                  <strong className="font-extrabold block mb-0.5 text-slate-900">
                    Normal Radio Signals Lose to Team-Ups.
                  </strong>
                  <span className="text-slate-700">
                    Hacker 1 catches Station A&apos;s signal, makes an identical copy, forwards it to Hacker 2, and both answer inside the time limit.
                  </span>
                </>
              ) : (
                <>
                  <strong className="font-extrabold block mb-0.5 text-white">
                    Caught by Quantum Rules Even With Tampered Boxes.
                  </strong>
                  <span className="text-slate-200">
                    One photon cannot be cloned without scrambling its pattern across millions of runs (a Bell test). NIST cut the allowed 1D error range by 2.47x (4.53x in volume) without trusting the receiver box.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
