import { getGenerationsByUserId, getUserInformation } from "@/app/lib/actions";
import ImageGuidanceBanner from "@/app/ui/image-guidance/ImageGuidanceBanner";
import ImageGuidanceCTA from "@/app/ui/image-guidance/ImageGuidanceCTA";
import ImageGuidanceUpload from "@/app/ui/image-guidance/ImageGuidanceUpload";

const Page = async () => {
  const userDetails = await getUserInformation();
  if (!userDetails) return null;
  const history = await getGenerationsByUserId(userDetails.user.id);
  if (!history) return null;
  const recentImages = history
    .flatMap((generation) => generation.generated_images || [])
    .map((x) => x.url);

  return (
    <div className="flex flex-col gap-6 py-9 w-full">
      <ImageGuidanceBanner />
      <div className="grid grid-cols-1 sm:grid-cols-van-gogh-auto-fit-minmax-35 gap-6">
        <ImageGuidanceUpload recentImages={recentImages} />
        <ImageGuidanceCTA />
      </div>
    </div>
  );
};

export default Page;
