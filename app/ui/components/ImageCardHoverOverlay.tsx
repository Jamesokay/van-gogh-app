"use client";

import CanvasIcon from "../svg/CanvasIcon";
import DownloadIcon from "../svg/DownloadIcon";
import ImageGuidanceIcon from "../svg/ImageGuidanceIcon";
import MotionVideoIcon from "../svg/MotionVideoIcon";
import RemoveBackgroundIcon from "../svg/RemoveBackgroundIcon";
import UpscalerIcon from "../svg/UpscalerIcon";
import TickIcon from "../svg/TickIcon";
import { Tooltip } from "@chakra-ui/react";
import DeleteFilledIcon from "../svg/DeleteFilledIcon";
import { badgeText, tooltipText } from "@/app/lib/stringConstants";
import ImageCardButton from "./ImageCardButton";
import BadgeWrapper from "./BadgeWrapper";
import { FC } from "react";
import { useSettings } from "@/app/context/SettingsContext";
import { SETTINGS_KEY } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";

const ImageCardHoverOverlay: FC<{ src: string, hidden: boolean }> = ({ src, hidden }) => {
  const { settings, setSetting } = useSettings();
  const router = useRouter();

  const handleImageGuidanceInput = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSetting(SETTINGS_KEY.IMAGE_GUIDANCE_SRC, src);
    if (!settings.imageGuidance) setSetting(SETTINGS_KEY.IMAGE_GUIDANCE, true);
    router.push("/image-guidance");
  };

  return (
    <div className={hidden ? "hidden" : "hover-child bg-image-overlay-gradient flex flex-col justify-between rounded-md absolute left-0 top-0 cursor-pointer z-10 w-full h-full opacity-0 transition-opacity duration-300"}>
      <Tooltip label="Select image" hasArrow>
        <button
          type="button"
          className="flex justify-center items-center p-2 w-fit rounded-full ml-4 mt-4 bg-transparent-purple-gradient grayscale hover:grayscale-0 hover:backdrop-blur-[3px] hover:backdrop-brightness-95 transition-all"
          aria-label="Select image"
        >
          <TickIcon />
        </button>
      </Tooltip>
      <div className="flex self-center mb-4">
        <div className="flex items-end gap-3">
          <ImageCardButton label={tooltipText.downloadImage}>
            <DownloadIcon />
          </ImageCardButton>
          <div className="flex flex-col">
            <div className="border border-transparent border-b-van-gogh-border-white-alpha">
              <ImageCardButton label={tooltipText.removeBackground} rounded="t">
                <RemoveBackgroundIcon />
              </ImageCardButton>
            </div>
            <BadgeWrapper label={badgeText.new}>
              <ImageCardButton label={tooltipText.motionVideo} rounded="b">
                <MotionVideoIcon />
              </ImageCardButton>
            </BadgeWrapper>
          </div>
          <div className="flex flex-col">
            <BadgeWrapper label={badgeText.new}>
              <ImageCardButton label={tooltipText.alchemyUpscaler}>
                <UpscalerIcon />
              </ImageCardButton>
            </BadgeWrapper>
          </div>
          <div className="flex flex-col">
            <div className="border border-transparent border-b-van-gogh-border-white-alpha">
              <ImageCardButton
                onClick={(e) => handleImageGuidanceInput(e)}
                label={tooltipText.imageGuidance}
                rounded="t"
              >
                <ImageGuidanceIcon />
              </ImageCardButton>
            </div>
            <ImageCardButton label={tooltipText.editCanvas} rounded="b">
              <CanvasIcon />
            </ImageCardButton>
          </div>
          <BadgeWrapper label={badgeText.premium}>
            <ImageCardButton
              label={tooltipText.premiumToDelete}
              disabled={true}
            >
              <DeleteFilledIcon />
            </ImageCardButton>
          </BadgeWrapper>
        </div>
      </div>
    </div>
  );
};

export default ImageCardHoverOverlay;
