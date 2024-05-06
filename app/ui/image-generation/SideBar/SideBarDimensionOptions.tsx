import { sideBarStrings, tooltipText } from "@/app/lib/stringConstants";
import SectionWithOptionsGrid from "../../components/SectionWithOptionsGrid";
import {
  AspectRatioKey,
  COLUMN_OPTIONS,
  INPUT_DIMENSIONS,
  SETTINGS_KEY,
} from "@/app/lib/definitions";
import { findApproximateAspectRatio } from "@/app/lib/actions";
import { aspectRatioOptions, dimensionOptions } from "@/app/lib/dataConstants";
import { useSettings } from "@/app/context/SettingsContext";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import DropdownMenu from "../../components/DropdownMenu";
import RangeSlider from "../../components/RangeSlider";
import DimensionInput from "../../components/DimensionInput";

const SideBarDimensionOptions = () => {
  const {
    settings,
    aspectRatioLocked,
    handleDimensionOption,
    handleAspectRatioChange,
    handleAspectRatioOptionClick,
    setAspectRatioLocked,
  } = useSettings();

  const aspectRatioValue = findApproximateAspectRatio({
    width: settings.aspectRatioWidth,
    height: settings.aspectRatioHeight,
  });
  const dimensionOptionsArray = settings.alchemy
    ? dimensionOptions.alchemy
    : dimensionOptions.default;

  return (
    <>
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
          headerTheme={false}
          large={false}
        />
      </div>
      <div className="flex items-center gap-van-gogh-spacing-m mb-2">
        <RangeSlider
          value={settings.aspectRatioWidth}
          setValue={(x) =>
            handleAspectRatioChange(SETTINGS_KEY.ASPECT_RATIO_WIDTH, x)
          }
          max={INPUT_DIMENSIONS.MAX}
          min={INPUT_DIMENSIONS.MIN}
        />
        <DimensionInput
          dimension="W"
          value={settings.aspectRatioWidth}
          setValue={(x) =>
            handleAspectRatioChange(SETTINGS_KEY.ASPECT_RATIO_WIDTH, x)
          }
          max={INPUT_DIMENSIONS.MAX}
          min={INPUT_DIMENSIONS.MIN}
          unit="px"
        />
      </div>
      <div className="flex items-center gap-van-gogh-spacing-m mb-2">
        <RangeSlider
          value={settings.aspectRatioHeight}
          setValue={(x) =>
            handleAspectRatioChange(SETTINGS_KEY.ASPECT_RATIO_HEIGHT, x)
          }
          max={INPUT_DIMENSIONS.MAX}
          min={INPUT_DIMENSIONS.MIN}
        />
        <DimensionInput
          dimension="H"
          value={settings.aspectRatioHeight}
          setValue={(x) =>
            handleAspectRatioChange(SETTINGS_KEY.ASPECT_RATIO_HEIGHT, x)
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
