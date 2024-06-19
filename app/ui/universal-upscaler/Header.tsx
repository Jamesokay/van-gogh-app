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
import { Tooltip } from "@chakra-ui/react";

const Header = () => {
  const { upscalerRequest } = useUpscaler();
  const disabled =
    !upscalerRequest.generatedImageId && !upscalerRequest.initImageId;

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
          disabled ? "opacity-50" : "opacity-100"
        }`}
      >
        <Tooltip label="Create Motion video from this upscale">
          <span>
            <OutlineButton disabled={disabled}>
              <MotionVideoIcon />
            </OutlineButton>
          </span>
        </Tooltip>
        <Tooltip label="Download the selected upscaled image">
          <span>
            <OutlineButton disabled={disabled}>
              <DownloadIcon white />
            </OutlineButton>
          </span>
        </Tooltip>
        <Tooltip label="Delete the selected upscaled image">
          <span>
            <OutlineButton disabled={disabled}>
              <DeleteFilledIcon white />
            </OutlineButton>
          </span>
        </Tooltip>
        <OutlineButton disabled={disabled}>
          <div className="flex items-center gap-2">
            <UpscaleDetailsIcon />
            <p className="text-van-gogh-sm">Upscale Details</p>
          </div>
        </OutlineButton>
      </div>
    </div>
  );
};

export default Header;
