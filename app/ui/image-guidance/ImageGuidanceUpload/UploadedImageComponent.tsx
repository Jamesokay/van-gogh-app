"use client";

import { QuestionIcon, WarningTwoIcon } from "@chakra-ui/icons";
import DropdownMenu from "../../components/DropdownMenu";
import RangeSlider from "../../components/RangeSlider";
import { imageGuidanceStrings, tooltipText } from "@/app/lib/stringConstants";
import { useSettings } from "@/app/context/SettingsContext";
import { imageGuidanceTypes } from "@/app/lib/dataConstants";
import { IMAGE_GUIDANCE_STRENGTH, SETTINGS_KEY } from "@/app/lib/definitions";
import AspectRatioIcon from "../../svg/AspectRatioIcon";
import UploadIcon from "../../svg/UploadIcon";
import DeleteIcon from "../../svg/DeleteIcon";
import { FC, useRef, useState } from "react";
import { findApproximateAspectRatio } from "@/app/lib/actions";
import { Tooltip } from "@chakra-ui/react";

const UploadedImageComponent: FC<{ openFileSystem: () => void }> = ({
  openFileSystem,
}) => {
  const { settings, setSetting, clearImageGuidance } = useSettings();
  const currentAspectRatio = findApproximateAspectRatio({
    width: settings.aspectRatioWidth,
    height: settings.aspectRatioHeight,
  });
  const [uploadedAspectRatio, setUploadedAspectRatio] =
    useState(currentAspectRatio);
  const uploadedDimensions = useRef({
    width: settings.aspectRatioWidth,
    height: settings.aspectRatioHeight,
  });
  const mismatchedRatio = currentAspectRatio !== uploadedAspectRatio;

  const text = imageGuidanceStrings.uploadedStrings;

  const handleImageLoaded = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    uploadedDimensions.current = { width: naturalWidth, height: naturalHeight };
    setUploadedAspectRatio(
      findApproximateAspectRatio({ width: naturalWidth, height: naturalHeight })
    );
  };

  const setAspectRatioToUploadedValues = () => {
    setSetting(
      SETTINGS_KEY.ASPECT_RATIO_WIDTH,
      uploadedDimensions.current.width
    );
    setSetting(
      SETTINGS_KEY.ASPECT_RATIO_HEIGHT,
      uploadedDimensions.current.height
    );
  };

  return (
    <div
      className={
        !settings.imageGuidanceSrc ? "hidden" : "flex gap-6 py-2.5 px-4"
      }
    >
      <div className="flex flex-col gap-1.5 flex-1-1-0">
        <div className="flex gap-1 items-center text-van-gogh-xs">
          <p>{text.titleLeft}</p>
          <QuestionIcon opacity={0.3} />
        </div>
        <div className="flex justify-center w-full h-60 bg-black border border-van-gogh-grey-blue rounded-lg overflow-hidden">
          {settings.imageGuidanceSrc && (
            <div>
              <img
                className="h-60 w-full object-contain"
                src={settings.imageGuidanceSrc}
                alt=""
                onLoad={handleImageLoaded}
              />
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2.5">
            <Tooltip label={tooltipText.setAspectRatio}>
              <button
                className="flex justify-center items-center border h-10 min-w-10 rounded-md bg-van-gogh-dark-blue  hover:bg-van-gogh-grey-xd border-van-gogh-grey-blue"
                onClick={() => setAspectRatioToUploadedValues()}
              >
                <AspectRatioIcon />
              </button>
            </Tooltip>
            <Tooltip label={tooltipText.mismatchedAspectRatio}>
              <div
                className={
                  mismatchedRatio
                    ? "flex items-center gap-1.5 cursor-default text-van-gogh-xs"
                    : "hidden"
                }
              >
                <WarningTwoIcon color={"#E5B300"} />
                {uploadedAspectRatio}
              </div>
            </Tooltip>
          </div>
          <div className="flex gap-2.5">
            <Tooltip label={tooltipText.uploadInput}>
              <button
                className="flex justify-center items-center border h-10 min-w-10 rounded-md bg-van-gogh-dark-blue  hover:bg-van-gogh-grey-xd border-van-gogh-grey-blue"
                onClick={() => openFileSystem()}
              >
                <UploadIcon size="calc(1rem * 1.125)" />
              </button>
            </Tooltip>
            <Tooltip label={tooltipText.deleteInput}>
              <button
                className="flex justify-center items-center border h-10 min-w-10 rounded-md bg-van-gogh-dark-blue  hover:bg-van-gogh-grey-xd border-van-gogh-grey-blue"
                onClick={() => clearImageGuidance()}
              >
                <DeleteIcon />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 py-2.5 px-4 flex-1-1-0">
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-1 items-center text-van-gogh-xs">
            <p>{text.titleRight}</p>
            <QuestionIcon opacity={0.3} />
          </div>
          <div className="h-10">
            <DropdownMenu
              options={imageGuidanceTypes}
              value={settings.imageGuidanceType}
              setValue={(x) => setSetting(SETTINGS_KEY.IMAGE_GUIDANCE_TYPE, x)}
              isDisabled={false}
              headerTheme={false}
              large={true}
            />
          </div>
        </div>
        <div className="flex flex-col text-van-gogh-xs">
          <p>{text.midSectionTitle}</p>
          <p>{text.midSectionBody}</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-van-gogh-xs">
            <div className="flex gap-1 items-center">
              <p>{text.strength}</p>
              <QuestionIcon opacity={0.3} />
            </div>
            <p>{settings.imageGuidanceStrength / 100}</p>
          </div>
          <div className="w-full">
            <RangeSlider
              value={settings.imageGuidanceStrength}
              setValue={(x) =>
                setSetting(SETTINGS_KEY.IMAGE_GUIDANCE_STRENGTH, x)
              }
              max={IMAGE_GUIDANCE_STRENGTH.MAX}
              min={IMAGE_GUIDANCE_STRENGTH.MIN}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadedImageComponent;
