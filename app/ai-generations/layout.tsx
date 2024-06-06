import { Suspense } from "react";
import { SettingsProvider } from "../context/SettingsContext";
import { Providers } from "../providers";
import ImageGenerationHeader from "../ui/ai-generations/ImageGenerationHeader";
import SideBar from "../ui/ai-generations/SideBar";
import LoadingSpinner from "../ui/components/LoadingSpinner";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <SettingsProvider>
        <Suspense
          fallback={
            <div className="flex w-full h-full justify-center items-center">
              <LoadingSpinner />
            </div>
          }
        >
          <main className="flex h-full">
            <SideBar />
            <div className="pl-0 md:pl-[17rem] flex flex-col flex-1 w-full h-full">
              <ImageGenerationHeader />
              <div className="flex w-full border-t border-van-gogh-grey-400 px-4 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </Suspense>
      </SettingsProvider>
    </Providers>
  );
}
