import { FC, ReactNode } from "react";

const OutlineButton: FC<{ children: ReactNode; disabled: boolean }> = ({
  children,
  disabled,
}) => {
  return (
    <button
      className={`flex items-center justify-center h-10 min-w-10 p-2 rounded-md border border-van-gogh-grey-100 bg-van-gogh-blue-200 transition-all hover:bg-van-gogh-blue-800 ${
        disabled ? "cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
