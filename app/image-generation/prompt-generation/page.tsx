"use client";

import LightBulbIcon from "@/app/ui/svg/LightBulbIcon";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Page = () => {
  const [numberOfPrompts, setNumberOfPrompts] = useState(4);
  return (
    <div className="flex flex-col gap-6 pt-9 w-full">
      <div className="flex items-center gap-3 bg-van-gogh-white-opal p-4 rounded-xl">
        <InfoOutlineIcon w="5" h="5" />
        <p className="text-van-gogh-sm">
          This tool will allow you to come up with more complex prompt ideas
          from a simple prompt. E.g. if you type in “a car” and click Ideate it
          will come up with a number of more complex concepts which include a
          car.
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-van-gogh-sm mb-2">Number of Prompts to Generate</p>
        <div className="flex gap-1.5 cursor-pointer">
          <div
            className={`w-12 border text-center text-van-gogh-xs py-2 rounded-md bg-van-gogh-dark-blue hover:border-van-gogh-purple ${
              numberOfPrompts === 2
                ? "border-van-gogh-purple"
                : "border-van-gogh-grey-blue"
            }`}
          >
            2
          </div>
          <div
            className={`w-12 border text-center text-van-gogh-xs py-2 rounded-md bg-van-gogh-dark-blue hover:border-van-gogh-purple ${
              numberOfPrompts === 4
                ? "border-van-gogh-purple"
                : "border-van-gogh-grey-blue"
            }`}
          >
            4
          </div>
          <div
            className={`w-12 border text-center text-van-gogh-xs py-2 rounded-md bg-van-gogh-dark-blue hover:border-van-gogh-purple ${
              numberOfPrompts === 6
                ? "border-van-gogh-purple"
                : "border-van-gogh-grey-blue"
            }`}
          >
            6
          </div>
          <div
            className={`w-12 border text-center text-van-gogh-xs py-2 rounded-md bg-van-gogh-dark-blue hover:border-van-gogh-purple ${
              numberOfPrompts === 8
                ? "border-van-gogh-purple"
                : "border-van-gogh-grey-blue"
            }`}
          >
            8
          </div>
        </div>
      </div>
      <div className="flex w-full gap-4">
        <input
          className="outline-none border-none w-full bg-van-gogh-input-grey van-gogh-sm px-4 h-10 rounded-md"
          type="text"
          placeholder="Enter a basic prompt idea."
        />
        <button className="relative flex text-van-gogh-sm h-10 bg-pink-gradient p-[1px] rounded-lg hover:shadow-purple-glow">
          <p className="absolute text-center w-full pb-1 bottom-full text-van-gogh-2xs text-van-gogh-text-grey">
            100 prompts remaining
          </p>
          <div className="flex gap-1 bg-van-gogh-input-grey h-full w-full flex items-center justfy-center px-14 rounded-lg">
            <LightBulbIcon />
            Ideate
          </div>
        </button>
      </div>
    </div>
  );
};

export default Page;
