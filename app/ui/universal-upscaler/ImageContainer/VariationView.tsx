import { FC } from "react";
import TransformContainer from "./TransformContainer";
import { UpscaledImage } from "@/app/lib/definitions";

const VariationView:FC<{ image: UpscaledImage | null }> = ({ image }) => {
  return (
    <TransformContainer>
      <div className="flex h-full">
        <img
          src={image?.upscaledImage?.url}
          alt=""
          className="h-full w-auto object-contain"
          style={{ maxHeight: "calc(-9.792rem + 100dvh)" }}
        />
      </div>
    </TransformContainer>
  );
};

export default VariationView;
