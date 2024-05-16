import { getGenerationsByUserId, getUserInformation } from "../lib/actions";
import { fillDefaults } from "../lib/helpers";
import { generationHistoryStrings } from "../lib/stringConstants";
import GenerationHistoryPanel from "../ui/ai-generations/GenerationHistoryPanel";
import NewGenerationPanels from "../ui/ai-generations/NewGenerationPanels";

const Page = async () => {
  const userDetails = await getUserInformation();
  if (!userDetails) return null;
  const history = await getGenerationsByUserId(userDetails.user.id);
  const safeHistory = history
    ? history.map((generation) => fillDefaults(generation))
    : [];

  return (
    <div className="flex flex-col pt-9 pb-4 w-full">
      <div
        className={
          history?.length
            ? "hidden"
            : "flex items-center w-full p-4 min-h-16 border border-van-gogh-purple-400 rounded-md"
        }
      >
        {generationHistoryStrings.emptyState}
      </div>
      <NewGenerationPanels />
      {safeHistory?.map((generation) => (
        <GenerationHistoryPanel key={generation.id} {...generation} />
      ))}
    </div>
  );
};

export default Page;
