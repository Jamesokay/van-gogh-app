"use client";

import { useUpscaler } from "@/app/context/UpscalerContext";
import { FC, ReactNode, useRef } from "react";

const UpscalerUpload: FC<{ children: ReactNode }> = ({ children }) => {
  const { setNewUpscaleSourceImage } = useUpscaler();
  const inputRef = useRef<HTMLInputElement>(null);

  const readFileToLocalState = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setNewUpscaleSourceImage((prev) => ({
          ...prev,
          src: reader.result as string,
        }));
      }
    };
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };

  const uploadFileToAPI = async (file: File) => {
    console.log("upload to API");
    // try {
    //   const details = await getPresignedUrl();
    //   if (!details?.url || !details?.fields) return;
    //   const { url, fields, id } = details;
    //   const parsedFields = JSON.parse(fields);
    //   const formData = new FormData();
    //   for (const key in parsedFields) {
    //     formData.append(key, parsedFields[key]);
    //   }
    //   formData.append("file", file);

    //   await uploadImageViaPresignedURL(formData, url);
    //   setUpscalerRequest((prev) => ({
    //     ...prev,
    //     initImageId: id,
    //     generatedImageId: null,
    //   }));
    // } catch (err) {
    //   console.error("Error during upload process:", err);
    // }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      readFileToLocalState(file);
      uploadFileToAPI(file);
    }
  };

  const openFileSystem = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };
  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFileChange}
      />
      <div role="button" className="flex" onClick={() => openFileSystem()}>
        {children}
      </div>
    </>
  );
};

export default UpscalerUpload;
