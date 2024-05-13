"use client";

import { imageGenerationHeaderStrings } from "@/app/lib/stringConstants";
import { Spinner, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import CoinsIcon from "../svg/CoinsIcon";
import { useSettings } from "@/app/context/SettingsContext";
import { generateImages } from "@/app/lib/actions";
import { extractRequestBodyFromContext } from "@/app/lib/helpers";

const GenerateButton: FC<{ mobile: boolean }> = ({ mobile }) => {
  const { generationRequest, interfaceState, setKeyOfInterfaceState } =
    useSettings();
  const disabled = !generationRequest.prompt;
  const label = disabled ? "Please type a prompt" : "This will use 8 tokens";
  // To-do: state for credits/user
  const credits = 150;

  const generate = async () => {
    // To-do: prevent spam click
    setKeyOfInterfaceState("generating", true);
    try {
      const body = extractRequestBodyFromContext(generationRequest);
      const generation = await generateImages(body);
      if (!generation) {
        throw new Error("Failed to generate");
      }
      setKeyOfInterfaceState(
        "newGenerationId",
        generation.sdGenerationJob.generationId
      );
    } catch (err) {
      console.error("Error generating:", err);
      setKeyOfInterfaceState("generating", false);
    }
  };

  return (
    <Tooltip label={label}>
      <button
        className={
          mobile
            ? `flex md:hidden relative h-14 w-full  bg-purple-gradient px-12 rounded-lg ${
                disabled ? "grayscale opacity-30 cursor-not-allowed" : ""
              }`
            : `hidden md:flex relative h-[45px] bg-purple-gradient px-12 rounded-lg ml-4 ${
                disabled ? "grayscale opacity-30 cursor-not-allowed" : ""
              }`
        }
        disabled={disabled || interfaceState.generating}
        onClick={() => generate()}
      >
        <div
          className={`flex h-full w-full justify-center items-center text-van-gogh-lg font-medium ${
            interfaceState.generating ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="mr-3">
            {imageGenerationHeaderStrings.buttonText}
          </span>
          <CoinsIcon white={true} />
          <span className="text-van-gogh-sm ml-1">{credits}</span>
        </div>
        <div
          className={`flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            interfaceState.generating ? "opacity-100" : "opacity-0"
          }`}
        >
          <Spinner />
        </div>
      </button>
    </Tooltip>
  );
};

export default GenerateButton;
