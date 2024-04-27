import { Heading, Textarea } from "@chakra-ui/react";

export default function ImageGenerationHeader() {
  return (
    <div className="flex flex-col w-full px-8">
      <div className="mt-10">
        <Heading as="h1" fontSize="1.5rem" fontWeight={500}>
          AI Image Generation
        </Heading>
      </div>
      <div className="flex w-full mt-5">
        <Textarea placeholder="Type a prompt..."></Textarea>
      </div>
    </div>
  );
}
