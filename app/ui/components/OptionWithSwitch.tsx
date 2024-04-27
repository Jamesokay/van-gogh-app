import React, { FC } from "react";
import { OptionWithSwitchProps } from "../image-generation/definitions";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import { Tooltip } from "@chakra-ui/react";

const OptionWithSwitch: FC<OptionWithSwitchProps> = ({
  title,
  badgeText,
  tooltipText,
  enabled,
  toggle,
  hidden = false
}) => {
  const handleToggle = () => {
    toggle(!enabled);
  };

  return (
    <div className={hidden ? "hidden" : "flex items-center gap-2 py-spacing-m"}>
      <span className="text-van-gogh-md font-semibold">{title}</span>
      {badgeText && (
        <div className="flex items-center bg-purple-gradient text-van-gogh-2xs py-spacing-1px px-spacing-xs rounded-corners-s">
          {badgeText}
        </div>
      )}
      <Tooltip label={tooltipText}>
        <span>
          <QuestionMarkIcon />
        </span>
      </Tooltip>
      <div
        role="checkbox"
        aria-checked={enabled}
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={(e) => e.key === "Enter" && handleToggle()}
        className={`${
          enabled ? "bg-purple-gradient" : "bg-van-gogh-grey-d"
        } ml-auto relative inline-flex items-center h-6 rounded-full w-switch-track-width cursor-pointer transition-colors focus:outline-none`}
      >
        <span
          className={`${
            enabled
              ? "translate-x-switch-track-x-enable"
              : "translate-x-switch-track-x-disable"
          } inline-block w-switch-track-height h-switch-track-height transform bg-white rounded-full transition-transform`}
        />
      </div>
    </div>
  );
};

export default OptionWithSwitch;
