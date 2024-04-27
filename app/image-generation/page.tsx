import { SettingsProvider } from "../context/SettingsContext";
import GenerationOptions from "../ui/image-generation/GenerationOptions";
import ImageGenerationHeader from "../ui/image-generation/ImageGenerationHeader";
import SideBar from "../ui/image-generation/SideBar";

const Page = () => {
  return (
    <SettingsProvider>
      <main className="flex min-h-screen">
        <SideBar />
        <div className="flex flex-col w-full">
          <ImageGenerationHeader />
          <GenerationOptions />
        </div>
      </main>
    </SettingsProvider>
  );
}

export default Page;
