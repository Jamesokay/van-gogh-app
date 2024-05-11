"use client";

import { useSettings } from "@/app/context/SettingsContext";
import PanelHeader from "../components/PanelHeader";
import { AspectRatio } from "@chakra-ui/react";
import ImageCardSkeleton from "../components/ImageCardSkeleton";
import { useEffect, useRef, useState } from "react";

const NewGenerationLoading = () => {
  const { settings, generating } = useSettings();
  const [genTime, setGenTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Logic for setting and displaying timer
    // generating is a loading state that exists in context, allowing synchronisation
    // of loading state across components
    if (!generating) {
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
  }, [generating]);

  return (
    <div className={generating ? "flex flex-col" : "hidden"}>
      <PanelHeader
        prompt={settings.prompt}
        generationLength={parseInt(settings.numberOfImages)}
        modelId={settings.modelId}
        presetStyle={settings.imageStyle}
        imageHeight={settings.aspectRatioHeight}
        imageWidth={settings.aspectRatioWidth}
      />
      <div className="grid grid-cols-1 lg:grid-cols-auto-fit-minmax-16 gap-4">
        {generating &&
          [...Array(parseInt(settings.numberOfImages))].map((_, index) => (
            <AspectRatio
              key={`loading-${index}`}
              ratio={settings.aspectRatioWidth / settings.aspectRatioHeight}
            >
              <ImageCardSkeleton elapsedTime={genTime} />
            </AspectRatio>
          ))}
      </div>
    </div>
  );
};

export default NewGenerationLoading;
