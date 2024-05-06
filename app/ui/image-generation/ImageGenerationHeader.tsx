"use client";

import { Heading, Textarea } from "@chakra-ui/react";
import DiceIcon from "../svg/DiceIcon";
import { imageStyles, modelData, routes } from "@/app/lib/dataConstants";
import { SETTINGS_KEY } from "@/app/lib/definitions";
import ModelDropdownMenu from "../components/ModelDropdownMenu";
import DropdownMenu from "../components/DropdownMenu";
import FlaskIcon from "../svg/FlaskIcon";
import AtomicIcon from "../svg/AtomicIcon";
import CirclePlusIcon from "../svg/CirclePlusIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CoinsIcon from "../svg/CoinsIcon";
import Switch from "../components/Switch";
import {
  badgeText,
  imageGenerationHeaderStrings,
} from "@/app/lib/stringConstants";
import { useSettings } from "@/app/context/SettingsContext";

export default function ImageGenerationHeader() {
  const { settings, setSetting } = useSettings();
  const pathname = usePathname();
  const selectedModel =
    modelData.find((x) => x.modelId === settings.modelId) || modelData[0];
  const text = imageGenerationHeaderStrings;

  return (
    <div className="flex flex-col w-full px-8 z-50">
      <div className="mt-10 mb-2">
        <Heading as="h1" fontSize="1.5rem" fontWeight={500}>
          {text.title}
        </Heading>
      </div>
      <div className="flex w-full mt-5 mb-4">
        <button className="flex items-center px-2 bg-van-gogh-dark-blue hover:bg-van-gogh-grey-xd rounded-md mr-2">
          <DiceIcon />
        </button>
        <Textarea
          placeholder={text.promptInputPlaceholder}
          onChange={(e) => setSetting(SETTINGS_KEY.PROMPT, e.target.value)}
        ></Textarea>
        <button className="flex items-center bg-purple-gradient px-12 rounded-lg ml-4 text-van-gogh-lg font-medium">
          <span className="mr-3">{text.buttonText}</span>
          <CoinsIcon white={true} />
          <span className="text-van-gogh-sm ml-1">{settings.credits}</span>
        </button>
      </div>
      <div
        className={`overflow-hidden max-h-${
          settings.enableNegativePrompt ? "input-height" : "0"
        } opacity-${settings.enableNegativePrompt ? "100" : "0"}
        mb-${settings.enableNegativePrompt ? "4" : "0"} transition-all`}
      >
        <Textarea
          placeholder={text.negPromptInputPlaceholder}
          onChange={(e) =>
            setSetting(SETTINGS_KEY.NEGATIVE_PROMPT, e.target.value)
          }
        ></Textarea>
      </div>
      <div className="flex gap-4">
        <ModelDropdownMenu
          options={modelData}
          value={selectedModel}
          setValue={(x) => setSetting(SETTINGS_KEY.MODEL_ID, x)}
        />
        <div className="min-w-[10rem]">
          <DropdownMenu
            options={imageStyles}
            value={settings.imageStyle}
            setValue={(x) => setSetting(SETTINGS_KEY.IMAGE_STYLE, x)}
            isDisabled={false}
            leftIcon={<FlaskIcon />}
            headerTheme={true}
            large={true}
          />
        </div>
        <div className="flex items-center gap-2.5 px-3.5 rounded-md bg-van-gogh-dark-blue hover:bg-van-gogh-dark-blue-hover cursor-pointer">
          <AtomicIcon />
          <p className="text-van-gogh-sm font-medium">{text.addElements}</p>
          <CirclePlusIcon />
          <div className="flex items-center justify-center h-8 py-1 px-4 font-semibold bg-purple-gradient text-van-gogh-sm rounded-full">
            {badgeText.new}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Switch
            enabled={settings.enableNegativePrompt}
            handleToggle={() =>
              setSetting(
                SETTINGS_KEY.ENABLE_NEGATIVE_PROMPT,
                !settings.enableNegativePrompt
              )
            }
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
              className={`flex gap-1 items-center mr-8 py-2 font-medium ${
                pathname !== route.path
                  ? "text-van-gogh-grey-m hover:text-white"
                  : "van-gogh-header-link"
              }`}
            >
              {route.title}
              {route.title === "Image Guidance" && (
                <div
                  className={`flex justify-center min-w-8 px-1.5 py-1 text-van-gogh-3xs rounded-md ${
                    settings.imageGuidance
                      ? "bg-green-gradient"
                      : "bg-van-gogh-badge-grey"
                  }`}
                >
                  <span className="text-white">{settings.imageGuidance ? "ON" : "OFF"}</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
