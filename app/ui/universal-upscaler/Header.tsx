"use client";

import { signOut } from "@/app/lib/actions";
import BackArrowIcon from "../svg/BackArrowIcon";
import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky flex items-center justify-between top-0 left-0 z-50 bg-van-gogh-header-gradient px-3 py-1.5 w-full border border-bottom border-van-gogh-border-dark-blue">
      <div className="flex items-center gap-2">
        <div
          role="button"
          className="hidden md:flex text-van-gogh-icon-grey-900 hover:text-van-gogh-white-opal-900"
          onClick={() => signOut()}
        >
          <BackArrowIcon />
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/leonardo-logo-small.webp"
            alt="Leonardo logo"
            height={32.5}
            width={32.5}
          />
          <p className="font-medium text-van-gogh-lg">
            Leonardo.<span className="van-gogh-gradient-text">Ai</span>
          </p>
        </div>
      </div>
      <div className="flex text-van-gogh-lg">
        <p className="font-medium">
          Universal <span className="van-gogh-gradient-text">Upscaler</span>
        </p>
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Header;
