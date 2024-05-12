"use client";

import { Tooltip } from "@chakra-ui/react";
import ArrowUpIcon from "../svg/ArrowUpIcon";
import Image from "next/image";
import PaintDropIcon from "../svg/PaintDropIcon";
import ImagesIcon from "../svg/ImagesIcon";
import DimensionsIcon from "../svg/DimensionsIcon";
import TickIcon from "../svg/TickIcon";
import { FC, useEffect, useRef, useState } from "react";
import { modelData } from "@/app/lib/dataConstants";
import CopyIcon from "../svg/CopyIcon";
import { PresetStyle } from "@/app/lib/definitions";
import { convertPresetStyleToString } from "@/app/lib/helpers";

const PanelHeader: FC<{
  prompt: string;
  generationLength: number;
  modelId: string;
  presetStyle: PresetStyle;
  imageWidth: number;
  imageHeight: number;
}> = ({
  prompt,
  modelId,
  presetStyle,
  generationLength,
  imageHeight,
  imageWidth,
}) => {
  const [copied, setCopied] = useState(false);
  const copyRef = useRef<NodeJS.Timeout | number | null>(null);
  const selectedModel =
    modelData.find((x) => x.modelId === modelId) || modelData[0];
  const reusePrompt = () => console.log("reuse prompt");

  useEffect(() => {
    return () => {
      if (copyRef.current !== null) clearTimeout(copyRef.current);
    };
  }, []);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      if (copyRef.current !== null) clearTimeout(copyRef.current);
      copyRef.current = setTimeout(() => {
        setCopied(false);
        copyRef.current = null;
      }, 1000);
    } catch (err) {
      console.log("Failed to copy!");
      setCopied(false);
    }
  };
  return (
    <div className="flex gap-8 mt-8 mb-3">
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <div className="flex items-center overflow-hidden">
          <Tooltip label={prompt}>
            <p className="truncate text-van-gogh-sm">{prompt}</p>
          </Tooltip>
          <div className="flex ml-auto gap-2 items-center">
            <Tooltip label="Copy prompt">
              <button
                onClick={() => copyPrompt()}
                className="relative text-van-gogh-grey-subdued w-8 h-8"
              >
                <span
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    copied ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <TickIcon fill="green" />
                </span>
                <span
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    copied ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <CopyIcon />
                </span>
              </button>
            </Tooltip>
            <Tooltip label="Reuse prompt">
              <button
                className="flex justify-center items-center h-8 w-8 bg-van-gogh-white-opal rounded-md border border-van-gogh-border-grey hover:bg-van-gogh-white-opal-hover"
                onClick={() => reusePrompt()}
              >
                <ArrowUpIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="flex-none w-auto justify-end h-8 self-end">
          <div className="pl-2 flex flex-nowrap gap-1 items-center text-van-gogh-xs">
            <div className="flex gap-1.5 items-center pl-1 pr-2">
              <div className="flex w-4.5 h-4.5">
                <Image width={15} height={15} src={selectedModel.img} alt="" />
              </div>
              <p>{selectedModel.modelName}</p>
            </div>
            <div className="hidden md:flex px-2 gap-1 items-center">
              <PaintDropIcon />
              <p>{convertPresetStyleToString(presetStyle)}</p>
            </div>
            <div className="p-2 flex gap-1 items-center">
              <ImagesIcon />
              <span>{generationLength}</span>
            </div>
            <div className="flex gap-1 p-2 items-center">
              <DimensionsIcon />
              <span>{`${imageWidth} x ${imageHeight}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelHeader;
