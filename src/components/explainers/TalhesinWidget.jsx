"use client";

import { useState, useEffect, useRef } from 'react';
import { Play, Check, X } from 'lucide-react';

const THRESHOLD_GLUE = 55;

const CLAMP_MODES = {
  untreated: {
    id: 'untreated',
    buttonLabel: 'Untreated Aged Egg (46.7%)',
    verdictTitle: 'NO GLUE LEFT: CHROMATIDS SEPARATE EARLY (46.7% ERROR-FREE)',
    verdictText:
      'In aged mouse eggs without treatment, worn-out natural cohesin lets sister DNA strands drift apart before the cell divides. Only 46.7% of untreated aged eggs avoided premature chromosome separation.',
    isPositive: false,
  },
  locked: {
    id: 'locked',
    buttonLabel: 'TALhesin Locked (Before Split)',
    verdictTitle: 'SYNTHETIC CLAMP LOCKS SISTER STRANDS BACK TOGETHER',
    verdictText:
      'Delivered as mRNA, TALhesin builds DNA-binding arms that latch near the center (centromere) of both twin strands, holding the X shape tight until the cell finishes lining up its chromosomes.',
    isPositive: true,
  },
  cleaved: {
    id: 'cleaved',
    buttonLabel: 'TALhesin + Scissors (74.1%)',
    verdictTitle: 'TIMED RELEASE RESTORES CLEAN SPLITTING (74.1% ERROR-FREE)',
    verdictText:
      'An engineered cut site lets the cell enzyme separase snip TALhesin open right on cue. Error-free aged mouse eggs jumped from 46.7% to 74.1%, nearly matching young control eggs (74.7%).',
    isPositive: true,
  },
};

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function Chromatid({ x, y, angle = 0, dark = true, label = '1' }) {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
      <rect
        x="-12"
        y="-38"
        width="24"
        height="76"
        rx="12"
        fill={dark ? '#0F172A' : '#FFFFFF'}
        stroke="#0F172A"
        strokeWidth="2.5"
      />
      <circle
        cx="0"
        cy="0"
        r="7"
        fill={dark ? '#FFFFFF' : '#0F172A'}
      />
      <text
        x="0"
        y="3.5"
        textAnchor="middle"
        fill={dark ? '#0F172A' : '#FFFFFF'}
        fontSize="9.5"
        fontWeight="900"
      >
        {label}
      </text>
    </g>
  );
}

