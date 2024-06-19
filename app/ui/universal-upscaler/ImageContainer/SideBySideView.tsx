import { FC } from "react";
import TransformContainer from "./TransformContainer";
import { UpscaledImage } from "@/app/lib/definitions";

const SideBySideView: FC<{ image: UpscaledImage | null }> = ({ image }) => {
  return (
    <TransformContainer>
      <div className="flex gap-1.5">
        <div className="flex h-full">
          <img
            src={image?.sourceImage?.url}
            alt=""
            className="h-full w-auto object-contain"
            style={{ maxHeight: "calc(-9.792rem + 100dvh)" }}
          />
        </div>
        <div className="flex h-full">
          <img
            src={image?.upscaledImage?.url}
            alt=""
            className="h-full w-auto object-contain"
            style={{ maxHeight: "calc(-9.792rem + 100dvh)" }}
          />
        </div>
      </div>
    </TransformContainer>
  );
};

export default SideBySideView;
