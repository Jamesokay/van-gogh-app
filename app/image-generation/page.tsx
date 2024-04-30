import { generationHistoryStrings } from "../lib/stringConstants";

const Page = () => {
  const text = generationHistoryStrings;
  return (
    <div className="flex flex-col pt-9 w-full">
      <div className="flex items-center w-full p-4 min-h-16 border border-van-gogh-purple rounded-md">
        {text.emptyState}
      </div>
    </div>
  );
};

export default Page;
