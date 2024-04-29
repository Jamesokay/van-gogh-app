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
        enabled ? "bg-purple-gradient" : "bg-van-gogh-grey-d"
      } ml-auto relative inline-flex items-center h-6 rounded-full w-switch-track-width cursor-pointer transition-colors focus:outline-none`}
    >
      <span
        className={`${
          enabled
            ? "translate-x-switch-track-x-enable"
            : "translate-x-switch-track-x-disable"
        } inline-block w-switch-track-height h-switch-track-height transform bg-white rounded-full transition-transform`}
      />
    </div>
  );
};

export default Switch;
