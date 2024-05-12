"use client";

import OptionWithSwitch from "../../components/OptionWithSwitch";
import {
  COLUMN_OPTIONS,
  GUIDANCE_SCALE_STRENGTH,
} from "../../../lib/definitions";
import { numberOfImagesOptions } from "../../../lib/dataConstants";
import SectionWithOptionsGrid from "../../components/SectionWithOptionsGrid";
import RangeSlider from "../../components/RangeSlider";
import QuestionMarkIcon from "../../svg/QuestionMarkIcon";
import Image from "next/image";
import BackArrowIcon from "../../svg/BackArrowIcon";
import { Tooltip } from "@chakra-ui/react";
import RefreshIcon from "../../svg/RefreshIcon";
import { sideBarStrings, tooltipText } from "@/app/lib/stringConstants";
import { useSettings } from "@/app/context/SettingsContext";
import SideBarSwitchOptions from "./SideBarSwitchOptions";
import SideBarDimensionOptions from "./SideBarDimensionOptions";
import SideBarAdvancedSettings from "./SideBarAdvancedSettings";
import TokenHeader from "../../components/TokenHeader";

const SideBar = () => {
  const {
    generationRequest,
    setKeyOfGenerationRequest,
    handleReset,
    interfaceState,
    setKeyOfInterfaceState,
  } = useSettings();

  return (
    <div
      className={`flex fixed top-0 transition-transform ${
        interfaceState.mobileSideBarExpanded
          ? "translate-x-0"
          : "-translate-x-full md:translate-x-0"
      } md:left-0 h-full max-h-full z-[100] flex-col w-full md:w-van-gogh-sidebar-width bg-grey-400 bg-darkblue-to-darkerblue-gradient px-5 pt-van-gogh-spacing-m overflow-y-auto`}
    >
      <div className="flex flex-col items-center my-5 gap-3.5">
        <div className="flex gap-2 items-center w-full">
          <span className="hidden md:flex text-van-gogh-icon-grey">
            <BackArrowIcon />
          </span>
          <div
            role="button"
            className="flex justify-center items-center border border-van-gogh-border-grey rounded-md w-9 h-9 hover:bg-van-gogh-hover-grey md:hidden"
            onClick={() =>
              setKeyOfInterfaceState("mobileSideBarExpanded", false)
            }
          >
            <BackArrowIcon />
          </div>
          <Image
            src="/leonardo-logo-text-new.svg"
            alt="Leonardo Logo"
            width={117}
            height={34}
          />
        </div>
        <TokenHeader />
      </div>
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <SectionWithOptionsGrid
        title={sideBarStrings.numberOfImages}
        options={numberOfImagesOptions}
        columns={COLUMN_OPTIONS.FOUR}
        value={generationRequest.num_images ? generationRequest.num_images : 4}
        setValue={(x) => setKeyOfGenerationRequest("num_images", x as number)}
      />
      <SideBarSwitchOptions />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60 mb-van-gogh-spacing-ml" />
      <SideBarDimensionOptions />
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
          value={
            generationRequest.guidance_scale
              ? generationRequest.guidance_scale
              : 7
          }
          setValue={(x) => setKeyOfGenerationRequest("guidance_scale", x)}
          min={GUIDANCE_SCALE_STRENGTH.MIN}
          max={GUIDANCE_SCALE_STRENGTH.MAX}
        />
        <div className="flex items-center justify-center font-semibold w-8 text-van-gogh-xs select-none">
          {generationRequest.guidance_scale}
        </div>
      </div>
      <OptionWithSwitch
        title={sideBarStrings.tiling}
        tooltipText={tooltipText.tiling}
        // To-do: need logic for checking these are the required type... maybe remove the null options from definition?
        enabled={generationRequest.tiling}
        toggle={() =>
          setKeyOfGenerationRequest("tiling", !generationRequest.tiling)
        }
      />
      <SideBarAdvancedSettings />
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
