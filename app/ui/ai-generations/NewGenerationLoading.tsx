"use client";

import { useSettings } from "@/app/context/SettingsContext";
import PanelHeader from "../components/PanelHeader";
import { AspectRatio } from "@chakra-ui/react";
import ImageCardSkeleton from "../components/ImageCardSkeleton";
import { useEffect, useRef, useState } from "react";
import { defaultGenerationRow } from "@/app/lib/dataConstants";

const NewGenerationLoading = () => {
  const { generationRequest, interfaceState } = useSettings();
  const [genTime, setGenTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const defaultData = {
    ...defaultGenerationRow,
    prompt: generationRequest.prompt,
    generated_images: [...Array(generationRequest.num_images)],
    modelId: generationRequest.modelId,
    presetStyle: generationRequest.presetStyle,
    imageHeight: generationRequest.height,
    imageWidth: generationRequest.width,
  };

  useEffect(() => {
    // Logic for setting and displaying timer
    // generating is a loading state that exists in context, allowing synchronisation
    // of loading state across components
    if (!interfaceState.generating) {
      if (genTime > 0) setGenTime(0);
      return;
    }
    timerRef.current = setInterval(() => {
      setGenTime((prev) => {
        const newTime = (prev + 0.1).toFixed(1);
        return parseFloat(newTime);
      });
    }, 100);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [interfaceState.generating]);

  return (
    <div className={interfaceState.generating ? "flex flex-col" : "hidden"}>
      <PanelHeader {...defaultData} />
      <div
        className={`grid grid-cols-1 ${
          generationRequest.height > generationRequest.width
            ? "lg:grid-cols-van-gogh-auto-fit-minmax-16"
            : "lg:grid-cols-van-gogh-auto-fit-minmax-24"
        } gap-4`}
      >
        {interfaceState.generating &&
          [...Array(generationRequest.num_images)].map((_, index) => (
            <AspectRatio
              key={`loading-${index}`}
              ratio={generationRequest.width / generationRequest.height}
            >
              <ImageCardSkeleton elapsedTime={genTime} />
            </AspectRatio>
          ))}
      </div>
    </div>
  );
};

export default NewGenerationLoading;
