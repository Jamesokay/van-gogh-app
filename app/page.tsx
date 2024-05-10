import { getGenerationsByUserId } from "./lib/services";
import { generationHistoryStrings } from "./lib/stringConstants";
import GenerationHistoryPanel from "./ui/generation-history/GenerationHistoryPanel";

const Page = async () => {
  const text = generationHistoryStrings;
  const generationHistory = await getGenerationsByUserId('4cf1507b-af9b-476f-8640-4454bd8ef91b');

  return (
    <div className="flex flex-col pt-9 pb-4 w-full">
      <div
        className={
          generationHistory?.length
            ? "hidden"
            : "flex items-center w-full p-4 min-h-16 border border-van-gogh-purple rounded-md"
        }
      >
        {text.emptyState}
      </div>
      {generationHistory?.length && generationHistory?.map((generation) => (
        <GenerationHistoryPanel key={generation.id} {...generation} />
      ))}
    </div>
  );
};

export default Page;
