import { Tooltip } from "@chakra-ui/react";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import { FC } from "react";

const TitleWithTooltip: FC<{ title: string; tooltip: string }> = ({
  title,
  tooltip,
}) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-van-gogh-sm font-medium">{title}</p>
      <Tooltip label={tooltip}>
        <span>
          <QuestionMarkIcon />
        </span>
      </Tooltip>
    </div>
  );
};

export default TitleWithTooltip;
