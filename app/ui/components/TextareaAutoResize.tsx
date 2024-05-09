"use client";

import { Textarea } from "@chakra-ui/react";
import { FC, useRef } from "react";

const TextareaAutoResize: FC<{
  maxLength: number;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ maxLength, placeholder, value, handleChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e); // Call the provided handleChange to update the state
    adjustHeight();  // Adjust the height immediately after state update
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      // Temporarily reset the height to 'auto' to shrink/grow as needed
      textareaRef.current.style.height = '45px';
      // Set the height to scrollHeight to expand to fit content
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <Textarea
      variant="prompt"
      fontSize={{ base: "1rem", md: "1.25rem" }}
      ref={textareaRef}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange} // Use the new handler that adjusts height
    />
  );
};

export default TextareaAutoResize;