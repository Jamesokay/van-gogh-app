"use client";

import { useSettings } from "@/app/context/SettingsContext";
import { fetchGeneration } from "@/app/lib/actions";
import { NonNullLeonardoGenerationResponse } from "@/app/lib/definitions";
import { useEffect, useRef, useState } from "react";
import GenerationHistoryPanel from "./GenerationHistoryPanel";
import NewGenerationLoading from "./NewGenerationLoading";
import { fillDefaults } from "@/app/lib/helpers";

const NewGenerationPanels = () => {
  const { interfaceState, setKeyOfInterfaceState } = useSettings();
  const [newGenerations, setNewGenerations] = useState<
    NonNullLeonardoGenerationResponse[]
  >([]);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  const resetGenerationState = () => {
    setKeyOfInterfaceState("generating", false);
    setKeyOfInterfaceState("newGenerationId", "");
    if (pollingRef.current) clearInterval(pollingRef.current);
  };

  const fetchNewGeneration = async () => {
    // Function for polling the endpoint until image data is available
    try {
      const data = await fetchGeneration(interfaceState.newGenerationId);
      if (data.status !== "PENDING") {
        if (data.status === "COMPLETE") {
          setNewGenerations((prev) => [fillDefaults(data), ...prev]);
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
    if (!interfaceState.newGenerationId) return;
    pollingRef.current = setInterval(fetchNewGeneration, 2000);
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [interfaceState.newGenerationId]);

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
