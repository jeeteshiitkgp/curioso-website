"use client";

import { useState, useEffect, useRef } from 'react';
import { Play, Check, X } from 'lucide-react';

const THRESHOLD_SHIELD = 70;

const MOLECULES = {
  boric: {
    id: 'boric',
    label: 'Boric Acid (B-O)',
    leftAtom: 'B',
    rightAtom: 'O',
    bondOrder: 1,
    lengthA: 1.37,
    badge: 'STANDARD SINGLE BOND (1.37 Å)',
    summaryTitle: 'Standard B-O Single Bond (1.37 Å)',
    summaryText:
      'In everyday boric acid (eye drops and antiseptic powder), boron shares just one pair of electrons with oxygen. The two atoms sit 1.37 angstroms apart, easy for the room-temperature lab to keep intact.',
  },
  oxoborane: {
    id: 'oxoborane',
    label: '2026 Oxoborane (B≡O)',
    leftAtom: 'B',
    rightAtom: 'O',
    bondOrder: 3,
    lengthA: 1.21,
    hasShield: true,
    badge: '2026 CRYSTAL (1.208 TO 1.217 Å)',
    summaryTitle: '11% Shorter and Far Stronger (1.21 Å)',
    summaryText:
      'Packed with three shared bonds and shielded by bulky side groups, boron and oxygen pull together to 1.208 to 1.217 angstroms. That is roughly 11% shorter than a standard B-O single bond, making it one of the tightest boron-oxygen bonds ever isolated at room temperature.',
  },
  co: {
    id: 'co',
    label: 'Carbon Monoxide (C≡O)',
    leftAtom: 'C',
    rightAtom: 'O',
    bondOrder: 3,
    lengthA: 1.13,
    badge: 'FAMOUS GAS TRIPLE BOND (1.13 Å)',
    summaryTitle: 'The Benchmark Triple Bond (1.13 Å)',
    summaryText:
      'Carbon sits right next to boron on the periodic table and easily forms a stable C≡O triple bond in carbon monoxide gas. Until 2026, chemists spent over 60 years trying to hold boron and oxygen in that same triple-bonded state inside a bottle.',
  },
};

// Separated and boroxine-ring positions for the 3 R-B≡O units inside 640x280
const UNITS = [
  {
    sep: { r: [130, 102], b: [162, 102], o: [202, 86] },
    ring: { r: [258, 112], b: [283.6, 127], o: [320, 106] },
    nextIndex: 1,
  },
  {
    sep: { r: [510, 102], b: [478, 102], o: [478, 144] },
    ring: { r: [382, 112], b: [356.4, 127], o: [356.4, 169] },
    nextIndex: 2,
  },
  {
    sep: { r: [320, 218], b: [320, 192], o: [282, 174] },
    ring: { r: [320, 220], b: [320, 190], o: [283.6, 169] },
    nextIndex: 0,
  },
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function bondParallelLines(x1, y1, x2, y2, offsets) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  return offsets.map((off) => ({
    x1: x1 + nx * off,
    y1: y1 + ny * off,
    x2: x2 + nx * off,
    y2: y2 + ny * off,
  }));
}

