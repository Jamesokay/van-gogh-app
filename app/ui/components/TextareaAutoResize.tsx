"use client";

import { Textarea } from "@chakra-ui/react";
import { FC, useEffect, useRef, useCallback } from "react";

const TextareaAutoResize: FC<{
  maxLength: number;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ maxLength, placeholder, value, handleChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const adjustHeight = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "45px";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  useEffect(() => {
    adjustHeight(); // Adjust height on initial render and when value changes

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [value, adjustHeight]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e); // Call the provided handleChange to update the state

    // Cancel any pending animation frame request before starting a new one
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(adjustHeight);
  };

  return (
    <Textarea
      variant="prompt"
      fontSize={{ base: "1rem", md: "1.25rem" }}
      ref={textareaRef}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default TextareaAutoResize;
