"use client";

import { Heading } from "@chakra-ui/react";
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
import Switch from "../components/Switch";
import {
  badgeText,
  imageGenerationHeaderStrings,
} from "@/app/lib/stringConstants";
import { useSettings } from "@/app/context/SettingsContext";
import TextareaAutoResize from "../components/TextareaAutoResize";
import GenerateButton from "../components/GenerateButton";
import TokenHeader from "../components/TokenHeader";
import SettingsIcon from "../svg/SettingsIcon";
import Image from "next/image";

export default function ImageGenerationHeader() {
  const { settings, setSetting } = useSettings();
  const pathname = usePathname();
  const selectedModel =
    modelData.find((x) => x.modelId === settings.modelId) || modelData[0];
  const text = imageGenerationHeaderStrings;

  return (
    <div className="flex flex-col w-full z-50">
      <div className="flex my-5 md:hidden px-4">
        <Image
          src="/leonardo-logo-text-new.svg"
          alt="Leonardo Logo"
          width={117}
          height={34}
        />
      </div>
      <div className="px-4 mb-8 md:mb-2 md:mt-10 md:px-8">
        <Heading as="h1" fontSize="1.5rem" fontWeight={500}>
          {text.title}
        </Heading>
      </div>
      <div className="flex md:hidden justify-between px-4">
        <button className="flex items-center justify-center min-w-[45px] w-[45px] h-[45px] bg-van-gogh-dark-blue hover:bg-van-gogh-grey-xd rounded-md mr-2">
          <DiceIcon id="1" />
        </button>
        <div className="flex items-center gap-3">
          <TokenHeader />
          <button className="flex justify-center items-center border border-van-gogh-border-grey rounded-md w-10 h-10 hover:bg-van-gogh-hover-grey">
            <SettingsIcon />
          </button>
        </div>
      </div>
      <div className="flex w-full mt-5 mb-4 px-4 md:px-8">
        <button className="hidden md:flex items-center justify-center min-w-[45px] w-[45px] h-[45px] bg-van-gogh-dark-blue hover:bg-van-gogh-grey-xd rounded-md mr-2">
          <DiceIcon id="2" />
        </button>
        <TextareaAutoResize
          maxLength={1000}
          placeholder={text.promptInputPlaceholder}
          value={settings.prompt}
          handleChange={(e) => setSetting(SETTINGS_KEY.PROMPT, e.target.value)}
        />
        <GenerateButton mobile={false} />
      </div>
      <div
        className={
          settings.enableNegativePrompt
            ? "overflow-hidden px-4 md:px-8 mb-4"
            : "hidden"
        }
      >
        <TextareaAutoResize
          maxLength={1000}
          placeholder={text.negPromptInputPlaceholder}
          value={settings.negativePrompt}
          handleChange={(e) =>
            setSetting(SETTINGS_KEY.NEGATIVE_PROMPT, e.target.value)
          }
        />
      </div>
      <div className="flex flex-wrap gap-4 px-4 mb-8 md:mb-0 md:px-8">
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
        <div className="flex h-14 items-center gap-2.5 px-3.5 rounded-md bg-van-gogh-dark-blue hover:bg-van-gogh-dark-blue-hover cursor-pointer">
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
      <div className="flex px-4">
        <GenerateButton mobile={true} />
      </div>
      <div className="mt-8 px-0 md:mt-5 md:px-8 ">
        <div className="flex">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`flex flex-1 md:flex-none gap-1 items-center justify-center md:mr-8 py-2 text-van-gogh-sm md:text-van-gogh-md font-medium ${
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
                  <span className="text-white">
                    {settings.imageGuidance ? "ON" : "OFF"}
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
