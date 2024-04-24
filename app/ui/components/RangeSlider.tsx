"use client";

import { FC, useRef, useState } from "react";

type RangeSliderProps = {
  value: number;
  setValue: (value: number) => void;
  max: number;
};

const RangeSlider: FC<RangeSliderProps> = ({ value, setValue, max }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const filledWidth = `${(value / max) * 100}%`;
  const thumbPosition = `calc(${(value / max) * 100}% - 0.5rem)`;

  const handleMouseEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const newValue = ((event.clientX - rect.left) / rect.width) * max;
    setValue(Math.min(Math.max(newValue, 0), max));
  };

  return (
    <div
      className="range-slider w-full relative"
      ref={sliderRef}
      onMouseDown={handleMouseEvent}
    >
      <div className="slider-track h-4 w-full bg-van-gogh-grey-d rounded-full overflow-hidden">
        <div
          className="slider-track-filled h-full bg-purple-gradient"
          style={{ width: filledWidth }}
        />
      </div>
      <div
        className="slider-thumb absolute top-0 h-4 w-4 rounded-full bg-white"
        style={{ left: thumbPosition }}
      />
    </div>
  );
};

export default RangeSlider;
