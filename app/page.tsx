import { redirect } from "next/navigation";
import { createClient } from "./utils/supabase/server";

const Page = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth");
  } else {
    redirect("/ai-generations");
  }
};

export default Page;
