"use client";

import { FC, useState } from "react";
import DiceIcon from "../svg/DiceIcon";
import { generateRandomPrompt } from "@/app/lib/actions";
import { useSettings } from "@/app/context/SettingsContext";
import { Spinner, Tooltip } from "@chakra-ui/react";
import { tooltipText } from "@/app/lib/stringConstants";

const RandomPromptButton: FC<{ mobile: boolean }> = ({ mobile }) => {
  const { setKeyOfGenerationRequest } = useSettings();
  const [promptLoading, setPromptLoading] = useState(false);

  const handleRandomPrompt = async () => {
    setPromptLoading(true);
    try {
      const randomPrompt = await generateRandomPrompt();
      setKeyOfGenerationRequest("prompt", randomPrompt);
      setPromptLoading(false);
    } catch (err) {
      console.error("Error generating prompt:", err);
      setPromptLoading(false);
    }
  };

  return (
    <Tooltip label={tooltipText.randomPrompt}>
      <button
        className={
          mobile
            ? "flex items-center justify-center min-w-14 w-14 h-14 bg-van-gogh-blue-500 hover:bg-van-gogh-grey-500 rounded-md mr-2"
            : "hidden md:flex items-center justify-center min-w-[45px] w-[45px] h-[45px] bg-van-gogh-blue-500 hover:bg-van-gogh-grey-500 rounded-md mr-2"
        }
        onClick={() => handleRandomPrompt()}
        disabled={promptLoading}
      >
        <span className={promptLoading ? "hidden" : "flex"}>
          <DiceIcon id={mobile ? "1" : "2"} />
        </span>
        <span className={promptLoading ? "flex" : "hidden"}>
          <Spinner />
        </span>
      </button>
    </Tooltip>
  );
};

export default RandomPromptButton;
