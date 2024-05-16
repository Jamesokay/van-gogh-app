import { SettingsProvider } from "../context/SettingsContext";
import { Providers } from "../providers";
import ImageGenerationHeader from "../ui/image-generation/ImageGenerationHeader";
import SideBar from "../ui/image-generation/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <SettingsProvider>
        <main className="flex h-full">
          <SideBar />
          <div className="pl-0 md:pl-[17rem] flex flex-col flex-1 w-full">
            <ImageGenerationHeader />
            <div className="flex w-full border-t border-van-gogh-grey-400 px-4 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </SettingsProvider>
    </Providers>
  );
}
