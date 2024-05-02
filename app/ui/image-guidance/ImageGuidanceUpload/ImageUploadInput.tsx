"use client";

import { FC } from "react";
import UploadIcon from "../../svg/UploadIcon";
import DropdownMenu from "../../components/DropdownMenu";
import { imageGuidanceStrings } from "@/app/lib/stringConstants";
import { useSettings } from "@/app/context/SettingsContext";
const ImageUploadInput: FC<{
  openFileSystem: () => void;
}> = ({ openFileSystem }) => {
  const { settings } = useSettings();

  const text = imageGuidanceStrings.uploadStrings;

  return (
    <div
      className={
        settings.imageGuidanceSrc
          ? "hidden"
          : "flex flex-col gap-1.5 py-2.5 px-4"
      }
    >
      <p className="text-van-gogh-xs font-medium">{text.description}</p>

      <button
        className="flex flex-col items-center justify-center gap-2.5 px-2 py-4 bg-van-gogh-dark-blue border border-van-gogh-grey-blue rounded-lg"
        onClick={() => openFileSystem()}
      >
        <UploadIcon size="calc(1rem * 2.875)" />
        <p className="text-van-gogh-sm font-medium">{text.description}</p>
        <p className="text-van-gogh-xs text-van-gogh-text-grey">
          {text.formatAndSize}
        </p>
      </button>
      <div className="h-10 w-full">
        <DropdownMenu
          options={[""]}
          value={"Select from Recent Images"}
          setValue={() => {}}
          isDisabled={false}
          align="left"
          headerTheme={false}
        />
      </div>
    </div>
  );
};

export default ImageUploadInput;
