import { Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import RangeSlider from "./RangeSlider";
import { SliderOptionProps } from "@/app/lib/definitions";
import TitleWithTooltip from "../svg/TitleWithTooltip";

const SliderOption: FC<SliderOptionProps> = ({
  title,
  tooltipText,
  value,
  setValue,
  min,
  max,
  disabled,
  enhanceGranularity = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <TitleWithTooltip title={title} tooltip={tooltipText} />
      <div
        className={`flex gap-3 my-1 transition-all ${
          disabled ? "opacity-50" : "opacity-100"
        }`}
      >
        <RangeSlider
          value={enhanceGranularity ? value * 10 : value}
          setValue={(value) => {
            if (disabled) return;
            if (enhanceGranularity)
              setValue(parseFloat((value / 10).toFixed(1)));
            else setValue(value);
          }}
          min={enhanceGranularity ? min * 10 : min}
          max={enhanceGranularity ? max * 10 : max}
          purple
        />
        <div className="flex items-center justify-center font-semibold w-8 text-van-gogh-xs select-none">
          {value}
        </div>
      </div>
    </div>
  );
};

export default SliderOption;
