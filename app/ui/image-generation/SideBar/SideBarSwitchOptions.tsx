import {
  badgeText,
  sideBarStrings,
  tooltipText,
} from "@/app/lib/stringConstants";
import OptionWithSwitch from "../../components/OptionWithSwitch";
import { useSettings } from "@/app/context/SettingsContext";
import { transformDimensions } from "@/app/lib/helpers";
import { SETTINGS_KEY } from "@/app/lib/definitions";

const SideBarSwitchOptions = () => {
  const { settings, setSetting, handlePhotoReal, handleAlchemy } = useSettings();
  const outputDimensions = transformDimensions({
    width: settings.aspectRatioWidth,
    height: settings.aspectRatioHeight,
  });
  return (
    <>
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
        toggle={() =>
          setSetting(SETTINGS_KEY.PROMPT_MAGIC, !settings.promptMagic)
        }
        hidden={settings.alchemy}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.transparency}
        badgeText={badgeText.beta}
        tooltipText={tooltipText.transparency}
        enabled={settings.transparency}
        toggle={() =>
          setSetting(SETTINGS_KEY.TRANSPARENCY, !settings.transparency)
        }
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.publicImages}
        tooltipText={tooltipText.publicImages}
        enabled={settings.publicImages}
        toggle={() =>
          setSetting(SETTINGS_KEY.PUBLIC_IMAGES, !settings.publicImages)
        }
      />
    </>
  );
};

export default SideBarSwitchOptions;
