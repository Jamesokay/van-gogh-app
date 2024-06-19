"use client";

import { FC, useEffect, useRef, useState } from "react";
import TransformContainer from "./TransformContainer";
import { UpscaledImage } from "@/app/lib/definitions";

const SliderView: FC<{ image: UpscaledImage | null }> = ({ image }) => {
  const [percentage, setPercentage] = useState<number>(50);
  const specialDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (specialDivRef.current) {
        const rect = specialDivRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left; // x position relative to the div
        const width = rect.width;

        if (width > 0) {
          const percentage = (x / width) * 100;
          setPercentage(Math.min(Math.max(percentage, 0), 100)); // clamp value between 0 and 100
        }
      }
    };

    const currentRef = specialDivRef.current;

    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <TransformContainer>
      <div
        ref={specialDivRef}
        className="relative flex h-full cursor-ew-resize select-none"
        style={{
          maxHeight: "calc(-9.792rem + 100dvh)",
        }}
      >
        <img
          src={image?.sourceImage?.url}
          alt=""
          className="h-full w-auto object-contain"
          style={{
            maxHeight: "calc(-9.792rem + 100dvh)",
          }}
        />
        <div
          className="absolute w-full h-full left-0 top-0 z-10"
          style={{ clipPath: `inset(0px 0px 0px ${percentage}%)` }}
        >
          <img
            src={image?.upscaledImage?.url}
            alt=""
            className="h-full w-auto object-contain"
          />
        </div>
        <div
          className="absolute h-full top-0 bg-van-gogh-slider-purple w-[0.125rem] z-50"
          style={{ left: `${percentage}%` }}
        ></div>
      </div>
    </TransformContainer>
  );
};

export default SliderView;
