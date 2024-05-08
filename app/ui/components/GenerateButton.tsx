"use client";

import { imageGenerationHeaderStrings } from "@/app/lib/stringConstants";
import { Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import CoinsIcon from "../svg/CoinsIcon";
import { useSettings } from "@/app/context/SettingsContext";

const GenerateButton: FC<{ mobile: boolean }> = ({ mobile }) => {
  const { settings } = useSettings();
  const disabled = !settings.prompt;
  const label = disabled ? "Please type a prompt" : "This will use 8 tokens";
  const credits = settings.credits;

  return (
    <Tooltip label={label}>
      <button
        className={
          mobile
            ? `flex md:hidden h-14 w-full justify-center items-center bg-purple-gradient px-12 rounded-lg text-van-gogh-lg font-medium ${
                disabled ? "grayscale opacity-30 cursor-not-allowed" : ""
              }`
            : `hidden md:flex items-center h-[45px] bg-purple-gradient px-12 rounded-lg ml-4 text-van-gogh-lg font-medium ${
                disabled ? "grayscale opacity-30 cursor-not-allowed" : ""
              }`
        }
        disabled={disabled}
        onClick={() => {}}
      >
        <span className="mr-3">{imageGenerationHeaderStrings.buttonText}</span>
        <CoinsIcon white={true} />
        <span className="text-van-gogh-sm ml-1">{credits}</span>
      </button>
    </Tooltip>
  );
};

export default GenerateButton;
