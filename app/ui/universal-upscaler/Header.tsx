"use client";

import { signOut } from "@/app/lib/actions";
import BackArrowIcon from "../svg/BackArrowIcon";
import Image from "next/image";
import OutlineButton from "../components/OutlineButton";
import MotionVideoIcon from "../svg/MotionVideoIcon";
import DownloadIcon from "../svg/DownloadIcon";
import DeleteFilledIcon from "../svg/DeleteFilledIcon";
import UpscaleDetailsIcon from "../svg/UpscaleDetailsIcon";
import { useUpscaler } from "@/app/context/UpscalerContext";
import { Popover, PopoverBody, PopoverContent, PopoverTrigger, Tooltip } from "@chakra-ui/react";
import { convertUpscalerStyleToString } from "@/app/lib/helpers";
import { LeonardoUpscalerStyle } from "@/app/lib/definitions";

const Header = () => {
  const { selectedUpscaleHistoryItem } = useUpscaler();

  return (
    <div className="sticky flex items-center justify-between top-0 left-0 z-50 bg-van-gogh-header-gradient px-3 py-1.5 w-full border border-bottom border-van-gogh-border-dark-blue">
      <div className="flex items-center gap-2">
        <div
          role="button"
          className="hidden md:flex text-van-gogh-icon-grey-900 hover:text-van-gogh-white-opal-900"
          onClick={() => signOut()}
        >
          <BackArrowIcon />
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/leonardo-logo-small.webp"
            alt="Leonardo logo"
            height={32.5}
            width={32.5}
          />
          <p className="font-medium text-van-gogh-lg">
            Leonardo.<span className="van-gogh-gradient-text">Ai</span>
          </p>
        </div>
      </div>
      <div className="flex text-van-gogh-lg">
        <p className="font-medium">
          Universal <span className="van-gogh-gradient-text">Upscaler</span>
        </p>
      </div>
      <div
        className={`flex gap-2 transition-all ${
          !selectedUpscaleHistoryItem ? "opacity-50" : "opacity-100"
        }`}
      >
        <Tooltip label="Create Motion video from this upscale">
          <span>
            <OutlineButton disabled={!selectedUpscaleHistoryItem}>
              <MotionVideoIcon />
            </OutlineButton>
          </span>
        </Tooltip>
        <Tooltip label="Download the selected upscaled image">
          <span>
            <OutlineButton disabled={!selectedUpscaleHistoryItem}>
              <DownloadIcon white />
            </OutlineButton>
          </span>
        </Tooltip>
        <Tooltip label="Delete the selected upscaled image">
          <span>
            <OutlineButton disabled={!selectedUpscaleHistoryItem}>
              <DeleteFilledIcon white />
            </OutlineButton>
          </span>
        </Tooltip>
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <span>
            <OutlineButton disabled={!selectedUpscaleHistoryItem}>
              <div className="flex items-center gap-2">
                <UpscaleDetailsIcon />
                <p className="text-van-gogh-sm">Upscale Details</p>
              </div>
            </OutlineButton>
            </span>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              <div className="flex flex-col gap-2.5 w-80 text-van-gogh-sm px-4 py-2.5 border-w-[1px] border-van-gogh-grey-100 bg-van-gogh-outline-button-grey rounded-md">
                <div className="flex justify-between">
                  <span className="font-medium">Creativity Strength</span>
                  <span className="px-2.5 py-1 rounded-md bg-van-gogh-grey-400 text-van-gogh-grey-700 text-van-gogh-xs">{selectedUpscaleHistoryItem?.details?.creativityStrength}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Upscale Multiplier</span>
                  <span className="px-2.5 py-1 rounded-md bg-van-gogh-grey-400 text-van-gogh-grey-700 text-van-gogh-xs">{selectedUpscaleHistoryItem?.details?.upscaleMultiplier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dimensions</span>
                  <span className="px-2.5 py-1 rounded-md bg-van-gogh-grey-400 text-van-gogh-grey-700 text-van-gogh-xs">{selectedUpscaleHistoryItem?.upscaledImage?.width} x {selectedUpscaleHistoryItem?.upscaledImage?.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Upscaler Style</span>
                  <span className="px-2.5 py-1 rounded-md bg-van-gogh-grey-400 text-van-gogh-grey-700 text-van-gogh-xs">{convertUpscalerStyleToString(selectedUpscaleHistoryItem?.details?.upscalerStyle as LeonardoUpscalerStyle)}</span>
                </div>
              </div>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
