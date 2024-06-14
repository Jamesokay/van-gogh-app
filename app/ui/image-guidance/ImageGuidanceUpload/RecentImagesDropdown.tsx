"use client";

import { GeneratedImage } from "@/app/lib/definitions";
import { ArrowForwardIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import ImageInputModal from "./ImageInputModal";
import { createBrowserClient } from "@/app/utils/supabase/client";
import { fetchGenerationsByUserId } from "@/app/lib/actions";
import AddImageIcon from "../../svg/AddImageIcon";

const RecentImagesDropdown: FC<{
  setValue: (value: GeneratedImage) => void;
  variant: string;
  showReplaceButton?: boolean;
}> = ({ setValue, variant, showReplaceButton = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState<GeneratedImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const supabase = createBrowserClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) throw new Error("Error fetching user data");
        const generations = await fetchGenerationsByUserId(user.id);
        if (!generations) throw new Error("Error fetching generations");
        const recentImages = generations.flatMap(
          (generation) => generation.generated_images || []
        );
        setImages(recentImages);
      } catch (err) {
        console.error(err);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="flex w-full gap-2">
      <button
        className={
          showReplaceButton
            ? "flex items-center px-2 gap-1 bg-van-gogh-blue-300 border border-van-gogh-grey-100 rounded-md transition-all hover:bg-van-gogh-blue-800"
            : "hidden"
        }
        onClick={onOpen}
      >
        <AddImageIcon className="w-5 h-5" />
        <span className="text-van-gogh-sm font-medium">Replace</span>
      </button>
      <Menu variant={variant}>
        <MenuButton>
          <div className="flex w-full justify-between items-center px-3 py-2">
            <span className="text-van-gogh-sm font-light">
              <span className={showReplaceButton ? "hidden" : ""}>
                Select from&nbsp;
              </span>
              <span className="font-medium">Recent Images</span>
            </span>
            &nbsp;
            <TriangleDownIcon w={2.5} />
          </div>
        </MenuButton>
        <MenuList>
          <div className="flex flex-col max-h-[18rem] overflow-y-auto">
            <MenuGroup>
              <p className="py-1.5 px-2.5 text-van-gogh-xs text-van-gogh-grey-700">
                Generations
              </p>
              <div className="grid grid-cols-van-gogh-auto-fit-minmax-75px px-2.5 pb-2.5 gap-2.5">
                {images.map((image) => (
                  <MenuItem key={image.id} onClick={() => setValue(image)}>
                    <div
                      role="button"
                      className="relative w-full h-full overflow-hidden rounded-md"
                    >
                      <img
                        src={image.url}
                        className="absolute w-full h-full object-cover"
                        alt="recent image"
                      />
                    </div>
                  </MenuItem>
                ))}
              </div>
            </MenuGroup>
          </div>
          <button
            className="flex justify-center items-center gap-1 w-full h-8 bg-van-gogh-blue-500"
            onClick={onOpen}
          >
            <span className="text-van-gogh-sm font-medium">Show more</span>
            <ArrowForwardIcon />
          </button>
          <ImageInputModal isOpen={isOpen} onClose={onClose} setValue={setValue} />
        </MenuList>
      </Menu>
    </div>
  );
};

export default RecentImagesDropdown;
