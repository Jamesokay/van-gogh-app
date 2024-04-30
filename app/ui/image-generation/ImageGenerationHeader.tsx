"use client";

import { Heading, Textarea } from "@chakra-ui/react";
import DiceIcon from "../svg/DiceIcon";
import { useState } from "react";
import { imageStyles, modelData, routes } from "@/app/lib/dataConstants";
import { ImageGenModel } from "@/app/lib/definitions";
import ModelDropdownMenu from "../components/ModelDropdownMenu";
import DropdownMenu from "../components/DropdownMenu";
import FlaskIcon from "../svg/FlaskIcon";
import AtomicIcon from "../svg/AtomicIcon";
import CirclePlusIcon from "../svg/CirclePlusIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CoinsIcon from "../svg/CoinsIcon";
import Switch from "../components/Switch";
import { badgeText, imageGenerationHeaderStrings } from "@/app/lib/stringConstants";

export default function ImageGenerationHeader() {
  const [showNegativePrompt, setShowNegativePrompt] = useState(false);
  const [selectedModel, setSelectedModel] = useState<ImageGenModel>(
    modelData[0]
  );
  const [selectedStyle, setSelectedStyle] = useState("Dynamic");
  const pathname = usePathname();
  const text = imageGenerationHeaderStrings;

  return (
    <div className="flex flex-col w-full px-8">
      <div className="mt-10 mb-2">
        <Heading
          as="h1"
          fontSize="1.5rem"
          fontWeight={500}
          onClick={() => setShowNegativePrompt(!showNegativePrompt)}
        >
          {text.title}
        </Heading>
      </div>
      <div className="flex w-full mt-5 mb-4">
        <button className="flex items-center px-2 bg-van-gogh-dark-blue hover:bg-van-gogh-grey-xd rounded-md mr-2">
          <DiceIcon />
        </button>
        <Textarea placeholder={text.promptInputPlaceholder}></Textarea>
        <button className="flex items-center bg-purple-gradient px-12 rounded-lg ml-4 text-van-gogh-lg font-medium">
          <span className="mr-3">{text.buttonText}</span>
          <CoinsIcon white={true} />
          <span className="text-van-gogh-sm ml-1">15</span>
        </button>
      </div>
      <div
        className={`overflow-hidden max-h-${
          showNegativePrompt ? "input-height" : "0"
        } opacity-${showNegativePrompt ? "100" : "0"}
        mb-${showNegativePrompt ? "4" : "0"} transition-all`}
      >
        <Textarea placeholder={text.negPromptInputPlaceholder}></Textarea>
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
            headerTheme={true}
          />
        </div>
        <div className="flex items-center gap-2.5 px-3.5 rounded-md bg-van-gogh-dark-blue hover:bg-van-gogh-dark-blue-hover">
          <AtomicIcon />
          <p className="text-van-gogh-sm font-medium">{text.addElements}</p>
          <CirclePlusIcon />
          <div className="flex items-center justify-center h-8 py-1 px-4 font-semibold bg-purple-gradient text-van-gogh-sm rounded-full">
            {badgeText.new}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Switch
            enabled={showNegativePrompt}
            handleToggle={() => setShowNegativePrompt(!showNegativePrompt)}
          />
          {text.addNegPrompt}
        </div>
      </div>
      <div className="mt-5 ">
        <div className="flex">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`mr-8 py-2 font-medium ${
                pathname !== route.path
                  ? "text-van-gogh-grey-m hover:text-white"
                  : "van-gogh-header-link"
              }`}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
