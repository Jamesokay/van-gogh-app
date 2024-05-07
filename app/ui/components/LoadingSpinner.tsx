import LeonardoIcon from "../svg/LeonardoIcon";

const LoadingSpinner = () => {
  return (
    <div className="relative flex w-fit">
      <div className="animate-spin w-[7.5rem] h-[7.5rem] rounded-[36%] bg-loading-spinner-gradient shadow-purple-glow" />
      <div className="w-[7.5rem] h-[7.5rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <LeonardoIcon />
      </div>
    </div>
  );
};

export default LoadingSpinner;
