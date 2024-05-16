import React, { FC } from "react";
import { OptionWithSwitchProps } from "../../lib/definitions";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import { Tooltip } from "@chakra-ui/react";
import Switch from "./Switch";

const OptionWithSwitch: FC<OptionWithSwitchProps> = ({
  title,
  badgeText,
  tooltipText,
  enabled,
  toggle,
  hidden = false,
  icon = null
}) => {
  const handleToggle = () => {
    toggle(!enabled);
  };

  return (
    <div
      className={
        hidden ? "hidden" : "flex items-center gap-2 py-van-gogh-spacing-m"
      }
    >
      <span className="text-van-gogh-md font-semibold">{title}</span>
      {badgeText && (
        <div className="flex items-center bg-van-gogh-purple-gradient text-van-gogh-2xs py-van-gogh-spacing-1px px-van-gogh-spacing-xs rounded-md">
          {badgeText}
        </div>
      )}
      {icon && icon}
      <Tooltip label={tooltipText}>
        <span>
          <QuestionMarkIcon />
        </span>
      </Tooltip>
      <Switch enabled={enabled} handleToggle={handleToggle} />
    </div>
  );
};

export default OptionWithSwitch;
