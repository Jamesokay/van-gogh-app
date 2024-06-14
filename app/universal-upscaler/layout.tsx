import { Suspense } from "react";
import LoadingSpinner from "../ui/components/LoadingSpinner";
import { UpscalerProvider } from "../context/UpscalerContext";
import SideBar from "../ui/universal-upscaler/SideBar";
import Header from "../ui/universal-upscaler/Header";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UpscalerProvider>
      <Suspense
        fallback={
          <div className="flex w-full h-full justify-center items-center">
            <LoadingSpinner />
          </div>
        }
      >
        <main className="flex flex-col h-full w-full">
          <Header />
          <div className="flex h-full w-full">
            <SideBar />
            {children}
          </div>
        </main>
      </Suspense>
    </UpscalerProvider>
  );
}
