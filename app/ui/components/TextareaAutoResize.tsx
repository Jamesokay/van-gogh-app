"use client";

import { Textarea } from "@chakra-ui/react";
import { FC, useEffect, useRef } from "react";

const TextareaAutoResize: FC<{
  maxLength: number;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ maxLength, placeholder, value, handleChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | number | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(adjustHeight, 100);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [value]);

  const adjustHeight = () => {
    if (textareaRef.current) {
      // Temporarily reset height to default to shrink on content removal
      textareaRef.current.style.height = "45px";
      // Set the height to scrollHeight to expand to fit content
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <Textarea
      ref={textareaRef}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    ></Textarea>
  );
};

export default TextareaAutoResize;
