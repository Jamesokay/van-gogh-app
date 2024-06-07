import { FC } from "react";
import GridIcon from "../../svg/GridIcon";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import RangeSlider from "../../components/RangeSlider";
import { GridToggleProps } from "@/app/lib/definitions";

const GridToggle: FC<GridToggleProps> = ({
  handleToggle,
  columns,
  setColumns,
  view,
}) => {
  return (
    <div
      className={
        view === "web"
          ? "hidden md:flex gap-3 items-center"
          : "flex md:hidden gap-3 items-center"
      }
    >
      <GridIcon />
      <button
        className="w-10"
        onClick={() => handleToggle(columns, "minus", view)}
      >
        <MinusIcon w={3} />
      </button>
      <div className="w-36">
        <RangeSlider
          value={columns}
          min={1}
          max={view === "web" ? 5 : 2}
          setValue={(x) => setColumns(x)}
          purple
        />
      </div>
      <button
        className="w-10"
        onClick={() => handleToggle(columns, "plus", view)}
      >
        <AddIcon w={3} />
      </button>
    </div>
  );
};

export default GridToggle;
