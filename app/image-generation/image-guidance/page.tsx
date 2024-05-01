"use client";

import ImageGuidanceBanner from "@/app/ui/image-guidance/ImageGuidanceBanner";
import ImageGuidanceCTA from "@/app/ui/image-guidance/ImageGuidanceCTA";
import ImageGuidanceUpload from "@/app/ui/image-guidance/ImageGuidanceUpload";

const Page = () => {
  return (
    <div className="flex flex-col gap-6 pt-9 w-full">
      <ImageGuidanceBanner />
      <div className="grid grid-cols-auto-fit-minmax gap-6">
        <ImageGuidanceUpload />
        <ImageGuidanceCTA />
      </div>
    </div>
  );
};

export default Page;
