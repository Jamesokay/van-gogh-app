import { fetchImageGenerations } from "./lib/services";
import { generationHistoryStrings } from "./lib/stringConstants";
import GenerationHistoryPanel from "./ui/generation-history/GenerationHistoryPanel";

const Page = async () => {
  const text = generationHistoryStrings;
  const generationHistory = await fetchImageGenerations('76b7484a-9319-477c-ae3d-d2b297c31a9c');

  return (
    <div className="flex flex-col pt-9 pb-4 w-full">
      <div
        className={
          generationHistory.length
            ? "hidden"
            : "flex items-center w-full p-4 min-h-16 border border-van-gogh-purple rounded-md"
        }
      >
        {text.emptyState}
      </div>
      {generationHistory?.map((generation) => (
        <GenerationHistoryPanel key={generation.id} {...generation} />
      ))}
    </div>
  );
};

export default Page;
