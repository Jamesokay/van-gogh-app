import LeonardoIcon from "../svg/LeonardoIcon";

const ImageCardSkeleton = () => {
  return (
    <div className="flex justify-center items-center rounded-md w-full h-full z-50 bg-van-gogh-grey-xd grayscale animate-pulse">
      <div className="flex w-40 h-40">
        <LeonardoIcon />
      </div>
    </div>
  );
};
 export default ImageCardSkeleton;
