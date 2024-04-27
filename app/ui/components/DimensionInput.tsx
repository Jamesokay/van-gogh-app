import { DimensionInputProps } from "@/app/lib/definitions";
import { FC } from "react";

const DimensionInput: FC<DimensionInputProps> = ({
  dimension,
  value,
  setValue,
  max,
  min,
  unit,
}) => {

  const resetToValueInRange = () => {
    if (value >= min && value <= max) return;
    if (value < min) setValue(min);
    else setValue(max);
  };

  return (
    <div className="flex">
      <div className="h-10 w-full relative select-none">
        <div className="absolute left-0 top-0 h-10 w-10 flex items-center justify-center text-van-gogh-sm">
          {dimension}
        </div>
        <input
          className="input-number appearance-none bg-transparent rounded-corners-xs border border-thin border-transparent focus:border-van-gogh-purple outline-none text-center h-full w-full min-w-input-width text-van-gogh-sm py-4 px-8"
          type="number"
          max={max}
          min={min}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          onBlur={resetToValueInRange}
        />
        <div className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center text-van-gogh-xs text-van-gogh-grey-m">
          {unit}
        </div>
      </div>
    </div>
  );
};

export default DimensionInput;
