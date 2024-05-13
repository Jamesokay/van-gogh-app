"use client";

import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import RemoveBackgroundIcon from "../svg/RemoveBackgroundIcon";
import CopyOutlineIcon from "../svg/CopyOutlineIcon";
import DeleteFilledIcon from "../svg/DeleteFilledIcon";
import ThreeDotsIcon from "../svg/ThreeDotsIcon";
import { useSettings } from "@/app/context/SettingsContext";
import { deleteGeneration } from "@/app/lib/actions";
import { FC } from "react";

const GenerationThreeDotsDropdown:FC<{ generationId?: string }> = ({ generationId }) => {
  const { interfaceState, setKeyOfInterfaceState } = useSettings();

  const handleDeleteGeneration = async () => {
    if (!generationId) return;
    try {
      const deletedId = await deleteGeneration(generationId);
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
      action: () => {},
    },
    {
      icon: <CopyOutlineIcon white={true} />,
      title: "Copy Seed",
      action: () => {},
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
