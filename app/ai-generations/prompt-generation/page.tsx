"use client";

import { numberOfPromptsOptions } from "@/app/lib/dataConstants";
import { promptGenerationStrings } from "@/app/lib/stringConstants";
import GradientBorderButton from "@/app/ui/components/GradientBorderButton";
import LightBulbIcon from "@/app/ui/svg/LightBulbIcon";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Page = () => {
  const [numberOfPrompts, setNumberOfPrompts] = useState(4);
  const [prompt, setPrompt] = useState("");
  const remainingPrompts = 100;
  const text = promptGenerationStrings;

  return (
    <div className="flex flex-col gap-6 py-9 w-full">
      <div className="flex items-center gap-3 bg-van-gogh-white-opal-100 p-4 rounded-xl">
        <InfoOutlineIcon w="5" h="5" />
        <p className="text-van-gogh-sm">{text.description}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-van-gogh-sm mb-2">{text.optionsTitle}</p>
        <div className="flex gap-1.5 cursor-pointer">
          {numberOfPromptsOptions.map((option) => (
            <div
              key={option}
              className={`w-12 border text-center text-van-gogh-xs py-2 rounded-md bg-van-gogh-blue-500 hover:border-van-gogh-purple-400 ${
                numberOfPrompts === option
                  ? "border-van-gogh-purple"
                  : "border-van-gogh-grey-800"
              }`}
              onClick={() => setNumberOfPrompts(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <input
          className="outline-none border-none w-full bg-van-gogh-input-grey-700 van-gogh-sm px-4 h-10 rounded-md"
          type="text"
          placeholder={text.inputPlaceHolder}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="flex h-10">
          <GradientBorderButton
            text={text.buttonText}
            icon={<LightBulbIcon />}
            upperText={`${remainingPrompts} ${text.promptsRemaining}`}
            classname="px-14"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
