"use client";

import { useSettings } from "@/app/context/SettingsContext";
import OptionWithSwitch from "../components/OptionWithSwitch";
import {
  BADGE_TEXT,
  COLUMN_OPTIONS,
  dimensionOptions,
  numberOfImagesOptions,
  OPTION_TITLE,
  SECTION_TITLE,
  TOOLTIP_TEXT,
} from "./definitions";
import SectionWithOptionsGrid from "../components/SectionWithOptionsGrid";
import RangeSlider from "../components/RangeSlider";

export default function SideBar() {
  const { settings, setSetting } = useSettings();

  return (
    <div className="flex flex-col w-sidebar-width bg-grey-400 bg-darkblue-to-darkerblue-gradient p-5">
      <div className="flex">VanGogh.Ai</div>
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <SectionWithOptionsGrid
        title={SECTION_TITLE.NUMBER_OF_IMAGES}
        optionName="numberOfImages"
        options={numberOfImagesOptions}
        columns={COLUMN_OPTIONS.FOUR}
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
        optionName="inputDimensions"
        options={dimensionOptions}
        columns={COLUMN_OPTIONS.TWO}
      />
      <RangeSlider value={settings.aspectRatioHeight} setValue={(x) => setSetting("aspectRatioHeight", x)} max={1536} />
      <RangeSlider value={settings.aspectRatioWidth} setValue={(x) => setSetting("aspectRatioWidth", x)} max={1536} />
    </div>
  );
}
