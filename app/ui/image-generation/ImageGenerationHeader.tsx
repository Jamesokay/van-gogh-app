import { Heading, Textarea } from "@chakra-ui/react";
import DiceIcon from "../svg/DiceIcon";

export default function ImageGenerationHeader() {
  return (
    <div className="flex flex-col w-full px-8">
      <div className="mt-10">
        <Heading as="h1" fontSize="1.5rem" fontWeight={500}>
          AI Image Generation
        </Heading>
      </div>
      <div className="flex w-full mt-5">
        <button className="flex items-center px-2 bg-van-gogh-dark-blue rounded-corners-s mr-2">
          <DiceIcon />
        </button>
        <Textarea placeholder="Type a prompt..."></Textarea>
        <button className="bg-purple-gradient px-12 rounded-lg ml-4 font-semibold text-van-gogh-lg">
          Generate
        </button>
      </div>
    </div>
  );
}
