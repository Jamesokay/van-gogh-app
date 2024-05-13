"use client";

import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import RemoveBackgroundIcon from "../svg/RemoveBackgroundIcon";
import CopyOutlineIcon from "../svg/CopyOutlineIcon";
import DeleteFilledIcon from "../svg/DeleteFilledIcon";
import ThreeDotsIcon from "../svg/ThreeDotsIcon";
import { useSettings } from "@/app/context/SettingsContext";
import { deleteGeneration, generateImages } from "@/app/lib/actions";
import { FC } from "react";
import { NonNullLeonardoGenerationResponse } from "@/app/lib/definitions";
import { extractRequestBodyFromPrevGeneration } from "@/app/lib/helpers";

const GenerationThreeDotsDropdown: FC<NonNullLeonardoGenerationResponse> = (
  props
) => {
  const { interfaceState, setKeyOfInterfaceState, setKeyOfGenerationRequest } =
    useSettings();

  const handleGenerateAgain = async () => {
    if (!props.id) return;
    // To-do: prevent spam click
    setKeyOfInterfaceState("generating", true);
    setKeyOfGenerationRequest("prompt", props.prompt);
    try {
      const body = extractRequestBodyFromPrevGeneration(props);
      const generation = await generateImages(body);
      if (!generation) {
        throw new Error("Failed to generate");
      }
      setKeyOfInterfaceState(
        "newGenerationId",
        generation.sdGenerationJob.generationId
      );
    } catch (err) {
      console.error("Error generating:", err);
      setKeyOfInterfaceState("generating", false);
    }
  };

  const handleCopySeed = async () => {
    try {
      await navigator.clipboard.writeText(props.seed.toString());
    } catch (err) {
      console.log("Failed to copy seed");
    }
  };

  const handleDeleteGeneration = async () => {
    if (!props.id) return;
    try {
      const deletedId = await deleteGeneration(props.id);
      if (!deletedId) {
        throw new Error("Failed to delete generation");
      }
      setKeyOfInterfaceState("deletedGenerationIds", [
        ...interfaceState.deletedGenerationIds,
        deletedId,
      ]);
    } catch (err) {
      console.error("Error deleting generation:", err);
    }
  };

  const options = [
    {
      icon: <RemoveBackgroundIcon white={true} />,
      title: "Generate Again",
      action: () => handleGenerateAgain(),
    },
    {
      icon: <CopyOutlineIcon white={true} />,
      title: "Copy Seed",
      action: () => handleCopySeed(),
    },
    {
      icon: <DeleteFilledIcon white={true} />,
      title: "Delete All",
      action: () => handleDeleteGeneration(),
    },
  ];
  return (
    <Menu variant="threeDotsMenuStyle">
      <MenuButton>
        <div className="flex items-center px-2">
          <ThreeDotsIcon />
        </div>
      </MenuButton>
      <MenuList>
        {options.map((option) => (
          <MenuItem
            key={option.title}
            icon={option.icon}
            onClick={() => option.action()}
          >
            {option.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenerationThreeDotsDropdown;
