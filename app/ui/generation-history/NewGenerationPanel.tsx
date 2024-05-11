"use client";

import { useSettings } from "@/app/context/SettingsContext";
import { fetchGeneration } from "@/app/lib/actions";
import { LeonardoGenerationResponse } from "@/app/lib/definitions";
import { useEffect, useRef, useState } from "react";
import GenerationHistoryPanel from "./GenerationHistoryPanel";
import { AspectRatio } from "@chakra-ui/react";
import ImageCardSkeleton from "../components/ImageCardSkeleton";

const NewGenerationPanel = () => {
  const { settings, newGenerationId, setNewGenerationId } = useSettings();
  const [fetchingNewGen, setFetchingNewGen] = useState(false);
  const [newGenerations, setNewGenerations] = useState<
    LeonardoGenerationResponse[]
  >([]);
  const [genTime, setGenTime] = useState(0);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const fetchNewGeneration = async () => {
    setFetchingNewGen(true);
    try {
      const data = await fetchGeneration(newGenerationId);
      if (data && data.status === "COMPLETE") {
        setNewGenerations((prev) => [data, ...prev]);
        setFetchingNewGen(false);
        setNewGenerationId("");
        if (pollingRef.current) clearInterval(pollingRef.current);
      }
      if (data && data.status === "FAILED") {
        setFetchingNewGen(false);
        setNewGenerationId("");
        if (pollingRef.current) clearInterval(pollingRef.current);
      }
      return data;
    } catch (error) {
      console.error("Failed to fetch generation:", error);
      setFetchingNewGen(false);
      if (pollingRef.current) clearInterval(pollingRef.current);
    }
  };

  useEffect(() => {
    if (!newGenerationId) return;
    pollingRef.current = setInterval(fetchNewGeneration, 2000);
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [newGenerationId]);

  useEffect(() => {
    if (!fetchingNewGen) {
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
  }, [fetchingNewGen]);

  return (
    <>
      <div
        className={
          fetchingNewGen
            ? "grid grid-cols-1 lg:grid-cols-auto-fit-minmax-16 gap-4"
            : "hidden"
        }
      >
        {fetchingNewGen &&
          [...Array(parseInt(settings.numberOfImages))].map((_, index) => (
            <AspectRatio
              key={`loading-${index}`}
              ratio={settings.aspectRatioWidth / settings.aspectRatioHeight}
            >
              <ImageCardSkeleton elapsedTime={genTime} />
            </AspectRatio>
          ))}
      </div>
      {newGenerations?.map((generation) => (
        <GenerationHistoryPanel key={generation.id} {...generation} />
      ))}
    </>
  );
};

export default NewGenerationPanel;
