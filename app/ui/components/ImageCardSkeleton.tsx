import { FC } from "react";
import LeonardoIcon from "../svg/LeonardoIcon";
import { Spinner } from "@chakra-ui/react";

const ImageCardSkeleton: FC<{ elapsedTime?: number }> = ({ elapsedTime }) => {
  return (
    <div className="relative flex w-full h-full">
      <div
        className={
          elapsedTime
            ? "absolute top-4 left-4 z-50 flex flex-col items-center gap-2"
            : "hidden"
        }
      >
        <Spinner w={5} h={5} />
        <span className="text-van-gogh-xs font-medium">{elapsedTime}</span>
      </div>
      <div className="flex justify-center items-center rounded-md w-full h-full z-20 bg-van-gogh-grey-500 grayscale animate-pulse">
        <div className="flex w-40 h-40">
          <LeonardoIcon />
        </div>
      </div>
    </div>
  );
};
export default ImageCardSkeleton;
