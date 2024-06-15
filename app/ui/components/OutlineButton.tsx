import { FC, ReactNode } from "react";

const OutlineButton: FC<{
  children: ReactNode;
  disabled: boolean;
  small?: boolean;
}> = ({ children, disabled, small = false }) => {
  return (
    <button
      className={`flex items-center justify-center p-2 rounded-md border border-van-gogh-grey-100 bg-van-gogh-outline-button-grey transition-all hover:bg-van-gogh-outline-button-hover-grey ${
        disabled ? "cursor-not-allowed" : ""
      }
      ${small ? "h-8 min-w-8" : "h-10 min-w-10"}
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
