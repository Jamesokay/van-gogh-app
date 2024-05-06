import { SettingsProvider } from "../context/SettingsContext";
import ImageGenerationHeader from "../ui/image-generation/ImageGenerationHeader";
import SideBar from "../ui/image-generation/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SettingsProvider>
      <main className="grid grid-cols-main-page-grid h-full">
        <SideBar />
        <div className="flex flex-col flex-1 w-full pl-[17rem]">
          <ImageGenerationHeader />
          <div className="flex w-full border-t border-van-gogh-grey-2xd px-8">
            {children}
          </div>
        </div>
      </main>
    </SettingsProvider>
  );
};

export default Layout;
