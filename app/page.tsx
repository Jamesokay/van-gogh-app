import { getGenerationsByUserId, getUserInformation } from "./lib/actions";
import { generationHistoryStrings } from "./lib/stringConstants";
import GenerationHistoryPanel from "./ui/generation-history/GenerationHistoryPanel";
import NewGenerationPanel from "./ui/generation-history/NewGenerationPanel";

const Page = async () => {
  const userDetails = await getUserInformation();
  if (!userDetails) return;
  const generationHistory = await getGenerationsByUserId(userDetails.user.id);

  return (
    <div className="flex flex-col pt-9 pb-4 w-full">
      <div
        className={
          generationHistory?.length
            ? "hidden"
            : "flex items-center w-full p-4 min-h-16 border border-van-gogh-purple rounded-md"
        }
      >
        {generationHistoryStrings.emptyState}
      </div>
      <NewGenerationPanel />
      {generationHistory?.map((generation) => (
        <GenerationHistoryPanel key={generation.id} {...generation} />
      ))}
    </div>
  );
};

export default Page;
