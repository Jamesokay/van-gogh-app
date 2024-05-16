"use client";

import { useSettings } from "@/app/context/SettingsContext";
import CoinsIcon from "../svg/CoinsIcon";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import { sideBarStrings } from "@/app/lib/stringConstants";

const TokenHeader = () => {
  const { interfaceState } = useSettings();
  return (
    <div className="flex gap-2 items-center justify-center px-3 py-2 border border-van-gogh-grey-100 rounded-full">
      <div className="flex items-center text-van-gogh-xs">
        <CoinsIcon />
        {interfaceState.tokens}
      </div>
      <QuestionMarkIcon />
      <button className="flex items-center justify-center h-8 py-1 px-4 font-semibold bg-van-gogh-purple-gradient text-van-gogh-xs rounded-full">
        {sideBarStrings.manage}
      </button>
    </div>
  );
};

export default TokenHeader;
