"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center pt-9 pb-4 h-full w-full">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 h-[45px] w-fit bg-van-gogh-purple-gradient px-12 rounded-lg"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
