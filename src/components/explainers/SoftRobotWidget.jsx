"use client";

import { useState, useEffect, useRef } from 'react';
import { Play, Check, X } from 'lucide-react';

const THRESHOLD_PRESSURE = 35;

const SPEED_MODES = {
  old2022: {
    id: 'old2022',
    buttonLabel: '2022 Soft Robot (0.04 m/s)',
    verdictTitle: '2022 AIR ROBOT: 0.04 m/s (1-STAGE EXHAUST WASTE)',
    verdictText:
      'The 2022 soft robot ran on compressed air too, but each step exhausted high-pressure air straight out before it finished pushing. Top speed stayed at 4 centimeters per second.',
    isPositive: false,
  },
  walk: {
    id: 'walk',
    buttonLabel: 'Brisk Walk (1.40 m/s)',
    verdictTitle: 'HUMAN BRISK WALK: 1.40 m/s (BASELINE COMPARISON)',
    verdictText:
      'A brisk human walk covers about 1.40 meters per second. Most earlier air-powered soft robots moved far slower than a toddler crawling.',
    isPositive: true,
  },
  new2026: {
    id: 'new2026',
    buttonLabel: '2026 UCSD Robot (4.72 m/s)',
    verdictTitle: '2026 COMPOUND ROBOT: 4.72 m/s (118x FASTER THAN 2022)',
    verdictText:
      'By routing high-pressure air through built-in valve chambers first and recycling it into larger leg chambers, the single-piece 3D-printed robot hits 4.72 m/s (about 17 km/h) with zero chips.',
    isPositive: true,
  },
};

