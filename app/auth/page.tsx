"use client";

import { useEffect, useState } from "react";
import { HeroImage } from "../lib/definitions";
import AuthPanel from "../ui/auth/AuthPanel";
import { heroImagesArray } from "../lib/dataConstants";

const Page = () => {
  const [heroImage, setHeroImage] = useState<HeroImage | null>(null);

  useEffect(() => {
    function getRandomImage(arr: HeroImage[]): HeroImage {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    const image = getRandomImage(heroImagesArray);
    setHeroImage(image);
  }, []);

  return (
    <div className="bg-black">
      <img
        decoding="async"
        loading="lazy"
        width="4096"
        height="2304"
        src={heroImage?.src}
        className={`absolute transition-all duration-300 ${
          heroImage?.src ? "opacity-25" : "opacity-0"
        }`}
        alt={heroImage?.title}
      />
      <div className="flex relative min-h-screen p-14 md:p-20">
        <div className="flex w-full rounded-[12px] overflow-hidden">
          <AuthPanel />
          <div className="w-full flex relative justify-end items-end">
            <img
              decoding="async"
              width="4096"
              height="2304"
              src={heroImage?.src}
              alt={heroImage?.title}
              className={`absolute w-full h-full object-cover transition-all duration-300 ${
                heroImage?.src ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              className={`relative bg-van-gogh-black-opal-300 text-van-gogh-xs lg:text-van-gogh-sm py-3.5 px-4 mb-[7.5px] mr-[7.5px] rounded-[48px] font-light select-none transition-all ${
                heroImage?.title ? "opacity-100" : "opacity-0"
              }`}
            >
              {`'${heroImage?.title}' by `}
              <span className="van-gogh-gradient-text">
                {heroImage?.creator}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
