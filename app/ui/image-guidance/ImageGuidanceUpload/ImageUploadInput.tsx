"use client";

import { FC } from "react";
import UploadIcon from "../../svg/UploadIcon";
import { imageGuidanceStrings } from "@/app/lib/stringConstants";
import { useSettings } from "@/app/context/SettingsContext";
import RecentImagesDropdown from "./RecentImagesDropdown";

const ImageUploadInput: FC<{
  openFileSystem: () => void;
}> = ({ openFileSystem }) => {
  const {
    interfaceState,
    setKeyOfGenerationRequest,
    setKeyOfInterfaceState,
  } = useSettings();
  const text = imageGuidanceStrings.uploadStrings;

  return (
    <div
      className={
        interfaceState.imageGuidanceSrc
          ? "hidden"
          : "flex flex-col gap-1.5 py-2.5 px-4"
      }
    >
      <p className="text-van-gogh-xs font-medium">{text.description}</p>
      <button
        className="flex flex-col items-center justify-center gap-2.5 px-2 py-4 bg-van-gogh-blue-500 border border-van-gogh-grey-800 rounded-lg"
        onClick={() => openFileSystem()}
      >
        <UploadIcon size="calc(1rem * 2.875)" />
        <p className="text-van-gogh-sm font-medium">{text.description}</p>
        <p className="text-van-gogh-xs text-van-gogh-text-grey-600">
          {text.formatAndSize}
        </p>
      </button>
      <div className="h-10 w-full">
        <RecentImagesDropdown
          setValue={(img) => {
            setKeyOfInterfaceState("enableImageGuidance", true);
            setKeyOfInterfaceState("imageGuidanceSrc", img.url)
            setKeyOfGenerationRequest("init_generation_image_id", img.id);
          }}
          variant="recentImagesMenu"
        />
      </div>
    </div>
  );
};

export default ImageUploadInput;
