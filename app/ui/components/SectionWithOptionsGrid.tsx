import { FC } from "react";
import { SectionWithOptionsGridProps } from "../image-generation/definitions";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";

const SectionWithOptionsGrid: FC<SectionWithOptionsGridProps> = ({
  title,
  options,
  columns,
  tooltipText,
  value,
  setValue,
}) => {
  return (
    <div className="flex flex-col py-spacing-m">
      <div className="flex gap-2 items-center mb-spacing-m">
        <p className="text-van-gogh-md font-medium">{title}</p>
        {tooltipText && <QuestionMarkIcon />}
      </div>
      <div className={`grid grid-cols-${columns} gap-y-grid-row-gap gap-x-2`}>
        {options.map((option) => (
          <label
            key={option}
            className="relative overflow-hidden cursor-pointer"
            onClick={() => setValue(option)}
          >
            <input className="absolute h-px w-px m-[-1px]" type="radio" />
            <div
              className={`border text-center text-van-gogh-xs py-2 rounded-corners-xs bg-van-gogh-dark-blue hover:border-van-gogh-purple ${
                value === option
                  ? "border-van-gogh-purple"
                  : "border-van-gogh-grey-blue"
              }`}
            >
              {option}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SectionWithOptionsGrid;
