"use client";

import { useState, useEffect, useRef } from "react";
import { useUpscaler } from "@/app/context/UpscalerContext";

const ImageContainer = () => {
  const { upscalerView } = useUpscaler();
  const [percentage, setPercentage] = useState<number>(0);
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

  if (upscalerView === "slider")
    return (
      <div className="flex h-full w-full justify-center">
        <div
          ref={specialDivRef}
          className="relative flex h-full cursor-ew-resize"
          style={{ maxHeight: "calc(-9.792rem + 100dvh)" }}
        >
          <img
            src="https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/ee3f536c-9b89-4d5d-b2a1-def003e457f8/Default_A_vividly_sparkling_digital_avatar_its_pixelated_form_2.jpg"
            alt=""
            className="h-full w-auto object-contain"
          />
          <div
            className="absolute w-full h-full left-0 top-0 z-10"
            style={{ clipPath: `inset(0px 0px 0px ${percentage}%)` }}
          >
            <img
              src="https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/6010529c-f5cf-4b14-a80f-a61318b0738f/variations/UniversalUpscaler_6010529c-f5cf-4b14-a80f-a61318b0738f.jpg"
              alt=""
              className="h-full w-auto object-contain"
            />
          </div>
          <div
            className="absolute h-full top-0 bg-white w-[0.125rem] z-50"
            style={{ left: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );

  return (
    <div className="flex h-full w-full justify-center gap-1.5">
      <div className={upscalerView === "variation" ? "hidden" : "flex h-full"}>
        <img
          src="https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/ee3f536c-9b89-4d5d-b2a1-def003e457f8/Default_A_vividly_sparkling_digital_avatar_its_pixelated_form_2.jpg"
          alt=""
          className="h-full w-auto object-contain"
          style={{ maxHeight: "calc(-9.792rem + 100dvh)" }}
        />
      </div>
      <div className="flex h-full">
        <img
          src="https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/6010529c-f5cf-4b14-a80f-a61318b0738f/variations/UniversalUpscaler_6010529c-f5cf-4b14-a80f-a61318b0738f.jpg"
          alt=""
          className="h-full w-auto object-contain"
          style={{ maxHeight: "calc(-9.792rem + 100dvh)" }}
        />
      </div>
    </div>
  );
};

export default ImageContainer;
