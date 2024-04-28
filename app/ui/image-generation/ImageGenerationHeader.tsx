"use client";

import { Heading, Textarea } from "@chakra-ui/react";
import DiceIcon from "../svg/DiceIcon";
import { useState } from "react";
import { imageStyles, modelData } from "@/app/lib/constants";
import { ImageGenModel } from "@/app/lib/definitions";
import ModelDropdownMenu from "../components/ModelDropdownMenu";
import DropdownMenu from "../components/DropdownMenu";
import FlaskIcon from "../svg/FlaskIcon";
import AtomicIcon from "../svg/AtomicIcon";
import CirclePlusIcon from "../svg/CirclePlusIcon";

export default function ImageGenerationHeader() {
  const [showNegativePrompt, setShowNegativePrompt] = useState(false);
  const [selectedModel, setSelectedModel] = useState<ImageGenModel>(
    modelData[0]
  );
  const [selectedStyle, setSelectedStyle] = useState("Dynamic");

  return (
    <div className="flex flex-col w-full px-8">
      <div className="mt-10 mb-4">
        <Heading
          as="h1"
          fontSize="1.5rem"
          fontWeight={500}
          onClick={() => setShowNegativePrompt(!showNegativePrompt)}
        >
          AI Image Generation
        </Heading>
      </div>
      <div className="flex w-full mt-5 mb-4">
        <button className="flex items-center px-2 bg-van-gogh-dark-blue hover:bg-van-gogh-grey-xd rounded-corners-s mr-2">
          <DiceIcon />
        </button>
        <Textarea placeholder="Type a prompt..."></Textarea>
        <button className="bg-purple-gradient px-12 rounded-lg ml-4 text-van-gogh-lg font-medium">
          Generate
        </button>
      </div>
      <div
        className={`overflow-hidden max-h-${
          showNegativePrompt ? "input-height" : "0"
        } opacity-${showNegativePrompt ? "100" : "0"}
        mb-${showNegativePrompt ? "4" : "0"} transition-all`}
      >
        <Textarea placeholder="Type what you don't want to see in the image (a negative prompt)..."></Textarea>
      </div>
      <div className="flex gap-4">
        <ModelDropdownMenu
          options={modelData}
          value={selectedModel}
          setValue={setSelectedModel}
        />
        <div className="min-w-[10rem]">
          <DropdownMenu
            options={imageStyles}
            value={selectedStyle}
            setValue={setSelectedStyle}
            align="left"
            isDisabled={false}
            leftIcon={<FlaskIcon />}
            darkerTheme={true}
          />
        </div>
        <div className="flex items-center gap-2.5 px-3.5 rounded-corners-s bg-van-gogh-dark-blue hover:bg-van-gogh-dark-blue-hover">
          <AtomicIcon />
          <p className="text-van-gogh-sm font-medium">Add Elements</p>
          <CirclePlusIcon />
          <div className="flex items-center justify-center h-8 py-1 px-4 font-semibold bg-purple-gradient text-van-gogh-sm rounded-corners-l">
            New
          </div>
        </div>
        <div className="flex gap-2 items-center">
          Add negative prompt
          <div
            role="checkbox"
            aria-checked={showNegativePrompt}
            tabIndex={0}
            onClick={() => setShowNegativePrompt(!showNegativePrompt)}
            onKeyDown={(e) =>
              e.key === "Enter" && setShowNegativePrompt(!showNegativePrompt)
            }
            className={`${
              showNegativePrompt ? "bg-purple-gradient" : "bg-van-gogh-grey-d"
            } ml-auto relative inline-flex items-center h-6 rounded-full w-switch-track-width cursor-pointer transition-colors focus:outline-none`}
          >
            <span
              className={`${
                showNegativePrompt
                  ? "translate-x-switch-track-x-enable"
                  : "translate-x-switch-track-x-disable"
              } inline-block w-switch-track-height h-switch-track-height transform bg-white rounded-full transition-transform`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
