import ImageGuidanceBanner from "@/app/ui/image-guidance/ImageGuidanceBanner";
import ImageGuidanceCTA from "@/app/ui/image-guidance/ImageGuidanceCTA";
import ImageGuidanceUpload from "@/app/ui/image-guidance/ImageGuidanceUpload";

const Page = async () => {
  return (
    <div className="flex flex-col gap-6 py-9 w-full">
      <ImageGuidanceBanner />
      <div className="grid grid-cols-1 sm:grid-cols-van-gogh-auto-fit-minmax-35 gap-6">
        <ImageGuidanceUpload />
        <ImageGuidanceCTA />
      </div>
    </div>
  );
};

export default Page;
