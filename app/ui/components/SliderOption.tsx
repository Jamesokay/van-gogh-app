import { Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import RangeSlider from "./RangeSlider";
import { SliderOptionProps } from "@/app/lib/definitions";

const SliderOption: FC<SliderOptionProps> = ({
  title,
  tooltipText,
  value,
  setValue,
  min,
  max,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2 items-center mb-1">
        <p className="text-van-gogh-sm font-medium">{title}</p>
        <Tooltip label={tooltipText}>
          <span>
            <QuestionMarkIcon />
          </span>
        </Tooltip>
      </div>
      <div className="flex gap-3 mb-1">
        <RangeSlider
          value={value}
          setValue={(value) => setValue(value)}
          min={min}
          max={max}
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
