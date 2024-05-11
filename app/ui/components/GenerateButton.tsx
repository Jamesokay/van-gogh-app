"use client";

import { imageGenerationHeaderStrings } from "@/app/lib/stringConstants";
import { Tooltip } from "@chakra-ui/react";
import { FC, useState } from "react";
import CoinsIcon from "../svg/CoinsIcon";
import { useSettings } from "@/app/context/SettingsContext";
import { extractRequestBodyFromSettings } from "@/app/lib/helpers";
import { generateImages } from "@/app/lib/actions";

const GenerateButton: FC<{ mobile: boolean }> = ({ mobile }) => {
  const { settings, setNewGenerationId } = useSettings();
  const [loading, setLoading] = useState(false)
  const disabled = !settings.prompt;
  const label = disabled ? "Please type a prompt" : "This will use 8 tokens";
  const credits = settings.credits;

  const generate = async () => {
    setLoading(true)
    const body = extractRequestBodyFromSettings(settings);
    const generation = await generateImages(body);
    setLoading(false);
    if (!generation) return;
    setNewGenerationId(generation.sdGenerationJob.generationId);
  };

  return (
    <Tooltip label={label}>
      <button
        className={
          mobile
            ? `flex md:hidden h-14 w-full justify-center items-center bg-purple-gradient px-12 rounded-lg text-van-gogh-lg font-medium ${
                disabled || loading ? "grayscale opacity-30 cursor-not-allowed" : ""
              }`
            : `hidden md:flex items-center h-[45px] bg-purple-gradient px-12 rounded-lg ml-4 text-van-gogh-lg font-medium ${
                disabled || loading ? "grayscale opacity-30 cursor-not-allowed" : ""
              }`
        }
        disabled={disabled}
        onClick={() => generate()}
      >
        <span className="mr-3">{imageGenerationHeaderStrings.buttonText}</span>
        <CoinsIcon white={true} />
        <span className="text-van-gogh-sm ml-1">{credits}</span>
      </button>
    </Tooltip>
  );
};

export default GenerateButton;
