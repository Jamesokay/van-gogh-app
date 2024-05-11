import { getGenerationsByUserId, getUserInformation } from "./lib/actions";
import { generationHistoryStrings } from "./lib/stringConstants";
import GenerationHistoryPanel from "./ui/generation-history/GenerationHistoryPanel";
import NewGenerationPanels from "./ui/generation-history/NewGenerationPanels";

const Page = async () => {
  const userDetails = await getUserInformation();
  if (!userDetails) return;
  const history = await getGenerationsByUserId(userDetails.user.id);

  return (
    <div className="flex flex-col pt-9 pb-4 w-full">
      <div
        className={
          history?.length
            ? "hidden"
            : "flex items-center w-full p-4 min-h-16 border border-van-gogh-purple rounded-md"
        }
      >
        {generationHistoryStrings.emptyState}
      </div>
      <NewGenerationPanels />
      {history?.map((generation) => (
        <GenerationHistoryPanel key={generation.id} {...generation} />
      ))}
    </div>
  );
};

export default Page;
