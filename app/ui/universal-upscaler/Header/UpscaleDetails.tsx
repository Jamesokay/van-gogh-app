"use client";

import { useUpscaler } from "@/app/context/UpscalerContext";
import { LeonardoUpscalerStyle } from "@/app/lib/definitions";
import { convertUpscalerStyleToString } from "@/app/lib/helpers";

const UpscaleDetails = () => {
  const { selectedUpscaleHistoryItem } = useUpscaler();
  const details = [
    {
      name: "Creativity Strength",
      value: selectedUpscaleHistoryItem?.details?.creativityStrength || "",
    },
    {
      name: "Upscale Multiplier",
      value: selectedUpscaleHistoryItem?.details?.upscaleMultiplier || "",
    },
    {
      name: "Dimensions",
      value: `${selectedUpscaleHistoryItem?.upscaledImage?.width} x ${selectedUpscaleHistoryItem?.upscaledImage?.height}`,
    },
    {
      name: "Upscaler Styler",
      value: convertUpscalerStyleToString(
        selectedUpscaleHistoryItem?.details
          ?.upscalerStyle as LeonardoUpscalerStyle
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-2.5 w-80 text-van-gogh-sm px-4 py-2.5 border-w-[1px] border-van-gogh-grey-100 bg-van-gogh-outline-button-grey rounded-md">
      {details.map((detail) => (
        <div key={detail.name} className="flex justify-between">
          <span className="font-medium">{detail.name}</span>
          <span className="px-2.5 py-1 rounded-md bg-van-gogh-grey-400 text-van-gogh-grey-700 text-van-gogh-xs">
            {detail.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UpscaleDetails;
