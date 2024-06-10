import { FC, ReactNode } from "react";

const GradientBorderButton: FC<{
  text: string;
  upperText?: string;
  icon?: ReactNode;
  classname?: string
}> = ({ text, upperText, icon, classname }) => {
  return (
    <div className="relative flex text-van-gogh-sm h-full bg-van-gogh-pink-gradient p-[1px] rounded-lg hover:shadow-van-gogh-purple-glow">
      {upperText && (
        <p className="hidden md:block absolute text-center w-full pb-1 bottom-full text-van-gogh-2xs text-van-gogh-text-grey-600">
          {upperText}
        </p>
      )}
      <button className={`${classname} flex gap-1 bg-van-gogh-input-grey-700 h-full w-full flex items-center justify-center rounded-lg`}>
        {icon && icon}
        {text}
      </button>
    </div>
  );
};

export default GradientBorderButton;
