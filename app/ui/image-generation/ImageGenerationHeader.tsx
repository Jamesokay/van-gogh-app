"use client";

import {
  Heading,

  Textarea,
} from "@chakra-ui/react";
import DiceIcon from "../svg/DiceIcon";
import { useState } from "react";
import { modelData } from "@/app/lib/constants";
import { ImageGenModel } from "@/app/lib/definitions";
import ModelDropdownMenu from "../components/ModelDropdownMenu";

export default function ImageGenerationHeader() {
  const [showNegativePrompt, setShowNegativePrompt] = useState(false);
  const [selectedModel, setSelectedModel] = useState<ImageGenModel>(
    modelData[0]
  );

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
      <div className="flex gap-2">
        <ModelDropdownMenu options={modelData} value={selectedModel} setValue={setSelectedModel} />
      </div>
    </div>
  );
}
