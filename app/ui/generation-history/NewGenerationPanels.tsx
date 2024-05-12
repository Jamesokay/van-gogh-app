"use client";

import { useSettings } from "@/app/context/SettingsContext";
import { fetchGeneration } from "@/app/lib/actions";
import { LeonardoGenerationResponse } from "@/app/lib/definitions";
import { useEffect, useRef, useState } from "react";
import GenerationHistoryPanel from "./GenerationHistoryPanel";
import NewGenerationLoading from "./NewGenerationLoading";

const NewGenerationPanels = () => {
  const { newGenerationId, setNewGenerationId, setKeyOfInterfaceState } =
    useSettings();
  const [newGenerations, setNewGenerations] = useState<
    LeonardoGenerationResponse[]
  >([]);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  const resetGenerationState = () => {
    setKeyOfInterfaceState("generating", false);
    setNewGenerationId("");
    if (pollingRef.current) clearInterval(pollingRef.current);
  };

  const fetchNewGeneration = async () => {
    // Function for polling the endpoint until image data is available
    try {
      const data = await fetchGeneration(newGenerationId);
      if (data && data.status !== "PENDING") {
        if (data.status === "COMPLETE") {
          setNewGenerations((prev) => [data, ...prev]);
        }
        resetGenerationState();
      }
    } catch (error) {
      console.error("Failed to fetch generation:", error);
      resetGenerationState();
    }
  };

  useEffect(() => {
    // Polling logic, initiated once we receive a generationId from the POST request
    if (!newGenerationId) return;
    pollingRef.current = setInterval(fetchNewGeneration, 2000);
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [newGenerationId]);

  return (
    <>
      <NewGenerationLoading />
      {newGenerations?.map((generation) => (
        <GenerationHistoryPanel key={generation.id} {...generation} />
      ))}
    </>
  );
};

export default NewGenerationPanels;