export default function OxoboraneWidget() {
  const [tab, setTab] = useState('shield'); // 'shield' | 'ruler'
  const [shield, setShield] = useState(20);
  const [simProgress, setSimProgress] = useState(1);
  const [running, setRunning] = useState(false);
  const [selectedMol, setSelectedMol] = useState('oxoborane');

  const rafRef = useRef(null);
  const isStable = shield >= THRESHOLD_SHIELD;
  const chargeLabel = shield < 45 ? 'Extreme' : shield < THRESHOLD_SHIELD ? 'High' : 'Balanced';

  const runSimulation = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const durationMs = 1350;
    const start = performance.now();
    setRunning(true);
    setSimProgress(0);

    const tick = (now) => {
      const ratio = Math.min(1, (now - start) / durationMs);
      setSimProgress(ratio);
      if (ratio < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setRunning(false);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleSliderChange = (nextVal) => {
    const num = Number(nextVal);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setRunning(false);
    setShield(num);
    setSimProgress(1);
  };

  // Compute live positions for Tab 1
  const clumpProgress = !isStable ? easeInOut(Math.min(1, simProgress / 0.55)) : 0;
  const bounceProgress = isStable ? Math.sin(simProgress * Math.PI) * 0.42 : 0;
  const motionT = isStable ? bounceProgress : clumpProgress;
  const ringLocked = !isStable && simProgress >= 0.55;
  const ringOpacity = !isStable ? Math.max(0, Math.min(1, (simProgress - 0.45) / 0.25)) : 0;
  const bumperRadius = 15 + (shield / 100) * 23; // 17.3..38

  const liveUnits = UNITS.map((unit) => ({
    r: [lerp(unit.sep.r[0], unit.ring.r[0], motionT), lerp(unit.sep.r[1], unit.ring.r[1], motionT)],
    b: [lerp(unit.sep.b[0], unit.ring.b[0], motionT), lerp(unit.sep.b[1], unit.ring.b[1], motionT)],
    o: [lerp(unit.sep.o[0], unit.ring.o[0], motionT), lerp(unit.sep.o[1], unit.ring.o[1], motionT)],
    nextIndex: unit.nextIndex,
  }));

  // Tab 2 coordinates: linear angstrom scale x = 150 + len * 240
  const mol = MOLECULES[selectedMol];
  const rulerOriginX = 150;
  const pxPerA = 240;
  const xAtom1 = rulerOriginX;
  const xAtom2 = rulerOriginX + mol.lengthA * pxPerA;
  const xRefSingle = rulerOriginX + 1.37 * pxPerA;
  const bondMidX = (xAtom1 + xAtom2) / 2;

  return (
    <div className="my-8 sm:my-10 rounded-2xl bg-white text-slate-900 border-2 border-slate-900 shadow-md overflow-hidden not-prose">
      {/* Header & Joined Segmented Control Tabs */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b-2 border-slate-900 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Interactive Chemistry Model (Nature Chemistry 2026)
          </p>
          <p className="text-sm sm:text-base font-extrabold text-slate-900">
            {tab === 'shield'
              ? 'Drag the side-group shield bar, then test what happens at room temperature'
              : 'Compare boron-oxygen bond lengths side by side'}
          </p>
        </div>

        <div className="inline-flex border-2 border-slate-900 rounded-lg overflow-hidden shrink-0 self-start md:self-auto bg-white">
          <button
            type="button"
            onClick={() => setTab('shield')}
            className={`px-3.5 py-2 text-xs font-bold border-r border-slate-900 cursor-pointer transition-colors ${
              tab === 'shield'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            1. Stop the Clumping
          </button>
          <button
            type="button"
            onClick={() => setTab('ruler')}
            className={`px-3.5 py-2 text-xs font-bold cursor-pointer transition-colors ${
              tab === 'ruler'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            2. Bond Ruler
          </button>
        </div>
      </div>

      {tab === 'shield' ? (
        <div className="p-4 sm:p-6">
          {/* Readouts Strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 text-center">
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                Shield Size
              </p>
              <p className="text-sm sm:text-lg font-extrabold text-slate-900 mt-0.5 font-mono">
                {shield}%
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                Charge Pull
              </p>
              <p className="text-sm sm:text-lg font-extrabold text-slate-900 mt-0.5 font-mono">
                {chargeLabel}
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                Room State
              </p>
              <p className="text-sm sm:text-lg font-extrabold text-slate-900 mt-0.5 font-mono">
                {isStable ? 'Intact B≡O' : '6-Atom Ring'}
              </p>
            </div>
          </div>

          {/* Monochrome Molecular Collision / Shielding Diagram */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 p-2 sm:p-4 mb-5">
            <svg
              viewBox="0 0 640 280"
              className="w-full h-auto block"
              role="img"
              aria-label="Monochrome simulation of three oxoborane molecules clumping into a ring or bouncing apart with shields"
            >
              <defs>
                <pattern id="shieldHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width="8" height="8" fill="#F8FAFC" />
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#94A3B8" strokeWidth="2" />
                </pattern>
              </defs>

              {/* Corner Ambient Label */}
              <text x="14" y="25" fill="#475569" fontSize="10" fontWeight="800">
                ROOM TEMP (25°C)
              </text>

              {/* Top Status Pill */}
              {isStable ? (
                <g>
                  <rect x="165" y="10" width="310" height="24" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                  <text x="320" y="26" textAnchor="middle" fill="#0F172A" fontSize="10.5" fontWeight="800">
                    BUMPERS BLOCK CONTACT · 3 B≡O BONDS INTACT
                  </text>
                </g>
              ) : (
                <g>
                  <rect x="160" y="10" width="320" height="24" rx="6" fill="#0F172A" />
                  <text x="320" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">
                    {ringLocked
                      ? 'TRIPLE BONDS SNAPPED · 6-ATOM BOROXINE RING'
                      : 'NO SHIELD · NEIGHBORS PULLING INWARD'}
                  </text>
                </g>
              )}

              {/* Subtle Bounce / Path Guides */}
              {isStable ? (
                <>
                  <circle cx="320" cy="144" r="22" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                  {bounceProgress > 0.25 && (
                    <g opacity={Math.min(1, bounceProgress * 1.4)}>
                      <line x1="308" y1="132" x2="332" y2="156" stroke="#0F172A" strokeWidth="2" />
                      <line x1="332" y1="132" x2="308" y2="156" stroke="#0F172A" strokeWidth="2" />
                    </g>
                  )}
                </>
              ) : (
                <polygon
                  points={liveUnits.map((u) => `${u.b[0]},${u.b[1]} ${u.o[0]},${u.o[1]}`).join(' ')}
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              )}

              {/* Cross-links forming the 6-atom boroxine ring when shield < 70 */}
              {!isStable &&
                ringOpacity > 0 &&
                liveUnits.map((u, idx) => {
                  const next = liveUnits[u.nextIndex];
                  return (
                    <line
                      key={`ring-link-${idx}`}
                      x1={u.o[0]}
                      y1={u.o[1]}
                      x2={next.b[0]}
                      y2={next.b[1]}
                      stroke="#0F172A"
                      strokeWidth="3.5"
                      strokeOpacity={ringOpacity}
                    />
                  );
                })}

              {/* The 3 R-B≡O Molecules */}
              {liveUnits.map((u, idx) => {
                const tripleLines = bondParallelLines(u.b[0], u.b[1], u.o[0], u.o[1], [-4.5, 0, 4.5]);
                const haloCx = lerp(u.r[0], u.b[0], 0.35);
                const haloCy = lerp(u.r[1], u.b[1], 0.35);

                return (
                  <g key={`mol-${idx}`}>
                    {/* Protective Shield Bumper Halo */}
                    <circle
                      cx={haloCx}
                      cy={haloCy}
                      r={bumperRadius}
                      fill={isStable ? 'url(#shieldHatch)' : 'none'}
                      stroke={isStable ? '#0F172A' : '#94A3B8'}
                      strokeWidth={isStable ? '2' : '1.5'}
                      strokeDasharray={isStable ? 'none' : '4 3'}
                    />

                    {/* R to B single tether */}
                    <line x1={u.r[0]} y1={u.r[1]} x2={u.b[0]} y2={u.b[1]} stroke="#475569" strokeWidth="3" />

                    {/* B to O Bond (3 lines when intact, 1 line when snapped into ring) */}
                    {ringLocked ? (
                      <line x1={u.b[0]} y1={u.b[1]} x2={u.o[0]} y2={u.o[1]} stroke="#0F172A" strokeWidth="3.5" />
                    ) : (
                      tripleLines.map((ln, lineIdx) => (
                        <line
                          key={`triple-${idx}-${lineIdx}`}
                          x1={ln.x1}
                          y1={ln.y1}
                          x2={ln.x2}
                          y2={ln.y2}
                          stroke="#0F172A"
                          strokeWidth="2.4"
                        />
                      ))
                    )}

                    {/* R Side Group Badge */}
                    <circle cx={u.r[0]} cy={u.r[1]} r="10.5" fill="#475569" stroke="#0F172A" strokeWidth="1.5" />
                    <text x={u.r[0]} y={u.r[1] + 3.5} textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
                      R
                    </text>

                    {/* Boron Atom */}
                    <circle cx={u.b[0]} cy={u.b[1]} r="14" fill="#0F172A" />
                    <text x={u.b[0]} y={u.b[1] + 4.5} textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900">
                      B
                    </text>

                    {/* Oxygen Atom */}
                    <circle cx={u.o[0]} cy={u.o[1]} r="13" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
                    <text x={u.o[0]} y={u.o[1] + 4.5} textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="900">
                      O
                    </text>
                  </g>
                );
              })}

              {/* Clean Footer Annotations */}
              <text x="14" y="268" fill="#475569" fontSize="10.5" fontWeight="700">
                {isStable
                  ? 'R shield feeds electrons + blocks neighbor contact'
                  : 'Exposed B(+) grabs neighbor O(-) into a 6-atom ring'}
              </text>
              <text x="626" y="268" textAnchor="end" fill="#0F172A" fontSize="10.5" fontWeight="800">
                {isStable ? '1.21 Å B≡O preserved' : 'Triple bond lost'}
              </text>
            </svg>
          </div>

          {/* Single Slider Control + Tactile Rectangular Replay Button */}
          <div className="mb-5">
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={shield}
              onChange={(e) => handleSliderChange(e.target.value)}
              onPointerUp={runSimulation}
              onKeyUp={(e) => {
                if (e.key.startsWith('Arrow')) runSimulation();
              }}
              aria-label="Adjust protective side-group shield between 10% and 100%"
              className="w-full accent-slate-900 cursor-pointer h-3 bg-slate-200 rounded-lg border border-slate-400"
            />
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-slate-600 mt-1.5 font-mono">
              <span>10% (1960s Bare)</span>
              <span>70% (Threshold)</span>
              <span>100% (2026 Shield)</span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
              <button
                type="button"
                onClick={runSimulation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-slate-900 bg-slate-900 hover:bg-slate-800 active:translate-y-0.5 text-white text-xs sm:text-sm font-bold shadow-[0_3px_0_#475569] active:shadow-none cursor-pointer transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{running ? 'Running...' : 'Test Room Temp'}</span>
              </button>
              <span className="text-xs font-semibold text-slate-500">
                Tip: drag past 70% to stop the molecules from fusing into a ring.
              </span>
            </div>
          </div>

          {/* Monochrome Verdict Box */}
          <div
            className={`rounded-xl p-4 border-2 border-slate-900 flex items-start gap-3 ${
              isStable ? 'bg-slate-50 text-slate-900' : 'bg-slate-900 text-white'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border-2 ${
                isStable
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-white bg-white text-slate-900'
              }`}
            >
              {isStable ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </div>
            <div className="text-xs sm:text-sm leading-relaxed font-medium">
              {isStable ? (
                <>
                  <strong className="font-extrabold block mb-0.5 text-slate-900">
                    STABLE CRYSTAL AT ROOM TEMP (2026 Breakthrough)
                  </strong>
                  <span className="text-slate-700">
                    At {shield}% shield size, the side group balances boron&apos;s missing electron pull and physically keeps neighboring O atoms at bay. The crystal sits in a bottle with all three B≡O triple bonds intact.
                  </span>
                </>
              ) : (
                <>
                  <strong className="font-extrabold block mb-0.5 text-white">
                    CLUMPED INTO A RING (60-Year Failure)
                  </strong>
                  <span className="text-slate-200">
                    With only a {shield}% shield, the electron-hungry boron center pulls the oxygen end of the next molecule straight in. Within moments, three molecules lock into a flat six-atom boroxine ring and lose their triple bonds.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-6">
          {/* 3-Button Molecule Selector */}
          <div className="flex flex-wrap gap-2.5 mb-5">
            {Object.values(MOLECULES).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedMol(item.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold border-2 border-slate-900 cursor-pointer transition-all shadow-[0_3px_0_#475569] active:translate-y-0.5 active:shadow-none ${
                  selectedMol === item.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Bond Length Scale SVG */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 p-2 sm:p-4 mb-5">
            <svg
              viewBox="0 0 640 230"
              className="w-full h-auto block"
              role="img"
              aria-label={`Scale comparison of ${mol.label} at ${mol.lengthA} angstroms`}
            >
              <defs>
                <pattern id="rulerHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width="6" height="6" fill="#E2E8F0" />
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#0F172A" strokeWidth="2" />
                </pattern>
              </defs>

              {/* Top Right Category Tag */}
              <text x="622" y="24" textAnchor="end" fill="#475569" fontSize="10" fontWeight="800">
                {mol.badge}
              </text>

              {/* Protective R-Shield Capsule on Left for 2026 Oxoborane */}
              {mol.hasShield && (
                <g>
                  <line x1="112" y1="88" x2={xAtom1} y2="88" stroke="#475569" strokeWidth="3.5" />
                  <rect
                    x="44"
                    y="54"
                    width="72"
                    height="68"
                    rx="24"
                    fill="url(#rulerHatch)"
                    stroke="#0F172A"
                    strokeWidth="2.5"
                  />
                  <rect x="53" y="77" width="54" height="22" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                  <text x="80" y="91.5" textAnchor="middle" fill="#0F172A" fontSize="9.5" fontWeight="900">
                    SHIELD
                  </text>
                </g>
              )}

              {/* Distance Pill Above Bond */}
              <rect x={bondMidX - 44} y="24" width="88" height="24" rx="6" fill="#0F172A" />
              <text x={bondMidX} y="40" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="900">
                {mol.lengthA.toFixed(2)} Å
              </text>

              {/* Bond Bars (1 or 3 parallel lines) */}
              {mol.bondOrder === 1 ? (
                <line x1={xAtom1} y1="88" x2={xAtom2} y2="88" stroke="#0F172A" strokeWidth="6" />
              ) : (
                [-11, 0, 11].map((dy, idx) => (
                  <line
                    key={`bar-${idx}`}
                    x1={xAtom1}
                    y1={88 + dy}
                    x2={xAtom2}
                    y2={88 + dy}
                    stroke="#0F172A"
                    strokeWidth="4.2"
                  />
                ))
              )}

              {/* Drop Lines to Precision Ruler */}
              <line x1={xAtom1} y1="114" x2={xAtom1} y2="160" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1={xAtom2} y1="112" x2={xAtom2} y2="160" stroke="#0F172A" strokeWidth="2" strokeDasharray="4 3" />

              {/* Left Atom (B or C) */}
              <circle cx={xAtom1} cy="88" r="26" fill="#0F172A" />
              <text x={xAtom1} y="95" textAnchor="middle" fill="#FFFFFF" fontSize="19" fontWeight="900">
                {mol.leftAtom}
              </text>

              {/* Right Atom (O) */}
              <circle cx={xAtom2} cy="88" r="24" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
              <text x={xAtom2} y="95" textAnchor="middle" fill="#0F172A" fontSize="19" fontWeight="900">
                {mol.rightAtom}
              </text>

              {/* 1.37 Å Reference Line & 11% Compression Span Sitting Above Ruler */}
              {mol.id === 'oxoborane' && (
                <g>
                  <rect
                    x={xAtom2}
                    y="148"
                    width={xRefSingle - xAtom2}
                    height="12"
                    fill="url(#rulerHatch)"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                  />
                  <line x1={xRefSingle} y1="126" x2={xRefSingle} y2="160" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1={xRefSingle} y1="130" x2={xRefSingle + 8} y2="130" stroke="#475569" strokeWidth="1.5" />
                  <text x={xRefSingle + 11} y="133.5" textAnchor="start" fill="#475569" fontSize="9.5" fontWeight="800">
                    B-O single (1.37 Å)
                  </text>
                </g>
              )}

              {/* Scale Ruler Axis (0.0 to 1.6 Å) */}
              <line x1={rulerOriginX} y1="160" x2={rulerOriginX + 1.6 * pxPerA} y2="160" stroke="#0F172A" strokeWidth="2.5" />
              {[0.0, 0.4, 0.8, 1.2, 1.6].map((val) => {
                const tx = rulerOriginX + val * pxPerA;
                return (
                  <g key={`tick-${val}`}>
                    <line x1={tx} y1="154" x2={tx} y2="167" stroke="#0F172A" strokeWidth="2" />
                    <text x={tx} y="182" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="700">
                      {val.toFixed(1)} Å
                    </text>
                  </g>
                );
              })}

              {/* Clean Footer Caption */}
              <text x="320" y="212" textAnchor="middle" fill="#0F172A" fontSize="10.5" fontWeight="800">
                {mol.id === 'oxoborane'
                  ? '1.21 Å vs 1.37 Å single bond (-11% shorter · 1 Å = 0.1 billionths of a meter)'
                  : '1 angstrom (Å) = one ten-billionth of a meter'}
              </text>
            </svg>
          </div>

          {/* Monochrome Verdict Box */}
          <div className="rounded-xl p-4 border-2 border-slate-900 bg-slate-50 flex items-start gap-3">
            <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border-2 border-slate-900 bg-slate-900 text-white">
              <Check className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm leading-relaxed font-medium">
              <strong className="font-extrabold block mb-0.5 text-slate-900">
                {mol.summaryTitle}
              </strong>
              <span className="text-slate-700">{mol.summaryText}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
