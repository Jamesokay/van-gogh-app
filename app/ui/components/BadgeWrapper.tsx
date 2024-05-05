import { BadgeWrapperProps } from "@/app/lib/definitions";
import { FC } from "react";

const BadgeWrapper: FC<BadgeWrapperProps> = ({ children, label }) => {
  return (
    <div className="relative">
      <div className="absolute top-px left-1/2 transform -translate-x-1/2 z-10 w-fit flex justify-center bg-purple-gradient text-van-gogh-5xs font-medium px-1.5 py-0.25 text-white rounded-full">
        {label}
      </div>
      {children}
    </div>
  );
};

export default BadgeWrapper;
