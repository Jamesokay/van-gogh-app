import { FC } from "react";
import LeonardoIcon from "../svg/LeonardoIcon";

const ImageCardSkeleton: FC<{ elapsedTime?: number }> = ({ elapsedTime }) => {
  return (
    <div className="james relative flex justify-center items-center rounded-md w-full h-full z-50 bg-van-gogh-grey-xd grayscale animate-pulse">
      <p className={elapsedTime ? "absolute top-4 right-4 font-medium" : "hidden"}>{elapsedTime}</p>
      <div className="flex w-40 h-40">
        <LeonardoIcon />
      </div>
    </div>
  );
};
export default ImageCardSkeleton;