export default function TalhesinWidget() {
  const [tab, setTab] = useState('glue'); // 'glue' | 'clamp'
  const [glue, setGlue] = useState(25);
  const [simProgress, setSimProgress] = useState(1);
  const [running, setRunning] = useState(false);
  const [clampMode, setClampMode] = useState('locked');

  const rafRef = useRef(null);
  const isIntact = glue >= THRESHOLD_GLUE;
  const gripLabel = glue < 35 ? 'Split Early' : glue < THRESHOLD_GLUE ? 'Loose' : 'Locked';

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
    setGlue(num);
    setSimProgress(1);
  };

  // Tab 1 live animation positions inside 640x280
  let c1x = 305;
  let c1y = 146;
  let c1a = 0;
  let c2x = 335;
  let c2y = 146;
  let c2a = 0;
  let cohesinOpacity = 1;

  if (isIntact) {
    if (simProgress < 0.45) {
      const alignT = easeInOut(simProgress / 0.45);
      c1x = lerp(296, 305, alignT);
      c2x = lerp(344, 335, alignT);
      cohesinOpacity = 1;
    } else {
      const moveT = easeInOut((simProgress - 0.45) / 0.55);
      c1x = lerp(305, 175, moveT);
      c2x = lerp(335, 465, moveT);
      cohesinOpacity = Math.max(0, 1 - (simProgress - 0.45) / 0.16);
    }
  } else {
    if (simProgress < 0.4) {
      const driftT = easeInOut(simProgress / 0.4);
      c1x = lerp(298, 272, driftT);
      c1y = lerp(146, 128, driftT);
      c1a = lerp(0, -18, driftT);
      c2x = lerp(342, 355, driftT);
      c2y = lerp(146, 166, driftT);
      c2a = lerp(0, 22, driftT);
      cohesinOpacity = Math.max(0, 1 - driftT * 1.4);
    } else {
      const pullT = easeInOut((simProgress - 0.4) / 0.6);
      c1x = lerp(272, 152, pullT);
      c1y = lerp(128, 124, pullT);
      c1a = lerp(-18, -8, pullT);
      c2x = lerp(355, 206, pullT);
      c2y = lerp(166, 170, pullT);
      c2a = lerp(22, 12, pullT);
      cohesinOpacity = 0;
    }
  }

  const activeClamp = CLAMP_MODES[clampMode];

  return (
    <div className="my-8 sm:my-10 rounded-2xl bg-white text-slate-900 border-2 border-slate-900 shadow-md overflow-hidden not-prose">
      {/* Header & Joined Segmented Control Tabs */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b-2 border-slate-900 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Interactive Biology Model (Science 2026)
          </p>
          <p className="text-sm sm:text-base font-extrabold text-slate-900">
            {tab === 'glue'
              ? 'Slide natural glue down, then run division to see why aged eggs split wrong'
              : 'Compare untreated aged eggs against TALhesin artificial glue and timed release'}
          </p>
        </div>

        <div className="inline-flex border-2 border-slate-900 rounded-lg overflow-hidden shrink-0 self-start md:self-auto bg-white">
          <button
            type="button"
            onClick={() => setTab('glue')}
            className={`px-3.5 py-2 text-xs font-bold border-r border-slate-900 cursor-pointer transition-colors ${
              tab === 'glue'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            1. Why Aged Eggs Fail
          </button>
          <button
            type="button"
            onClick={() => setTab('clamp')}
            className={`px-3.5 py-2 text-xs font-bold cursor-pointer transition-colors ${
              tab === 'clamp'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            2. TALhesin Clamp
          </button>
        </div>
      </div>

      {tab === 'glue' ? (
        <div className="p-4 sm:p-6">
          {/* Readouts Strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 text-center">
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                Cohesin Glue
              </p>
              <p className="text-xs sm:text-lg font-extrabold text-slate-900 mt-0.5 font-mono whitespace-nowrap">
                {glue}%
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                X-Pair Grip
              </p>
              <p className="text-xs sm:text-lg font-extrabold text-slate-900 mt-0.5 font-mono whitespace-nowrap">
                {gripLabel}
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                Split Result
              </p>
              <p className="text-xs sm:text-lg font-extrabold text-slate-900 mt-0.5 font-mono whitespace-nowrap">
                {isIntact ? 'Even 1 + 1' : 'Wrong 2 + 0'}
              </p>
            </div>
          </div>

          {/* Monochrome Meiosis Split Simulator SVG */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 p-2 sm:p-4 mb-5">
            <svg
              viewBox="0 0 640 280"
              className="w-full h-auto block"
              role="img"
              aria-label="Monochrome simulation showing how low cohesin glue causes two sister chromatids to pull to one side during egg division"
            >
              {/* Left & Right Corner Count Badges */}
              <rect x="14" y="10" width="112" height="24" rx="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="70" y="26" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="800">
                {isIntact ? 'LEFT: 1 COPY' : 'LEFT: 2 COPIES'}
              </text>

              <rect x="514" y="10" width="112" height="24" rx="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="570" y="26" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="800">
                {isIntact ? 'RIGHT: 1 COPY' : 'RIGHT: 0 COPIES'}
              </text>

              {/* Top Status Pill */}
              {isIntact ? (
                <g>
                  <rect x="145" y="10" width="350" height="24" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                  <text x="320" y="26" textAnchor="middle" fill="#0F172A" fontSize="10.5" fontWeight="800">
                    COHESIN GLUE HOLDS · CLEAN 1 + 1 SPLIT
                  </text>
                </g>
              ) : (
                <g>
                  <rect x="140" y="10" width="360" height="24" rx="6" fill="#0F172A" />
                  <text x="320" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">
                    GLUE TOO LOW · STRANDS SPLIT EARLY (2 + 0 ERROR)
                  </text>
                </g>
              )}

              {/* Outer Cell Oval & Center Division Line */}
              <ellipse cx="320" cy="146" rx="292" ry="96" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
              <line x1="320" y1="54" x2="320" y2="238" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="5 5" />

              {/* Left & Right Spindle Poles */}
              <circle cx="64" cy="146" r="7" fill="#0F172A" />
              <circle cx="576" cy="146" r="7" fill="#0F172A" />

              {/* Pulling Spindle Fibers */}
              <line x1="64" y1="146" x2={c1x} y2={c1y} stroke="#64748B" strokeWidth="1.8" strokeDasharray="4 3" />
              {isIntact ? (
                <line x1="576" y1="146" x2={c2x} y2={c2y} stroke="#64748B" strokeWidth="1.8" strokeDasharray="4 3" />
              ) : (
                <>
                  <line x1="64" y1="146" x2={c2x} y2={c2y} stroke="#64748B" strokeWidth="1.8" strokeDasharray="4 3" />
                  <circle cx="468" cy="146" r="24" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="468" y="150" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="800">
                    EMPTY
                  </text>
                </>
              )}

              {/* Natural Cohesin Glue Rings spanning the center */}
              {cohesinOpacity > 0 && (
                <g opacity={cohesinOpacity}>
                  <rect
                    x={Math.min(c1x, c2x) - 10}
                    y="134"
                    width={Math.abs(c2x - c1x) + 20}
                    height="24"
                    rx="12"
                    fill="none"
                    stroke={isIntact ? '#0F172A' : '#94A3B8'}
                    strokeWidth={isIntact ? '3' : '2'}
                    strokeDasharray={isIntact ? 'none' : '5 4'}
                  />
                </g>
              )}

              {/* Sister Chromatids 1 and 2 */}
              <Chromatid x={c1x} y={c1y} angle={c1a} dark={true} label="1" />
              <Chromatid x={c2x} y={c2y} angle={c2a} dark={false} label="2" />

              {/* Clean Footer Annotations */}
              <text x="14" y="268" fill="#475569" fontSize="10.5" fontWeight="700">
                {isIntact
                  ? 'Cohesin locks strands until the division scissor signal fires'
                  : 'Worn-out glue lets sister strands drift before alignment'}
              </text>
              <text x="626" y="268" textAnchor="end" fill="#0F172A" fontSize="10.5" fontWeight="800">
                {isIntact ? 'Healthy 1 + 1 split' : 'Error: 2 + 0 split'}
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
              value={glue}
              onChange={(e) => handleSliderChange(e.target.value)}
              onPointerUp={runSimulation}
              onKeyUp={(e) => {
                if (e.key.startsWith('Arrow')) runSimulation();
              }}
              aria-label="Adjust natural cohesin glue remaining between 10% and 100%"
              className="w-full accent-slate-900 cursor-pointer h-3 bg-slate-200 rounded-lg border border-slate-400"
            />
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-slate-600 mt-1.5 font-mono">
              <span>10% (Aged Egg)</span>
              <span>55% (Threshold)</span>
              <span>100% (Young Egg)</span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
              <button
                type="button"
                onClick={runSimulation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-slate-900 bg-slate-900 hover:bg-slate-800 active:translate-y-0.5 text-white text-xs sm:text-sm font-bold shadow-[0_3px_0_#475569] active:shadow-none cursor-pointer transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{running ? 'Dividing...' : 'Run Division'}</span>
              </button>
              <span className="text-xs font-semibold text-slate-500">
                Tip: slide past 55% to keep the chromosome pair locked until the cell divides.
              </span>
            </div>
          </div>

          {/* Monochrome Verdict Box */}
          <div
            className={`rounded-xl p-4 border-2 border-slate-900 flex items-start gap-3 ${
              isIntact ? 'bg-slate-50 text-slate-900' : 'bg-slate-900 text-white'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border-2 ${
                isIntact
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-white bg-white text-slate-900'
              }`}
            >
              {isIntact ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </div>
            <div className="text-xs sm:text-sm leading-relaxed font-medium">
              {isIntact ? (
                <>
                  <strong className="font-extrabold block mb-0.5 text-slate-900">
                    EVEN SPLIT (HEALTHY CHROMOSOME COUNT)
                  </strong>
                  <span className="text-slate-700">
                    At {glue}% cohesin glue, both twin strands stay zipped together at the center while cell fibers attach from opposite sides. One clean cut sends exactly 1 copy each way.
                  </span>
                </>
              ) : (
                <>
                  <strong className="font-extrabold block mb-0.5 text-white">
                    PREMATURE SPLIT (WRONG CHROMOSOME COUNT)
                  </strong>
                  <span className="text-slate-200">
                    At {glue}% cohesin glue, the protein rings cannot hold the pair together over decades. The strands drift apart early and get pulled into the same half, causing chromosome errors.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-6">
          {/* 3-Button Mode Selector */}
          <div className="flex flex-wrap gap-2.5 mb-5">
            {Object.values(CLAMP_MODES).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setClampMode(item.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold border-2 border-slate-900 cursor-pointer transition-all shadow-[0_3px_0_#475569] active:translate-y-0.5 active:shadow-none ${
                  clampMode === item.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.buttonLabel}
              </button>
            ))}
          </div>

          {/* Monochrome Centromere Clamp + Science 2026 Bar Chart SVG */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 p-2 sm:p-4 mb-5">
            <svg
              viewBox="0 0 640 265"
              className="w-full h-auto block"
              role="img"
              aria-label={`Diagram and mouse egg accuracy chart for ${activeClamp.buttonLabel}`}
            >
              <defs>
                <pattern id="clampMonoHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width="6" height="6" fill="#F1F5F9" />
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#475569" strokeWidth="1.8" />
                </pattern>
              </defs>

              {/* Top Diagram Panel */}
              <rect x="14" y="10" width="612" height="132" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />

              {clampMode === 'untreated' && (
                <g>
                  <rect x="130" y="18" width="380" height="22" rx="5" fill="#0F172A" />
                  <text x="320" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
                    UNTREATED AGED EGG · CHROMATIDS DRIFT APART
                  </text>

                  {/* Broken Empty Cohesin Outline */}
                  <ellipse cx="320" cy="92" rx="28" ry="14" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5 4" />
                  <line x1="310" y1="80" x2="330" y2="104" stroke="#0F172A" strokeWidth="2" />

                  <Chromatid x={205} y={92} angle={-15} dark={true} label="1" />
                  <Chromatid x={435} y={92} angle={16} dark={false} label="2" />
                </g>
              )}

              {clampMode === 'locked' && (
                <g>
                  <rect x="120" y="18" width="400" height="22" rx="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                  <text x="320" y="33" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="800">
                    TALHESIN CLAMP LOCKS CENTROMERES TOGETHER
                  </text>

                  <Chromatid x={302} y={92} angle={-8} dark={true} label="1" />
                  <Chromatid x={338} y={92} angle={8} dark={false} label="2" />

                  {/* TALhesin Clamp Sleeve */}
                  <rect x="268" y="75" width="104" height="34" rx="8" fill="url(#clampMonoHatch)" stroke="#0F172A" strokeWidth="2.5" />
                  <line x1="320" y1="70" x2="320" y2="114" stroke="#0F172A" strokeWidth="2.5" strokeDasharray="4 3" />
                  <rect x="282" y="82" width="76" height="20" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                  <text x="320" y="95.5" textAnchor="middle" fill="#0F172A" fontSize="9.5" fontWeight="900">
                    TALHESIN
                  </text>

                  {/* Callouts */}
                  <line x1="214" y1="92" x2="264" y2="92" stroke="#475569" strokeWidth="1.5" />
                  <text x="206" y="95.5" textAnchor="end" fill="#475569" fontSize="9.5" fontWeight="800">
                    DNA-binding arm
                  </text>

                  <line x1="376" y1="92" x2="426" y2="92" stroke="#0F172A" strokeWidth="1.5" />
                  <text x="434" y="95.5" textAnchor="start" fill="#0F172A" fontSize="9.5" fontWeight="800">
                    Separase cut site
                  </text>
                </g>
              )}

              {clampMode === 'cleaved' && (
                <g>
                  <rect x="120" y="18" width="400" height="22" rx="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                  <text x="320" y="33" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="800">
                    SCISSORS SNIP CLAMP ON CUE · CLEAN SPLIT
                  </text>

                  {/* Left & Right Pulling Chromatids with Snipped Clamp Halves */}
                  <Chromatid x={210} y={92} angle={0} dark={true} label="1" />
                  <rect x="228" y="79" width="38" height="26" rx="5" fill="url(#clampMonoHatch)" stroke="#0F172A" strokeWidth="2" />

                  <Chromatid x={430} y={92} angle={0} dark={false} label="2" />
                  <rect x="374" y="79" width="38" height="26" rx="5" fill="url(#clampMonoHatch)" stroke="#0F172A" strokeWidth="2" />

                  {/* Snip Symbol in Center */}
                  <line x1="306" y1="74" x2="334" y2="108" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="334" y1="74" x2="306" y2="108" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="320" y="128" textAnchor="middle" fill="#0F172A" fontSize="9.5" fontWeight="900">
                    SEPARASE CUT COMPLETE
                  </text>
                </g>
              )}

              {/* Bottom Bar Chart Panel: Science 2026 Mouse Egg Results */}
              <rect x="14" y="152" width="612" height="104" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
              <text x="28" y="171" fill="#475569" fontSize="9.5" fontWeight="800">
                AGED MOUSE EGGS WITHOUT PREMATURE SEPARATION (SCIENCE 2026)
              </text>

              {/* Row 1: Aged Untreated (46.7%) */}
              <text x="148" y="195" textAnchor="end" fill="#0F172A" fontSize="10.5" fontWeight="700">
                Aged Untreated
              </text>
              <rect
                x="158"
                y="183"
                width="177.5"
                height="16"
                rx="3"
                fill={clampMode === 'untreated' ? '#0F172A' : '#CBD5E1'}
              />
              <text x="344" y="195" fill="#0F172A" fontSize="10.5" fontWeight="800">
                46.7%
              </text>

              {/* Row 2: Aged + TALhesin (74.1%) */}
              <text x="148" y="218" textAnchor="end" fill="#0F172A" fontSize="10.5" fontWeight="800">
                Aged + TALhesin
              </text>
              <rect
                x="158"
                y="206"
                width="281.6"
                height="16"
                rx="3"
                fill={clampMode !== 'untreated' ? '#0F172A' : '#E2E8F0'}
                stroke="#0F172A"
                strokeWidth="1.5"
              />
              <text x="448" y="218" fill="#0F172A" fontSize="10.5" fontWeight="900">
                74.1% (+27.4 pts)
              </text>

              {/* Row 3: Young Mice Benchmark (74.7%) */}
              <text x="148" y="241" textAnchor="end" fill="#475569" fontSize="10.5" fontWeight="700">
                Young Mice
              </text>
              <rect
                x="158"
                y="229"
                width="283.9"
                height="16"
                rx="3"
                fill="url(#clampMonoHatch)"
                stroke="#475569"
                strokeWidth="1.5"
              />
              <text x="450" y="241" fill="#475569" fontSize="10.5" fontWeight="800">
                74.7% (benchmark)
              </text>
            </svg>
          </div>

          {/* Monochrome Verdict Box */}
          <div
            className={`rounded-xl p-4 border-2 border-slate-900 flex items-start gap-3 ${
              activeClamp.isPositive ? 'bg-slate-50 text-slate-900' : 'bg-slate-900 text-white'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border-2 ${
                activeClamp.isPositive
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-white bg-white text-slate-900'
              }`}
            >
              {activeClamp.isPositive ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </div>
            <div className="text-xs sm:text-sm leading-relaxed font-medium">
              <strong className={`font-extrabold block mb-0.5 ${activeClamp.isPositive ? 'text-slate-900' : 'text-white'}`}>
                {activeClamp.verdictTitle}
              </strong>
              <span className={activeClamp.isPositive ? 'text-slate-700' : 'text-slate-200'}>
                {activeClamp.verdictText}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
