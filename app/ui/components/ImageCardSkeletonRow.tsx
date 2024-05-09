import { FC } from "react";

const ImageCardSkeletonRow: FC<{ hidden: boolean }> = ({ hidden }) => {
  return (
    <div
      className={
        hidden
          ? "hidden"
          : "grid grid-cols-1 lg:grid-cols-auto-fit-minmax-16 gap-4"
      }
    >
      <div className="relative pb-[133.33%] w-full bg-van-gogh-grey-xd grayscale" />
      <div className="relative pb-[133.33%] w-full bg-van-gogh-grey-xd grayscale" />
      <div className="relative pb-[133.33%] w-full bg-van-gogh-grey-xd grayscale" />
      <div className="relative pb-[133.33%] w-full bg-van-gogh-grey-xd grayscale" />
    </div>
  );
};

export default ImageCardSkeletonRow;
