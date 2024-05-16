import { sideBarStrings, tooltipText } from "@/app/lib/stringConstants";
import SectionWithOptionsGrid from "../../components/SectionWithOptionsGrid";
import {
  AspectRatioKey,
  COLUMN_OPTIONS,
  INPUT_DIMENSIONS,
} from "@/app/lib/definitions";
import { findApproximateAspectRatio } from "@/app/lib/helpers";
import { aspectRatioOptions, dimensionOptions } from "@/app/lib/dataConstants";
import { useSettings } from "@/app/context/SettingsContext";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import DropdownMenu from "../../components/DropdownMenu";
import RangeSlider from "../../components/RangeSlider";
import DimensionInput from "../../components/DimensionInput";

const SideBarDimensionOptions = () => {
  const {
    generationRequest,
    interfaceState,
    handleDimensionOption,
    handleAspectRatioChange,
    handleAspectRatioOptionClick,
    setKeyOfInterfaceState,
  } = useSettings();

  const aspectRatioValue = findApproximateAspectRatio({
    width: generationRequest.width,
    height: generationRequest.height,
  });
  const dimensionOptionsArray = generationRequest.alchemy
    ? dimensionOptions.alchemy
    : dimensionOptions.default;

  return (
    <>
      <SectionWithOptionsGrid
        title={sideBarStrings.inputDimensions}
        options={dimensionOptionsArray}
        columns={COLUMN_OPTIONS.TWO}
        tooltipText={tooltipText.inputDimensions}
        value={`${generationRequest.width} x ${generationRequest.height}`}
        setValue={(x) => handleDimensionOption(x as string)}
      />
      <p className="text-van-gogh-sm font-light mb-van-gogh-spacing-m">
        {sideBarStrings.advancedControls}
      </p>
      <div className="flex gap-2 mb-van-gogh-spacing-ml">
        <button
          className={`flex justify-center items-center border h-10 min-w-10 rounded-md bg-van-gogh-blue-500  hover:bg-van-gogh-grey-500 border-van-gogh-grey-800 ${
            interfaceState.aspectRatioLocked ? "border-van-gogh-purple-400" : ""
          }`}
          onClick={() => setKeyOfInterfaceState('aspectRatioLocked', !interfaceState.aspectRatioLocked)}
        >
          <LockIcon display={interfaceState.aspectRatioLocked ? "flex" : "none"} />
          <UnlockIcon display={interfaceState.aspectRatioLocked ? "none" : "flex"} />
        </button>
        <DropdownMenu
          value={aspectRatioValue}
          options={aspectRatioOptions}
          setValue={(x) => handleAspectRatioOptionClick(x as AspectRatioKey)}
          isDisabled={false}
          headerTheme={false}
          large={false}
        />
      </div>
      <div className="flex items-center gap-van-gogh-spacing-m mb-2">
        <RangeSlider
          value={generationRequest.width}
          setValue={(x) =>
            handleAspectRatioChange('width', x)
          }
          max={INPUT_DIMENSIONS.MAX}
          min={INPUT_DIMENSIONS.MIN}
        />
        <DimensionInput
          dimension="W"
          value={generationRequest.width}
          setValue={(x) =>
            handleAspectRatioChange('width', x)
          }
          max={INPUT_DIMENSIONS.MAX}
          min={INPUT_DIMENSIONS.MIN}
          unit="px"
        />
      </div>
      <div className="flex items-center gap-van-gogh-spacing-m mb-2">
        <RangeSlider
          value={generationRequest.height}
          setValue={(x) =>
            handleAspectRatioChange('height', x)
          }
          max={INPUT_DIMENSIONS.MAX}
          min={INPUT_DIMENSIONS.MIN}
        />
        <DimensionInput
          dimension="H"
          value={generationRequest.height}
          setValue={(x) =>
            handleAspectRatioChange('height', x)
          }
          max={INPUT_DIMENSIONS.MAX}
          min={INPUT_DIMENSIONS.MIN}
          unit="px"
        />
      </div>
    </>
  );
};

export default SideBarDimensionOptions;
