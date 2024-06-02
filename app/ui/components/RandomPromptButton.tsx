"use client";

import { FC, useRef, useState } from "react";
import DiceIcon from "../svg/DiceIcon";
import { generateRandomPrompt, improvePrompt } from "@/app/lib/actions";
import { useSettings } from "@/app/context/SettingsContext";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spinner,
} from "@chakra-ui/react";
import HelixArrowsIcon from "../svg/HelixArrowsIcon";
import SparkleIcon from "../svg/SparkleIcon";

const RandomPromptButton: FC<{ mobile: boolean }> = ({ mobile }) => {
  const { generationRequest, setKeyOfGenerationRequest } = useSettings();
  const [promptLoading, setPromptLoading] = useState(false);
  const popoverRef = useRef(null);
  const disableImprove =
    !generationRequest.prompt || generationRequest.prompt.length > 200;

  const handlePromptAction = async (action: "generate" | "improve") => {
    setPromptLoading(true);
    try {
      const newPrompt =
        action === "improve"
          ? await improvePrompt(generationRequest.prompt)
          : await generateRandomPrompt();

      if (!newPrompt) {
        setPromptLoading(false);
        return;
      }
      setKeyOfGenerationRequest("prompt", newPrompt);
      setPromptLoading(false);
    } catch (err) {
      console.error("Error generating prompt:", err);
      setPromptLoading(false);
    }
  };

  return (
    <Popover initialFocusRef={popoverRef} placement="bottom-start" gutter={0}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <button
              className={
                mobile
                  ? `flex min-w-14 w-14 h-14 rounded-md mr-2 p-px transition-all ${
                      isOpen
                        ? "bg-van-gogh-purple-gradient"
                        : "bg-van-gogh-blue-500"
                    }`
                  : `hidden md:flex min-w-[45px] w-[45px] h-[45px] rounded-md mr-2 p-px transition-all ${
                      isOpen
                        ? "bg-van-gogh-purple-gradient"
                        : "bg-van-gogh-blue-500"
                    }`
              }
              disabled={promptLoading}
            >
              <div className="flex items-center justify-center w-full h-full bg-van-gogh-blue-500 hover:bg-van-gogh-grey-500 rounded-md">
                <span className={promptLoading ? "hidden" : "flex"}>
                  <DiceIcon id={mobile ? "1" : "2"} white={isOpen} />
                </span>
                <span className={promptLoading ? "flex" : "hidden"}>
                  <Spinner />
                </span>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              <button
                className="w-full py-2 px-5 flex gap-2 items-center font-medium text-van-gogh-white-opal-900 text-van-gogh-sm border-b transition-all border-van-gogh-grey-800 bg-van-gogh-white-opal-150 hover:bg-van-gogh-white-opal-200"
                onClick={() => {
                  handlePromptAction("generate");
                  onClose();
                }}
              >
                <HelixArrowsIcon />
                {/* To-do: define strings elsewhere */}
                New Random Prompt
              </button>
              {/* To-do: warning for prompts > 200 & disable option */}
              <button
                disabled={disableImprove}
                className={`w-full py-2 px-5 flex flex-col font-medium text-van-gogh-white-opal-900 text-van-gogh-sm transition-all bg-van-gogh-white-opal-150 hover:bg-van-gogh-white-opal-200 ${
                  disableImprove ? "opacity-30 cursor-not-allowed" : ""
                }`}
                onClick={() => {
                  if (disableImprove) return;
                  handlePromptAction("improve");
                  onClose();
                }}
              >
                <div className="flex gap-2 items-center">
                  <SparkleIcon />
                  Improve Prompt
                </div>
                <p
                  className={
                    generationRequest.prompt.length > 200
                      ? "text-van-gogh-grey-700"
                      : "hidden"
                  }
                >
                  Only works on prompts with less than 200 characters
                </p>
              </button>
              <div className="py-2 px-5 bg-van-gogh-grey-800 text-van-gogh-xs text-van-gogh-grey-700">
                {/* To-do: Logic to make this dynamic (if necessary data is available) */}
                <p>{"80 Prompts Remaining (Resets in 11 days)"}</p>
              </div>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export default RandomPromptButton;
