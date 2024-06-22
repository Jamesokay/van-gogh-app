// "use client";

import { FC } from "react";
import CoinsIcon from "../../svg/CoinsIcon";

const UpscaleButton: FC<{ disabled: boolean }> = ({ disabled }) => {
  // To-do: API call for upscale
  return (
    <button
      className={`flex justify-center items-center relative h-10 w-full text-van-gogh-sm bg-van-gogh-purple-gradient px-12 rounded-lg transition-all hover:shadow-van-gogh-purple-glow ${
        disabled ? "grayscale opacity-30 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      <p className="font-semibold mr-2">Upscale</p>
      <div className="flex">
        <CoinsIcon white={true} />
        <span>30</span>
      </div>
    </button>
  );
};

export default UpscaleButton;
