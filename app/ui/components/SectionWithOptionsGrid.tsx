import { FC } from "react"
import { SectionWithOptionsGridProps } from "../image-generation/definitions"
import { useSettings } from "@/app/context/SettingsContext";

const SectionWithOptionsGrid:FC<SectionWithOptionsGridProps> = ({ title, optionName, options, columns }) => {
    const { settings, setSetting } = useSettings();
    const selected = settings[optionName]
    return (
        <div className="flex flex-col py-spacing-m">
        <span className="text-van-gogh-md font-medium mb-spacing-m">
          {title}
        </span>
        <div className={`grid grid-cols-${columns} gap-y-grid-row-gap gap-x-2`}>
          {options.map((option) => (
            <label key={option} className="relative overflow-hidden cursor-pointer" onClick={() => setSetting(optionName, option)}>
              <input className="absolute h-px w-px m-[-1px]" type="radio" />
              <div className={`border text-center text-van-gogh-xs py-2 rounded-corners-xs ${selected === option ? 'border-van-gogh-purple' : 'border-van-gogh-grey-blue'}`}>
                {option}
              </div>
            </label>
          ))}
        </div>
      </div>
    )
}

export default SectionWithOptionsGrid;