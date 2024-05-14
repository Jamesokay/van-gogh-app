import { FC } from "react";

const InitialRenderSkeleton: FC<{ hidden: boolean; landscape: boolean }> = ({
  hidden,
  landscape,
}) => {
  return (
    <div
      className={
        hidden
          ? "hidden"
          : `grid grid-cols-1 ${
              !landscape
                ? "lg:grid-cols-auto-fit-minmax-16"
                : "lg:grid-cols-auto-fit-minmax-24"
            } gap-4`
      }
    >
      <div
        className={`relative rounded-md ${
          !landscape ? "pb-[133.33%]" : "pb-[66.66%]"
        } w-full bg-van-gogh-grey-xd grayscale`}
      />
      <div
        className={`relative rounded-md ${
          !landscape ? "pb-[133.33%]" : "pb-[66.66%]"
        } w-full bg-van-gogh-grey-xd grayscale`}
      />
      <div
        className={`relative rounded-md ${
          !landscape ? "pb-[133.33%]" : "pb-[66.66%]"
        } w-full bg-van-gogh-grey-xd grayscale`}
      />
      <div
        className={`relative rounded-md ${
          !landscape ? "pb-[133.33%]" : "pb-[66.66%]"
        } w-full bg-van-gogh-grey-xd grayscale`}
      />
    </div>
  );
};

export default InitialRenderSkeleton;
