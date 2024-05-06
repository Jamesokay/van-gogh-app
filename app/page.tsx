import { sampleGenerationHistoryArray } from "./lib/dataConstants";
import { generationHistoryStrings } from "./lib/stringConstants";
import GenerationHistoryPanel from "./ui/generation-history/GenerationHistoryPanel";

const Page = () => {
  const text = generationHistoryStrings;
  const generationHistory = sampleGenerationHistoryArray;

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
