import { FC } from "react";

const Switch: FC<{ enabled: boolean; handleToggle: () => void }> = ({
  enabled,
  handleToggle,
}) => {
  return (
    <div
      role="checkbox"
      aria-checked={enabled}
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={(e) => e.key === "Enter" && handleToggle()}
      className={`${
        enabled ? "bg-van-gogh-purple-gradient" : "bg-van-gogh-grey-600"
      } ml-auto relative inline-flex items-center h-6 rounded-full w-van-gogh-switch-track-width cursor-pointer transition-colors focus:outline-none`}
    >
      <span
        className={`${
          enabled
            ? "translate-x-van-gogh-switch-track-x-enable"
            : "translate-x-van-gogh-switch-track-x-disable"
        } inline-block w-van-gogh-switch-track-height h-van-gogh-switch-track-height transform bg-white rounded-full transition-transform`}
      />
    </div>
  );
};

export default Switch;
