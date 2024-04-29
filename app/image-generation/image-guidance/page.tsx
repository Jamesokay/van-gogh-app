"use client";

import DropdownMenu from "@/app/ui/components/DropdownMenu";
import Switch from "@/app/ui/components/Switch";
import UploadIcon from "@/app/ui/svg/UploadIcon";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col gap-6 pt-9 w-full">
      <div className="flex w-full overflow-hidden p-[1px] rounded-md min-h-16 bg-pink-gradient">
        <div className="flex bg-black rounded-md items-center w-full font-medium text-van-gogh-sm">
          <Image
            src="/leonardo-wizard.webp"
            height={45}
            width={45}
            className="min-h-[45px]"
            alt="An image of a wizard"
          />
          Leverage&nbsp;
          <span className="van-gogh-gradient-text">images & photos</span>&nbsp;
          to guide your generations. Upload an image to get started.
        </div>
      </div>
      <div className="grid grid-cols-auto-fit-minmax gap-6">
        <div className="flex flex-col h-full bg-van-gogh-dark-blue-alt rounded-lg">
          <div className="flex justify-between py-3.5 px-4">
            <div className="flex gap-3.5 text-van-gogh-sm">
              <div className="flex items-center justify-center w-5 h-5 bg-van-gogh-dark-blue rounded-md text-van-gogh-3xs">
                1
              </div>
              <p className="font-medium">Image Input</p>
            </div>
            <Switch enabled={false} handleToggle={() => {}} />
          </div>
          <div className="flex flex-col gap-1.5 py-2.5 px-4">
            <p className="text-van-gogh-xs font-medium">
              Add an image to get started
            </p>
            <button className="flex flex-col items-center justify-center gap-2.5 px-2 py-4 bg-van-gogh-dark-blue border border-van-gogh-grey-blue rounded-lg">
              <UploadIcon />
              <p className="text-van-gogh-sm font-medium">
                Add an image to get started
              </p>
              <p className="text-van-gogh-xs text-van-gogh-text-grey">
                PNG, JPG or WEBP up to 5MB
              </p>
            </button>
            <div className="h-10 w-full">
              <DropdownMenu
                options={[""]}
                value={"Select from Recent Images"}
                setValue={() => {}}
                isDisabled={false}
                align="left"
                headerTheme={false}
              />
            </div>
          </div>
        </div>
        <div className="empty-selections-bg flex justify-center">
          <div className="cta-bg flex flex-col items-center gap-7 rounded-lg p-5">
            <Image
              src="https://app.leonardo.ai/_next/image?url=%2Fimg%2Fcontrolnets%2Fcontrolnet-logo.webp&w=640&q=75"
              width={228}
              height={102}
              alt=""
            />
            <div className="flex flex-col items-center">
              <p className="text-van-gogh-md font-semibold">
                Add up to 4 layers of
              </p>
              <p className="van-gogh-gradient-text text-van-gogh-2xl font-semibold">
                Image Guidance
              </p>
            </div>
            <button className="flex items-center w-fit justify-center h-8 py-1 px-2 font-semibold bg-purple-gradient text-van-gogh-xs rounded-md">
              Unlock with Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
