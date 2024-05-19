"use client";

import {
  alchemyPresets,
  defaultPresets,
  modelData,
  photoRealPresets,
  routes,
} from "@/app/lib/dataConstants";
import ModelDropdownMenu from "../components/ModelDropdownMenu";
import DropdownMenu from "../components/DropdownMenu";
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
import {
  convertPresetStyleToString,
  convertStringToPresetStyle,
} from "@/app/lib/helpers";
import RandomPromptButton from "../components/RandomPromptButton";
import LeonardoLogoText from "../svg/LeonardoLogoText";
import AlchemyIcon from "../svg/AlchemyIcon";
import PhotoRealIcon from "../svg/PhotoRealIcon";
import ImageGuidanceHeaderControls from "../components/ImageGuidanceHeaderControls";
import { InfoIcon } from "@chakra-ui/icons";

export default function ImageGenerationHeader() {
  const {
    generationRequest,
    setKeyOfGenerationRequest,
    interfaceState,
    setKeyOfInterfaceState,
  } = useSettings();

  const pathname = usePathname();
  const selectedModel =
    modelData.find((x) => x.modelId === generationRequest.modelId) ||
    modelData[0];
  const text = imageGenerationHeaderStrings;
  const presetStyles = generationRequest.photoReal
    ? photoRealPresets
    : generationRequest.alchemy
    ? alchemyPresets
    : defaultPresets;
  const dropdownIcon = () => {
    if (generationRequest.photoReal) return <PhotoRealIcon id="header" />;
    else if (generationRequest.alchemy) return <AlchemyIcon />;
    else return <span></span>;
  };

  return (
    <div className="flex flex-col w-full z-[100]">
      <div className="flex my-5 md:hidden px-4">
        <LeonardoLogoText mobile={true} />
      </div>
      <div className="px-4 mb-8 md:mb-2 md:mt-10 md:px-8">
        <h1 className="font-medium text-van-gogh-lg md:text-van-gogh-2xl">
          {text.title}
        </h1>
      </div>
      <div
        className={
          interfaceState.enableImageGuidance
            ? "flex mt-4 px-4 md:px-8"
            : "hidden"
        }
      >
        <div className="flex items-center gap-2 w-fit bg-van-gogh-dark-blue-gradient px-4 py-2 border border-van-gogh-grey-blue-400 rounded-lg">
          <InfoIcon color="#6A6AFB" h={5} w={5} />
          <span className="text-van-gogh-grey-700">
            Note that image guidance is on and will be affecting your output.
          </span>
        </div>
      </div>
      <div className="flex md:hidden justify-between px-4">
        <RandomPromptButton mobile={true} />
        <div className="flex items-center gap-3">
          <TokenHeader />
          <button
            className="flex justify-center items-center border border-van-gogh-grey-100 rounded-md w-9 h-9 hover:bg-van-gogh-hover-grey-800"
            onClick={() =>
              setKeyOfInterfaceState("mobileSideBarExpanded", true)
            }
          >
            <SettingsIcon />
          </button>
        </div>
      </div>
      <div className="flex w-full mt-5 mb-4 px-4 md:px-8">
        <RandomPromptButton mobile={false} />
        <TextareaAutoResize
          maxLength={1000}
          placeholder={text.promptInputPlaceholder}
          value={generationRequest.prompt}
          handleChange={(e) =>
            setKeyOfGenerationRequest("prompt", e.target.value)
          }
        />
        <GenerateButton mobile={false} />
      </div>
      <div
        className={
          interfaceState.enableNegativePrompt
            ? "overflow-hidden px-4 md:px-8 mb-4"
            : "hidden"
        }
      >
        <TextareaAutoResize
          maxLength={1000}
          placeholder={text.negPromptInputPlaceholder}
          value={
            generationRequest.negative_prompt
              ? generationRequest.negative_prompt
              : ""
          }
          handleChange={(e) =>
            setKeyOfGenerationRequest("negative_prompt", e.target.value)
          }
        />
      </div>
      <div className="flex flex-wrap gap-4 px-4 mb-8 md:mb-0 md:px-8">
        <ModelDropdownMenu
          options={modelData}
          value={selectedModel}
          setValue={(x) => setKeyOfGenerationRequest("modelId", x)}
        />
        <div className="min-w-[10rem]">
          <DropdownMenu
            options={presetStyles}
            value={convertPresetStyleToString(generationRequest.presetStyle)}
            setValue={(x) =>
              setKeyOfGenerationRequest(
                "presetStyle",
                convertStringToPresetStyle(x)
              )
            }
            isDisabled={false}
            leftIcon={dropdownIcon()}
            headerTheme={true}
            large={true}
          />
        </div>
        <div className="flex h-14 items-center gap-2.5 px-3.5 rounded-md bg-van-gogh-blue-500 hover:bg-van-gogh-blue-800 cursor-pointer">
          <AtomicIcon />
          <p className="text-van-gogh-sm font-medium">{text.addElements}</p>
          <CirclePlusIcon />
          <div className="flex items-center justify-center h-8 py-1 px-4 font-semibold bg-van-gogh-purple-gradient text-van-gogh-sm rounded-full">
            {badgeText.new}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Switch
            enabled={interfaceState.enableNegativePrompt}
            handleToggle={() =>
              setKeyOfInterfaceState(
                "enableNegativePrompt",
                !interfaceState.enableNegativePrompt
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
        <ImageGuidanceHeaderControls />
        <div className="flex">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`flex flex-1 md:flex-none gap-1 items-center justify-center text-center md:mr-8 py-2 text-[0.8175rem] md:text-van-gogh-md font-medium ${
                pathname !== route.path
                  ? "text-van-gogh-grey-700 hover:text-white"
                  : "van-gogh-header-link"
              }`}
            >
              {route.title}
              {route.title === "Image Guidance" && (
                <div
                  className={`flex justify-center min-w-8 px-1.5 py-1 text-van-gogh-3xs rounded-md ${
                    interfaceState.enableImageGuidance
                      ? "bg-van-gogh-green-gradient"
                      : "bg-van-gogh-grey-900"
                  }`}
                >
                  <span className="text-white">
                    {interfaceState.enableImageGuidance ? "ON" : "OFF"}
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
