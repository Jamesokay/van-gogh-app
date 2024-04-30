import Image from "next/image";

const ImageGuidanceBanner = () => {
  return (
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
        <span className="van-gogh-gradient-text">images & photos</span>&nbsp; to
        guide your generations. Upload an image to get started.
      </div>
    </div>
  );
};

export default ImageGuidanceBanner;