export default function SoftRobotWidget() {
  const [tab, setTab] = useState('engine'); // 'engine' | 'speed'
  const [pressure, setPressure] = useState(80);
  const [simProgress, setSimProgress] = useState(1);
  const [running, setRunning] = useState(false);
  const [speedMode, setSpeedMode] = useState('new2026');

  const rafRef = useRef(null);
  const isActive = pressure >= THRESHOLD_PRESSURE;
  const speedVal = isActive
    ? (0.85 + ((pressure - THRESHOLD_PRESSURE) / (100 - THRESHOLD_PRESSURE)) * (4.72 - 0.85)).toFixed(2)
    : '0.00';
  const speedLabel = isActive ? `${speedVal} m/s` : 'Stalled';
  const valveLabel = isActive ? '2-Stage' : 'Too Low';

  const runSimulation = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const durationMs = 1400;
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
    setPressure(num);
    setSimProgress(1);
  };

  // Smooth alternating tripod stride phase across 2 cycles during 1400ms run
  const phase = isActive ? Math.sin(simProgress * Math.PI * 4) : 0;
  const legAOffset = isActive ? phase * 10 : 0;
  const legBOffset = isActive ? -phase * 10 : 0;
  const valveOnA = !isActive ? false : phase >= 0;
  const activeSpeed = SPEED_MODES[speedMode];

  return (
    <div className="my-8 sm:my-10 rounded-2xl bg-white text-slate-900 border-2 border-slate-900 shadow-md overflow-hidden not-prose">
      {/* Header & Joined Segmented Control Tabs */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b-2 border-slate-900 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Interactive Robotics Model (Science Robotics 2026)
          </p>
          <p className="text-sm sm:text-base font-extrabold text-slate-900">
            {tab === 'engine'
              ? 'Slide air pressure up, then run a stride cycle to see 2-stage timing with zero chips'
              : 'Compare the 2022 air robot against a brisk walk and the 2026 compound robot'}
          </p>
        </div>

        <div className="inline-flex border-2 border-slate-900 rounded-lg overflow-hidden shrink-0 self-start md:self-auto bg-white">
          <button
            type="button"
            onClick={() => setTab('engine')}
            className={`px-3.5 py-2 text-xs font-bold border-r border-slate-900 cursor-pointer transition-colors ${
              tab === 'engine'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            1. Compound Air Engine
          </button>
          <button
            type="button"
            onClick={() => setTab('speed')}
            className={`px-3.5 py-2 text-xs font-bold cursor-pointer transition-colors ${
              tab === 'speed'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            2. 2022 vs 2026 Speed
          </button>
        </div>
      </div>

      {tab === 'engine' ? (
        <div className="p-4 sm:p-6">
          {/* Readouts Strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 text-center">
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                Air Supply
              </p>
              <p className="text-xs sm:text-lg font-extrabold text-slate-900 mt-0.5 font-mono whitespace-nowrap">
                {pressure}%
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                Valve Mode
              </p>
              <p className="text-xs sm:text-lg font-extrabold text-slate-900 mt-0.5 font-mono whitespace-nowrap">
                {valveLabel}
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                Top Speed
              </p>
              <p className="text-xs sm:text-lg font-extrabold text-slate-900 mt-0.5 font-mono whitespace-nowrap">
                {speedLabel}
              </p>
            </div>
          </div>

          {/* Monochrome Compound Air Engine Simulator SVG */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 p-2 sm:p-4 mb-5">
            <svg
              viewBox="0 0 640 280"
              className="w-full h-auto block"
              role="img"
              aria-label="Monochrome diagram showing two-stage air recycling between valve chambers and six soft legs with zero electronics"
            >
              {/* Top Comparison Strip */}
              <rect x="14" y="10" width="430" height="24" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
              <text x="24" y="26" fill="#475569" fontSize="10" fontWeight="800">
                OLD 1-STAGE VALVE: High-pressure air vents out unused
              </text>

              {/* Corner Badge */}
              <rect x="456" y="10" width="170" height="24" rx="5" fill="#0F172A" />
              <text x="541" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
                ZERO CHIPS · ZERO WIRES
              </text>

              {/* Main Frame */}
              <rect x="14" y="44" width="612" height="202" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />

              {/* Left Input: Air Supply */}
              <rect x="28" y="96" width="102" height="58" rx="8" fill={isActive ? '#0F172A' : '#F1F5F9'} stroke="#0F172A" strokeWidth="2" />
              <text x="79" y="121" textAnchor="middle" fill={isActive ? '#FFFFFF' : '#0F172A'} fontSize="10" fontWeight="800">
                AIR SUPPLY
              </text>
              <text x="79" y="139" textAnchor="middle" fill={isActive ? '#CBD5E1' : '#475569'} fontSize="11" fontWeight="900">
                {pressure}% INPUT
              </text>

              {/* Flow Pipe 1: Supply -> Stage 1 Valve */}
              <line x1="130" y1="125" x2="176" y2="125" stroke={isActive ? '#0F172A' : '#94A3B8'} strokeWidth={isActive ? '4' : '2.5'} strokeDasharray={isActive ? 'none' : '5 4'} />
              <polygon points="172,119 184,125 172,131" fill={isActive ? '#0F172A' : '#94A3B8'} />

              {/* Stage 1: Compact High-Pressure Valve */}
              <rect x="186" y="76" width="144" height="98" rx="10" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
              <text x="258" y="94" textAnchor="middle" fill="#0F172A" fontSize="9.5" fontWeight="900">
                STAGE 1: VALVE CHAMBER
              </text>
              <text x="258" y="107" textAnchor="middle" fill="#475569" fontSize="8.5" fontWeight="700">
                {isActive ? 'Keeps timing with air alone' : 'Needs 35%+ to snap shut'}
              </text>

              {/* Internal Flipping Soft Valve Blocks (A / B) */}
              <rect
                x="202"
                y="118"
                width="50"
                height="42"
                rx="6"
                fill={valveOnA ? '#0F172A' : '#FFFFFF'}
                stroke="#0F172A"
                strokeWidth="2"
              />
              <text x="227" y="137" textAnchor="middle" fill={valveOnA ? '#FFFFFF' : '#0F172A'} fontSize="9" fontWeight="900">
                SET A
              </text>
              <text x="227" y="150" textAnchor="middle" fill={valveOnA ? '#CBD5E1' : '#64748B'} fontSize="8" fontWeight="700">
                {isActive ? (valveOnA ? 'OPEN' : 'WAIT') : 'IDLE'}
              </text>

              <rect
                x="264"
                y="118"
                width="50"
                height="42"
                rx="6"
                fill={isActive && !valveOnA ? '#0F172A' : '#FFFFFF'}
                stroke="#0F172A"
                strokeWidth="2"
              />
              <text x="289" y="137" textAnchor="middle" fill={isActive && !valveOnA ? '#FFFFFF' : '#0F172A'} fontSize="9" fontWeight="900">
                SET B
              </text>
              <text x="289" y="150" textAnchor="middle" fill={isActive && !valveOnA ? '#CBD5E1' : '#64748B'} fontSize="8" fontWeight="700">
                {isActive ? (!valveOnA ? 'OPEN' : 'WAIT') : 'IDLE'}
              </text>

              {/* Flow Pipe 2: Recycled Air -> Stage 2 Leg Chambers */}
              <line x1="330" y1="125" x2="394" y2="125" stroke={isActive ? '#0F172A' : '#94A3B8'} strokeWidth={isActive ? '4' : '2.5'} strokeDasharray={isActive ? 'none' : '5 4'} />
              <polygon points="390,119 402,125 390,131" fill={isActive ? '#0F172A' : '#94A3B8'} />
              <text x="364" y="114" textAnchor="middle" fill="#0F172A" fontSize="8.5" fontWeight="900">
                RECYCLED
              </text>
              <text x="364" y="142" textAnchor="middle" fill="#475569" fontSize="8.5" fontWeight="700">
                2nd push
              </text>

              {/* Stage 2: Large Leg Chambers + 6 Alternating Legs */}
              <rect x="404" y="64" width="206" height="104" rx="12" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.2" />
              <text x="507" y="84" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="900">
                STAGE 2: 6 LEG CHAMBERS
              </text>
              <text x="507" y="98" textAnchor="middle" fill="#475569" fontSize="8.5" fontWeight="700">
                Larger chambers catch leftover pressure
              </text>

              {/* Leg Legend Pills Inside Stage 2 */}
              <rect x="424" y="110" width="78" height="22" rx="4" fill="#0F172A" />
              <text x="463" y="124.5" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">
                3 LEGS (A)
              </text>
              <rect x="512" y="110" width="78" height="22" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.8" />
              <text x="551" y="124.5" textAnchor="middle" fill="#0F172A" fontSize="8.5" fontWeight="800">
                3 LEGS (B)
              </text>

              {/* 6 Articulated Soft Legs Extending Downward to Ground Line */}
              {[0, 1, 2, 3, 4, 5].map((idx) => {
                const isGroupA = idx % 2 === 0;
                const baseX = 426 + idx * 32;
                const dx = isGroupA ? legAOffset : legBOffset;
                const liftY = isActive ? (isGroupA ? (valveOnA ? -6 : 0) : (!valveOnA ? -6 : 0)) : 0;
                return (
                  <g key={idx}>
                    <line
                      x1={baseX}
                      y1="168"
                      x2={baseX + dx}
                      y2={212 + liftY}
                      stroke="#0F172A"
                      strokeWidth={isGroupA ? '7' : '6'}
                      strokeLinecap="round"
                    />
                    {!isGroupA && (
                      <line
                        x1={baseX}
                        y1="168"
                        x2={baseX + dx}
                        y2={212 + liftY}
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    )}
                    <circle
                      cx={baseX + dx}
                      cy={212 + liftY}
                      r="4.5"
                      fill={isGroupA ? '#0F172A' : '#FFFFFF'}
                      stroke="#0F172A"
                      strokeWidth="2"
                    />
                  </g>
                );
              })}

              {/* Ground Line */}
              <line x1="406" y1="220" x2="608" y2="220" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
              <text x="507" y="235" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="800">
                {isActive ? 'Alternating tripod stride' : 'Insufficient air pressure'}
              </text>

              {/* Clean Footer Annotations */}
              <text x="14" y="268" fill="#475569" fontSize="10.5" fontWeight="700">
                {isActive
                  ? 'Air expands twice: small valve chambers first, then large leg chambers'
                  : 'Below 35% air pressure, soft valve channels cannot snap closed'}
              </text>
              <text x="626" y="268" textAnchor="end" fill="#0F172A" fontSize="10.5" fontWeight="800">
                {isActive ? `Running at ${speedVal} m/s` : 'Stalled (0.00 m/s)'}
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
              value={pressure}
              onChange={(e) => handleSliderChange(e.target.value)}
              onPointerUp={runSimulation}
              onKeyUp={(e) => {
                if (e.key.startsWith('Arrow')) runSimulation();
              }}
              aria-label="Adjust compressed air supply pressure between 10% and 100%"
              className="w-full accent-slate-900 cursor-pointer h-3 bg-slate-200 rounded-lg border border-slate-400"
            />
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-slate-600 mt-1.5 font-mono">
              <span>10% (Too Weak)</span>
              <span>35% (Valve Snap)</span>
              <span>100% (4.72 m/s)</span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
              <button
                type="button"
                onClick={runSimulation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-slate-900 bg-slate-900 hover:bg-slate-800 active:translate-y-0.5 text-white text-xs sm:text-sm font-bold shadow-[0_3px_0_#475569] active:shadow-none cursor-pointer transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{running ? 'Stepping...' : 'Run Stride Cycle'}</span>
              </button>
              <span className="text-xs font-semibold text-slate-500">
                Tip: slide past 35% to snap the internal air valves and recycle pressure into the legs.
              </span>
            </div>
          </div>

          {/* Monochrome Verdict Box */}
          <div
            className={`rounded-xl p-4 border-2 border-slate-900 flex items-start gap-3 ${
              isActive ? 'bg-slate-50 text-slate-900' : 'bg-slate-900 text-white'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border-2 ${
                isActive
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-white bg-white text-slate-900'
              }`}
            >
              {isActive ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </div>
            <div className="text-xs sm:text-sm leading-relaxed font-medium">
              {isActive ? (
                <>
                  <strong className="font-extrabold block mb-0.5 text-slate-900">
                    TWO-STAGE COMPOUND EXPANSION ACTIVE ({speedVal} m/s)
                  </strong>
                  <span className="text-slate-700">
                    At {pressure}% air supply, compressed air snaps the small timing valve first, then expands a second time into the larger leg chambers. That extra push hits {speedVal} m/s with zero electronics.
                  </span>
                </>
              ) : (
                <>
                  <strong className="font-extrabold block mb-0.5 text-white">
                    VALVES STALLED (PRESSURE TOO LOW)
                  </strong>
                  <span className="text-slate-200">
                    At {pressure}% air supply, pressure is too weak to buckle the built-in soft valve channels. Without the Stage 1 switch snapping back and forth, air leaks straight out and the legs stay still.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-6">
          {/* 3-Button Selector */}
          <div className="flex flex-wrap gap-2.5 mb-5">
            {Object.values(SPEED_MODES).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSpeedMode(item.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold border-2 border-slate-900 cursor-pointer transition-all shadow-[0_3px_0_#475569] active:translate-y-0.5 active:shadow-none ${
                  speedMode === item.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.buttonLabel}
              </button>
            ))}
          </div>

          {/* Monochrome Speed Comparison Bar Chart SVG */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 p-2 sm:p-4 mb-5">
            <svg
              viewBox="0 0 640 240"
              className="w-full h-auto block"
              role="img"
              aria-label={`Horizontal speed comparison chart highlighting ${activeSpeed.buttonLabel}`}
            >
              <defs>
                <pattern id="speedMonoHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width="6" height="6" fill="#F1F5F9" />
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#475569" strokeWidth="1.8" />
                </pattern>
              </defs>

              <rect x="14" y="10" width="612" height="172" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
              <text x="28" y="34" fill="#475569" fontSize="10" fontWeight="800">
                MEASURED TOP SPEED ON LEVEL GROUND (SCIENCE ROBOTICS 2026)
              </text>

              {/* Row 1: 2022 Soft Robot (0.04 m/s -> min visible 8px bar) */}
              <text x="158" y="70" textAnchor="end" fill="#0F172A" fontSize="11" fontWeight="700">
                2022 Soft Robot
              </text>
              <rect
                x="170"
                y="54"
                width="8"
                height="24"
                rx="3"
                fill={speedMode === 'old2022' ? '#0F172A' : '#CBD5E1'}
                stroke="#0F172A"
                strokeWidth="1.2"
              />
              <text x="188" y="70" fill="#0F172A" fontSize="11" fontWeight="800">
                0.04 m/s (1-stage air)
              </text>

              {/* Row 2: Brisk Walk (1.40 m/s -> 1.40/5.0 * 310 = 86.8px) */}
              <text x="158" y="112" textAnchor="end" fill="#0F172A" fontSize="11" fontWeight="700">
                Human Brisk Walk
              </text>
              <rect
                x="170"
                y="96"
                width="87"
                height="24"
                rx="4"
                fill={speedMode === 'walk' ? '#0F172A' : 'url(#speedMonoHatch)'}
                stroke="#0F172A"
                strokeWidth="1.5"
              />
              <text x="267" y="112" fill="#0F172A" fontSize="11" fontWeight="800">
                1.40 m/s (~5 km/h)
              </text>

              {/* Row 3: 2026 UCSD Robot (4.72 m/s -> 4.72/5.0 * 310 = 292.6px) */}
              <text x="158" y="154" textAnchor="end" fill="#0F172A" fontSize="11" fontWeight="900">
                2026 UCSD Robot
              </text>
              <rect
                x="170"
                y="138"
                width="293"
                height="24"
                rx="4"
                fill={speedMode === 'new2026' ? '#0F172A' : '#E2E8F0'}
                stroke="#0F172A"
                strokeWidth="2"
              />
              <text x="472" y="154" fill="#0F172A" fontSize="11" fontWeight="900">
                4.72 m/s (118x faster)
              </text>

              {/* Bottom Terrain Strip */}
              <rect x="14" y="192" width="612" height="36" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="320" y="214" textAnchor="middle" fill="#0F172A" fontSize="10.5" fontWeight="800">
                TESTED TERRAINS: CONCRETE · SAND · GRAVEL · MULCH · STAIRS · UNDERWATER
              </text>
            </svg>
          </div>

          {/* Monochrome Verdict Box */}
          <div
            className={`rounded-xl p-4 border-2 border-slate-900 flex items-start gap-3 ${
              activeSpeed.isPositive ? 'bg-slate-50 text-slate-900' : 'bg-slate-900 text-white'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border-2 ${
                activeSpeed.isPositive
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-white bg-white text-slate-900'
              }`}
            >
              {activeSpeed.isPositive ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </div>
            <div className="text-xs sm:text-sm leading-relaxed font-medium">
              <strong className={`font-extrabold block mb-0.5 ${activeSpeed.isPositive ? 'text-slate-900' : 'text-white'}`}>
                {activeSpeed.verdictTitle}
              </strong>
              <span className={activeSpeed.isPositive ? 'text-slate-700' : 'text-slate-200'}>
                {activeSpeed.verdictText}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
