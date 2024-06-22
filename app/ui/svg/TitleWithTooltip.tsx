import { Tooltip } from "@chakra-ui/react";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import { FC } from "react";

const TitleWithTooltip: FC<{
  title: string;
  tooltip: string;
  large?: boolean;
}> = ({ title, tooltip, large = false }) => {
  return (
    <div className="flex items-center gap-2">
      <p className={large ? "font-semibold" : "text-van-gogh-sm font-medium"}>
        {title}
      </p>
      <Tooltip label={tooltip} placement="right-end">
        <span>
          <QuestionMarkIcon />
        </span>
      </Tooltip>
    </div>
  );
};

export default TitleWithTooltip;
