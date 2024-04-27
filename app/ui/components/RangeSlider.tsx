"use client";

import { RangeSliderProps } from "@/app/lib/definitions";
import { FC, useEffect, useRef } from "react";

const RangeSlider: FC<RangeSliderProps> = ({ value, setValue, max, min }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const range = max - min;
  const filledWidthPercentage = ((value - min) / (max - min)) * 100;
  const clampedFilledWidthPercentage = Math.max(0, Math.min(filledWidthPercentage, 100));
  const filledWidth = `${clampedFilledWidthPercentage}%`;
  const thumbPositionPercentage = ((value - min) / (max - min)) * 100;
  const clampedThumbPositionPercentage = Math.max(0, Math.min(thumbPositionPercentage, 100));
  const thumbPosition = `calc(${clampedThumbPositionPercentage}% - 0.5rem)`;

  const handleMouseMove = (event: MouseEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const newValue =
      min + Math.round(((event.clientX - rect.left) / rect.width) * range);
    setValue(Math.min(Math.max(newValue, min), max));
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    handleMouseMove(event.nativeEvent);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className="range-slider w-full relative cursor-pointer"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
    >
      <div className="slider-track h-4 w-full bg-van-gogh-grey-xd rounded-full overflow-hidden">
        <div
          className="slider-track-filled h-full bg-blue-gradient"
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
