import { FC } from "react";
import DimensionLinkIcon from "../svg/DimensionLinkIcon";

const DimensionDisplay: FC<{ height: number; width: number; }> = ({ height, width }) => {
  return (
    <div className="flex items-center">
      <div className="flex pr-2">
        <div className="flex h-10 w-full relative select-none">
          <p className="h-10 mr-4 flex items-center justify-center text-van-gogh-sm font-medium">
            W
          </p>
          <p className="flex items-center justify-center text-center font-semibold h-full text-van-gogh-xs py-4 mr-2 min-w-8">
            {width}
          </p>
          <p className="h-10 flex items-center justify-center font-medium text-van-gogh-xs">
            px
          </p>
        </div>
      </div>
      <DimensionLinkIcon />
      <div className="flex pl-2">
        <div className="flex h-10 w-full relative select-none">
          <p className="h-10 mr-4 flex items-center justify-center text-van-gogh-sm font-medium">
            H
          </p>
          <p className="flex items-center justify-center text-center font-semibold h-full text-van-gogh-xs py-4 mr-2 min-w-8">
            {height}
          </p>
          <p className="h-10 flex items-center justify-center font-medium text-van-gogh-xs">
            px
          </p>
        </div>
      </div>
    </div>
  );
};

export default DimensionDisplay;
