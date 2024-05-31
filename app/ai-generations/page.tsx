import { fetchGenerationsByUserId } from "../lib/actions";
import { fillDefaults } from "../lib/helpers";
import { generationHistoryStrings } from "../lib/stringConstants";
import GenerationHistoryPanel from "../ui/ai-generations/GenerationHistoryPanel";
import NewGenerationPanels from "../ui/ai-generations/NewGenerationPanels";
import { createServerClient } from "../utils/supabase/server";

const Page = async () => {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const history = await fetchGenerationsByUserId(user.id);
  if (!history) return null;
  const safeHistory = history.map((generation) => fillDefaults(generation));

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
