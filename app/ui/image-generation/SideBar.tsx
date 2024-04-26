"use client";

import { useSettings } from "@/app/context/SettingsContext";
import OptionWithSwitch from "../components/OptionWithSwitch";
import {
  AspectRatioKey,
  aspectRatioOptions,
  BADGE_TEXT,
  COLUMN_OPTIONS,
  defaultAspectRatioConversion,
  dimensionOptions,
  InputDimension,
  numberOfImagesOptions,
  OPTION_TITLE,
  SECTION_TITLE,
  TOOLTIP_TEXT,
} from "./definitions";
import SectionWithOptionsGrid from "../components/SectionWithOptionsGrid";
import RangeSlider from "../components/RangeSlider";
import DimensionInput from "../components/DimensionInput";
import {
  calculateProportionalHeight,
  findApproximateAspectRatio,
  parseDimension,
  transformDimensions,
} from "../actions";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import Image from "next/image";
import CoinsIcon from "../svg/CoinsIcon";
import DropdownMenu from "../components/DropdownMenu";
import { useState } from "react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import BackArrowIcon from "../svg/BackArrowIcon";
import { Tooltip } from "@chakra-ui/react";

export default function SideBar() {
  const { settings, setSetting } = useSettings();
  const [aspectRatioLocked, setAspectRatioLocked] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<AspectRatioKey>("3:2");
  const aspectRatioValue = findApproximateAspectRatio({
    width: settings.aspectRatioWidth,
    height: settings.aspectRatioHeight,
  });
  const outputDimensions = transformDimensions({
    width: settings.aspectRatioWidth,
    height: settings.aspectRatioHeight,
  });

  const handleDimensionOption = (option: string) => {
    if (aspectRatioLocked) setAspectRatioLocked(false);
    const dimensions = parseDimension(option);
    if (!dimensions?.width || !dimensions?.height) return;
    setSetting("aspectRatioWidth", dimensions.width);
    setSetting("aspectRatioHeight", dimensions.height);
  };

  const handleAspectRatioOptionClick = (option: AspectRatioKey) => {
    const result = defaultAspectRatioConversion[option];
    if (!result) return;
    setAspectRatio(option);
    setSetting("aspectRatioWidth", result.width);
    setSetting("aspectRatioHeight", result.height);
  };

  const handleLockedAspectRatio = (
    dimension: InputDimension,
    value: number
  ) => {
    if (dimension === "aspectRatioWidth") {
      const correspondingHeight = calculateProportionalHeight(
        aspectRatio,
        value
      );
      setSetting("aspectRatioWidth", value);
      setSetting("aspectRatioHeight", correspondingHeight);
    } else {
      const correspondingWidth = calculateProportionalHeight(
        aspectRatio,
        value
      );
      setSetting("aspectRatioHeight", value);
      setSetting("aspectRatioWidth", correspondingWidth);
    }
  };

  const handleAspectRatioChange = (
    dimension: InputDimension,
    value: number
  ) => {
    if (aspectRatioLocked) handleLockedAspectRatio(dimension, value);
    else setSetting(dimension, value);
  };

  return (
    <div className="flex flex-col w-sidebar-width bg-grey-400 bg-darkblue-to-darkerblue-gradient px-5 pt-spacing-m overflow-y-auto">
      <div className="flex flex-col items-center my-5 gap-3.5">
        <div className="flex gap-2 items-center">
          <BackArrowIcon />
          <Image
            src="/leonardo-logo-text.svg"
            alt="Leonardo Logo"
            width={117}
            height={34}
          />
        </div>
        <div className="flex gap-2 items-center justify-center px-3 py-1.5 border border-w-thinner border-van-gogh-border-grey rounded-corners-l">
          <div className="flex items-center text-van-gogh-xs">
            <CoinsIcon />
            150
          </div>
          <QuestionMarkIcon />
          <button className="flex items-center justify-center h-8 py-1 px-4 font-semibold bg-purple-gradient text-van-gogh-xs rounded-corners-l">
            Upgrade
          </button>
        </div>
      </div>
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <SectionWithOptionsGrid
        title={SECTION_TITLE.NUMBER_OF_IMAGES}
        options={numberOfImagesOptions}
        columns={COLUMN_OPTIONS.FOUR}
        value={settings.numberOfImages}
        setValue={(x) => setSetting("numberOfImages", x)}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={OPTION_TITLE.PHOTOREAL}
        badgeText={BADGE_TEXT.V2}
        tooltipText={TOOLTIP_TEXT.PHOTOREAL}
        enabled={settings.photoReal}
        toggle={() => setSetting("photoReal", !settings.photoReal)}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={OPTION_TITLE.ALCHEMY}
        badgeText={BADGE_TEXT.V2}
        tooltipText={TOOLTIP_TEXT.ALCHEMY}
        enabled={settings.alchemy}
        toggle={() => setSetting("alchemy", !settings.alchemy)}
      />
      <div className="flex justify-between border text-center text-van-gogh-xs py-2 pr-2 pl-2.5 rounded-corners-xs bg-van-gogh-dark-blue border-van-gogh-grey-blue mb-spacing-m">
        <span className="text-van-gogh-grey-m">Output Resolution</span>
        <span>{`${outputDimensions.width} x ${outputDimensions.height}`}</span>
      </div>
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={OPTION_TITLE.TRANSPARENCY}
        badgeText={BADGE_TEXT.BETA}
        tooltipText={TOOLTIP_TEXT.TRANSPARENCY}
        enabled={settings.transparency}
        toggle={() => setSetting("transparency", !settings.transparency)}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={OPTION_TITLE.PUBLIC_IMAGES}
        tooltipText={TOOLTIP_TEXT.PUBLIC_IMAGES}
        enabled={settings.publicImages}
        toggle={() => setSetting("publicImages", !settings.publicImages)}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <SectionWithOptionsGrid
        title={SECTION_TITLE.INPUT_DIMENSIONS}
        options={dimensionOptions}
        columns={COLUMN_OPTIONS.TWO}
        tooltipText={TOOLTIP_TEXT.INPUT_DIMENSIONS}
        value={`${settings.aspectRatioWidth} x ${settings.aspectRatioHeight}`}
        setValue={(x) => handleDimensionOption(x)}
      />
      <p className="text-van-gogh-sm font-light mb-spacing-m">
        {SECTION_TITLE.ADVANCED_CONTROLS}
      </p>
      <div className="flex gap-2">
        <button
          className={`flex justify-center items-center border h-10 min-w-10 rounded-corners-xs bg-van-gogh-dark-blue  hover:bg-van-gogh-grey-xd border-van-gogh-grey-blue ${
            aspectRatioLocked ? "border-van-gogh-purple" : ""
          }`}
          onClick={() => setAspectRatioLocked(!aspectRatioLocked)}
        >
          <LockIcon display={aspectRatioLocked ? "flex" : "none"} />
          <UnlockIcon display={aspectRatioLocked ? "none" : "flex"} />
        </button>
        <DropdownMenu
          value={aspectRatioValue}
          options={aspectRatioOptions}
          setValue={(x) => handleAspectRatioOptionClick(x as AspectRatioKey)}
        />
      </div>
      <div className="flex items-center gap-spacing-m mb-2">
        <RangeSlider
          value={settings.aspectRatioWidth}
          setValue={(x) => handleAspectRatioChange("aspectRatioWidth", x)}
          max={1536}
          min={512}
        />
        <DimensionInput
          dimension="W"
          value={settings.aspectRatioWidth}
          setValue={(x) => handleAspectRatioChange("aspectRatioWidth", x)}
          max={1536}
          min={512}
          unit="px"
        />
      </div>
      <div className="flex items-center gap-spacing-m mb-2">
        <RangeSlider
          value={settings.aspectRatioHeight}
          setValue={(x) => handleAspectRatioChange("aspectRatioHeight", x)}
          max={1536}
          min={512}
        />
        <DimensionInput
          dimension="H"
          value={settings.aspectRatioHeight}
          setValue={(x) => handleAspectRatioChange("aspectRatioHeight", x)}
          max={1536}
          min={512}
          unit="px"
        />
      </div>
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60 mb-spacing-m" />
      <div className="flex gap-2 items-center mb-1">
        <p className="text-van-gogh-md font-medium">
          {SECTION_TITLE.GUIDANCE_SCALE}
        </p>
        <Tooltip label={TOOLTIP_TEXT.GUIDANCE_SCALE}>
          <span>
            <QuestionMarkIcon />
          </span>
        </Tooltip>
      </div>
      <div className="flex gap-3 mb-1">
        <RangeSlider
          value={settings.guidanceScale}
          setValue={(x) => setSetting("guidanceScale", x)}
          min={1}
          max={20}
        />
        <div className="flex items-center justify-center font-semibold w-8 text-van-gogh-xs select-none">
          {settings.guidanceScale}
        </div>
      </div>
      <OptionWithSwitch
        title={OPTION_TITLE.TILING}
        tooltipText={TOOLTIP_TEXT.TILING}
        enabled={settings.tiling}
        toggle={() => setSetting("tiling", !settings.tiling)}
      />
    </div>
  );
}
