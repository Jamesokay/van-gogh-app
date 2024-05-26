"use client";

import { useSettings } from "@/app/context/SettingsContext";
import { NonNullLeonardoGenerationResponse } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import GenerationHistoryPanel from "./GenerationHistoryPanel";
import NewGenerationLoading from "./NewGenerationLoading";
import { fillDefaults } from "@/app/lib/helpers";
import { supabase } from "@/app/lib/supabase";

const NewGenerationPanels = () => {
  const { interfaceState, setKeyOfInterfaceState } = useSettings();
  const [newGenerations, setNewGenerations] = useState<
    NonNullLeonardoGenerationResponse[]
  >([]);
  const filteredGenerations = newGenerations.filter(gen => !interfaceState.deletedGenerationIds.includes(gen?.id));

  useEffect(() => {
    const handleInserts = (payload: any) => {
      if (payload) {
        setNewGenerations((prev) => [fillDefaults(payload.new), ...prev]);
        setKeyOfInterfaceState("generating", false);
      }
    };

    const subscription = supabase
      .channel("Generation")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Generation" },
        handleInserts
      )
      .subscribe();

    // To-do: Error handling for Realtime
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <NewGenerationLoading />
      {filteredGenerations.map((generation) => (
        <GenerationHistoryPanel key={generation.id} {...generation} />
      ))}
    </>
  );
};

export default NewGenerationPanels;
