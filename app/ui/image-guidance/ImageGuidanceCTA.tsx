import { imageGuidanceStrings } from "@/app/lib/stringConstants";
import Image from "next/image";

const ImageGuidanceCTA = () => {
  const text = imageGuidanceStrings.CTAStrings;
  return (
    <div className="empty-selections-bg flex justify-center">
      <div className="cta-bg flex flex-col items-center gap-7 rounded-lg p-5">
        <Image
          src="https://app.leonardo.ai/_next/image?url=%2Fimg%2Fcontrolnets%2Fcontrolnet-logo.webp&w=640&q=75"
          width={228}
          height={102}
          alt=""
        />
        <div className="flex flex-col items-center">
          <p className="text-van-gogh-md font-semibold">{text.fourLayers}</p>
          <p className="van-gogh-gradient-text text-van-gogh-2xl font-semibold">
            {text.imageGuidance}
          </p>
        </div>
        <button className="flex items-center w-fit justify-center h-8 py-1 px-2 font-semibold bg-van-gogh-purple-gradient text-van-gogh-xs rounded-md">
          {text.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImageGuidanceCTA;
