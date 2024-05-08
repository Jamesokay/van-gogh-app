"use client";

import { numberOfPromptsOptions } from "@/app/lib/dataConstants";
import { promptGenerationStrings } from "@/app/lib/stringConstants";
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
      <div className="flex items-center gap-3 bg-van-gogh-white-opal p-4 rounded-xl">
        <InfoOutlineIcon w="5" h="5" />
        <p className="text-van-gogh-sm">{text.description}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-van-gogh-sm mb-2">{text.optionsTitle}</p>
        <div className="flex gap-1.5 cursor-pointer">
          {numberOfPromptsOptions.map((option) => (
            <div
              key={option}
              className={`w-12 border text-center text-van-gogh-xs py-2 rounded-md bg-van-gogh-dark-blue hover:border-van-gogh-purple ${
                numberOfPrompts === option
                  ? "border-van-gogh-purple"
                  : "border-van-gogh-grey-blue"
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
          className="outline-none border-none w-full bg-van-gogh-input-grey van-gogh-sm px-4 h-10 rounded-md"
          type="text"
          placeholder={text.inputPlaceHolder}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="relative flex text-van-gogh-sm h-10 bg-pink-gradient p-[1px] rounded-lg hover:shadow-purple-glow">
          <p className="hidden md:block absolute text-center w-full pb-1 bottom-full text-van-gogh-2xs text-van-gogh-text-grey">
            {`${remainingPrompts} ${text.promptsRemaining}`}
          </p>
          <button className="flex gap-1 bg-van-gogh-input-grey h-full w-full flex items-center justify-center px-14 rounded-lg">
            <LightBulbIcon />
            {text.buttonText}
          </button>
        </button>
      </div>
    </div>
  );
};

export default Page;
