"use client";

import { useState, useCallback } from "react";

const MIN = 0;
const MAX = 600000;

function formatIDR(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}

interface PriceRangeSliderProps {
  onChange?: (min: number, max: number) => void;
}

export default function PriceRangeSlider({ onChange }: PriceRangeSliderProps) {
  const [minVal, setMinVal] = useState(MIN);
  const [maxVal, setMaxVal] = useState(MAX);

  const minPercent = ((minVal - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxVal - MIN) / (MAX - MIN)) * 100;

  const handleMin = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Math.min(Number(e.target.value), maxVal - 50000);
    setMinVal(v);
    onChange?.(v, maxVal);
  }, [maxVal, onChange]);

  const handleMax = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Math.max(Number(e.target.value), minVal + 50000);
    setMaxVal(v);
    onChange?.(minVal, v);
  }, [minVal, onChange]);

  return (
    <div className="space-y-3">
      {/* Track */}
      <div className="relative h-1 mt-4">
        {/* Full rail */}
        <div className="absolute inset-0 bg-[#D4CFC9]" />
        {/* Active range */}
        <div
          className="absolute h-full bg-[#C4956A]"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />
        {/* Min thumb */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={10000}
          value={minVal}
          onChange={handleMin}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: minVal > MAX - 100000 ? 5 : 3 }}
        />
        {/* Max thumb */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={10000}
          value={maxVal}
          onChange={handleMax}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: 4 }}
        />
        {/* Visual thumbs */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#C4956A] border-2 border-white shadow-sm pointer-events-none"
          style={{ left: `calc(${minPercent}% - 7px)` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#C4956A] border-2 border-white shadow-sm pointer-events-none"
          style={{ left: `calc(${maxPercent}% - 7px)` }}
        />
      </div>

      {/* Labels */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs text-[#1A1A1A] tabular-nums">{formatIDR(minVal)}</span>
        <span className="text-xs text-[#1A1A1A] tabular-nums">{formatIDR(maxVal)}</span>
      </div>
    </div>
  );
}
