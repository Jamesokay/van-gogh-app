import Image from "next/image";

const ImageGuidanceCTA = () => {
  return (
    <div className="cta-bg flex flex-col items-center gap-7 rounded-lg p-5">
      <Image
        src="https://app.leonardo.ai/_next/image?url=%2Fimg%2Fcontrolnets%2Fcontrolnet-logo.webp&w=640&q=75"
        width={228}
        height={102}
        alt=""
      />
      <div className="flex flex-col items-center">
        <p className="text-van-gogh-md font-semibold">Add up to 4 layers of</p>
        <p className="van-gogh-gradient-text text-van-gogh-2xl font-semibold">
          Image Guidance
        </p>
      </div>
      <button className="flex items-center w-fit justify-center h-8 py-1 px-2 font-semibold bg-purple-gradient text-van-gogh-xs rounded-md">
        Unlock with Premium
      </button>
    </div>
  );
};

export default ImageGuidanceCTA;
