import {
  badgeText,
  sideBarStrings,
  tooltipText,
} from "@/app/lib/stringConstants";
import OptionWithSwitch from "../../components/OptionWithSwitch";
import { useSettings } from "@/app/context/SettingsContext";
import { transformDimensions } from "@/app/lib/helpers";
import { alchemyModels, photoRealModels } from "@/app/lib/dataConstants";
import AlchemyIcon from "../../svg/AlchemyIcon";
import PhotoRealIcon from "../../svg/PhotoRealIcon";

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
  const photoRealModel = photoRealModels.includes(generationRequest.modelId);
  const alchemyModel = alchemyModels.includes(generationRequest.modelId);
  return (
    <>
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-800 opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.photoReal}
        badgeText={badgeText.v2}
        tooltipText={tooltipText.photoReal}
        enabled={photoRealModel && generationRequest.photoReal}
        toggle={() =>
          photoRealModel && handlePhotoReal(!generationRequest.photoReal)
        }
        icon={<PhotoRealIcon id="sideBar" />}
      />
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-800 opacity-60" />
      <OptionWithSwitch
        title={sideBarStrings.alchemy}
        badgeText={badgeText.v2}
        tooltipText={tooltipText.alchemy}
        enabled={alchemyModel && generationRequest.alchemy}
        toggle={() => alchemyModel && handleAlchemy(!generationRequest.alchemy)}
        icon={<AlchemyIcon />}
      />
      <div
        className={
          generationRequest.alchemy
            ? "flex justify-between border text-center text-van-gogh-xs py-2 pr-2 pl-2.5 rounded-md bg-van-gogh-blue-500 border-van-gogh-grey-800 mb-2"
            : "hidden"
        }
      >
        <span className="text-van-gogh-grey-700">
          {sideBarStrings.outputResolution}
        </span>
        <span>{`${outputDimensions.width} x ${outputDimensions.height}`}</span>
      </div>
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-800 opacity-60" />
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
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-800 opacity-60" />
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
      <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-800 opacity-60" />
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
