"use client";

import OptionWithSwitch from "../components/OptionWithSwitch";
import {
  AspectRatioKey,
  COLUMN_OPTIONS,
} from "../../lib/definitions";
import {
  aspectRatioOptions,
  dimensionOptions,
  numberOfImagesOptions,
} from "../../lib/dataConstants";
import SectionWithOptionsGrid from "../components/SectionWithOptionsGrid";
import RangeSlider from "../components/RangeSlider";
import DimensionInput from "../components/DimensionInput";

import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import Image from "next/image";
import CoinsIcon from "../svg/CoinsIcon";
import DropdownMenu from "../components/DropdownMenu";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import BackArrowIcon from "../svg/BackArrowIcon";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import RefreshIcon from "../svg/RefreshIcon";
import {
  badgeText,
  sideBarStrings,
  tooltipText,
} from "@/app/lib/stringConstants";
import {
  findApproximateAspectRatio,
  transformDimensions,
} from "@/app/lib/actions";
import { useSettings } from "@/app/context/SettingsContext";

const SideBar = () => {
  const {
    settings,
    setSetting,
    handlePhotoReal,
    handleAlchemy,
    handleAspectRatioChange,
    handleDimensionOption,
    handleAspectRatioOptionClick,
    handleReset,
    aspectRatioLocked,
    setAspectRatioLocked,
  } = useSettings();
  const aspectRatioValue = findApproximateAspectRatio({
    width: settings.aspectRatioWidth,
    height: settings.aspectRatioHeight,
  });
  const outputDimensions = transformDimensions({
    width: settings.aspectRatioWidth,
    height: settings.aspectRatioHeight,
  });
  const dimensionOptionsArray = settings.alchemy
    ? dimensionOptions.alchemy
    : dimensionOptions.default;

  return (
    <div className="flex flex-col w-van-gogh-sidebar-width bg-grey-400 bg-darkblue-to-darkerblue-gradient px-5 pt-van-gogh-spacing-m overflow-y-auto">
      <div className="flex flex-col items-center my-5 gap-3.5">
        <div className="flex gap-2 items-center w-full">
          <BackArrowIcon />
          <Image
            src="/leonardo-logo-text.svg"
            alt="Leonardo Logo"
            width={117}
            height={34}
          />
        </div>
        <div className="flex gap-2 items-center justify-center px-3 py-2 border border-w-thin border-van-gogh-border-grey rounded-full">
          <div className="flex items-center text-van-gogh-xs">
            <CoinsIcon />
            150
          </div>
          <QuestionMarkIcon />
          <button className="flex items-center justify-center h-8 py-1 px-4 font-semibold bg-purple-gradient text-van-gogh-xs rounded-full">
            {sideBarStrings.upgrade}
          </button>
        </div>
      </div>
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <SectionWithOptionsGrid
        title={sideBarStrings.numberOfImages}
        options={numberOfImagesOptions}
        columns={COLUMN_OPTIONS.FOUR}
        value={settings.numberOfImages}
        setValue={(x) => setSetting("numberOfImages", x)}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.photoReal}
        badgeText={badgeText.v2}
        tooltipText={tooltipText.photoReal}
        enabled={settings.photoReal}
        toggle={() => handlePhotoReal(!settings.photoReal)}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.alchemy}
        badgeText={badgeText.v2}
        tooltipText={tooltipText.alchemy}
        enabled={settings.alchemy}
        toggle={() => handleAlchemy(!settings.alchemy)}
      />
      <div className="flex justify-between border text-center text-van-gogh-xs py-2 pr-2 pl-2.5 rounded-md bg-van-gogh-dark-blue border-van-gogh-grey-blue mb-van-gogh-spacing-m">
        <span className="text-van-gogh-grey-m">
          {sideBarStrings.outputResolution}
        </span>
        <span>{`${outputDimensions.width} x ${outputDimensions.height}`}</span>
      </div>
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.promptMagic}
        tooltipText={tooltipText.promptMagic}
        enabled={settings.promptMagic}
        toggle={() => setSetting("promptMagic", !settings.promptMagic)}
        hidden={settings.alchemy}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.transparency}
        badgeText={badgeText.beta}
        tooltipText={tooltipText.transparency}
        enabled={settings.transparency}
        toggle={() => setSetting("transparency", !settings.transparency)}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.publicImages}
        tooltipText={tooltipText.publicImages}
        enabled={settings.publicImages}
        toggle={() => setSetting("publicImages", !settings.publicImages)}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60 mb-van-gogh-spacing-ml" />
      <SectionWithOptionsGrid
        title={sideBarStrings.inputDimensions}
        options={dimensionOptionsArray}
        columns={COLUMN_OPTIONS.TWO}
        tooltipText={tooltipText.inputDimensions}
        value={`${settings.aspectRatioWidth} x ${settings.aspectRatioHeight}`}
        setValue={(x) => handleDimensionOption(x)}
      />
      <p className="text-van-gogh-sm font-light mb-van-gogh-spacing-m">
        {sideBarStrings.advancedControls}
      </p>
      <div className="flex gap-2 mb-van-gogh-spacing-ml">
        <button
          className={`flex justify-center items-center border h-10 min-w-10 rounded-md bg-van-gogh-dark-blue  hover:bg-van-gogh-grey-xd border-van-gogh-grey-blue ${
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
          isDisabled={false}
          align="center"
          headerTheme={false}
        />
      </div>
      <div className="flex items-center gap-van-gogh-spacing-m mb-2">
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
      <div className="flex items-center gap-van-gogh-spacing-m mb-2">
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
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60 mb-van-gogh-spacing-m" />
      <div className="flex gap-2 items-center mb-1">
        <p className="text-van-gogh-md font-semibold">
          {sideBarStrings.guidanceScale}
        </p>
        <Tooltip label={tooltipText.guidanceScale}>
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
        title={sideBarStrings.tiling}
        tooltipText={tooltipText.tiling}
        enabled={settings.tiling}
        toggle={() => setSetting("tiling", !settings.tiling)}
      />
      <Accordion allowToggle>
        <AccordionItem border="none">
          <h2>
            <AccordionButton>
              <Box
                as="div"
                flex="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="0.75rem"
                fontWeight={600}
              >
                {sideBarStrings.showAdvancedSettings}
                <AccordionIcon />
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel p={0}>
            <OptionWithSwitch
              title={sideBarStrings.recommendedSizes}
              tooltipText={tooltipText.recommendedSizes}
              enabled={settings.recommendedSizes}
              toggle={() =>
                setSetting("recommendedSizes", !settings.recommendedSizes)
              }
            />
            <OptionWithSwitch
              title={sideBarStrings.useFixedSeed}
              tooltipText={tooltipText.useFixedSeed}
              enabled={settings.useFixedSeed}
              toggle={() => setSetting("useFixedSeed", !settings.useFixedSeed)}
            />
            <input
              type="number"
              className="input-number appearance-none bg-transparent rounded-md border border-van-gogh-grey-blue hover:border-van-gogh-grey-d focus:border-van-gogh-purple outline-none h-10 w-full min-w-input-width text-van-gogh-sm p-4 mb-4"
              value={settings?.fixedSeed}
              onChange={(e) => setSetting("fixedSeed", e.target.value)}
              maxLength={10}
            />
            <div className="flex gap-2 items-center mb-1">
              <p className="text-van-gogh-md font-semibold">
                {sideBarStrings.scheduler}
              </p>
              <Tooltip label={tooltipText.scheduler}>
                <span>
                  <QuestionMarkIcon />
                </span>
              </Tooltip>
            </div>
            <div className="h-10">
              <DropdownMenu
                value="Leonardo"
                options={[]}
                setValue={() => {}}
                isDisabled={true}
                align="left"
                headerTheme={false}
              />
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <button
        className="flex items-center justify-center gap-1 rounded-md border border-van-gogh-grey-blue hover:border-van-gogh-grey-d text-van-gogh-xs min-h-8 mt-20 mb-4"
        onClick={() => handleReset()}
      >
        <RefreshIcon />
        {sideBarStrings.reset}
      </button>
    </div>
  );
};

export default SideBar;
