import {
  badgeText,
  sideBarStrings,
  tooltipText,
} from "@/app/lib/stringConstants";
import OptionWithSwitch from "../../components/OptionWithSwitch";
import { useSettings } from "@/app/context/SettingsContext";
import { transformDimensions } from "@/app/lib/helpers";

const SideBarSwitchOptions = () => {
  const {
    generationRequest,
    setKeyOfGenerationRequest,
    handlePhotoReal,
    handleAlchemy,
  } = useSettings();
  const outputDimensions = transformDimensions({
    width: generationRequest.width,
    height: generationRequest.height,
  });
  return (
    <>
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.photoReal}
        badgeText={badgeText.v2}
        tooltipText={tooltipText.photoReal}
        enabled={generationRequest.photoReal}
        toggle={() => handlePhotoReal(!generationRequest.photoReal)}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.alchemy}
        badgeText={badgeText.v2}
        tooltipText={tooltipText.alchemy}
        enabled={generationRequest.alchemy}
        toggle={() => handleAlchemy(!generationRequest.alchemy)}
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
        enabled={generationRequest.promptMagic}
        toggle={() =>
          setKeyOfGenerationRequest(
            "promptMagic",
            !generationRequest.promptMagic
          )
        }
        hidden={generationRequest.alchemy}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.transparency}
        badgeText={badgeText.beta}
        tooltipText={tooltipText.transparency}
        enabled={generationRequest.transparency}
        toggle={() => {
          setKeyOfGenerationRequest(
            "transparency",
            !generationRequest.transparency
          );
        }}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.publicImages}
        tooltipText={tooltipText.publicImages}
        enabled={generationRequest.public}
        toggle={() =>
          setKeyOfGenerationRequest("public", !generationRequest.public)
        }
      />
    </>
  );
};

export default SideBarSwitchOptions;
