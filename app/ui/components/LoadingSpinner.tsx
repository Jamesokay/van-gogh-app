import LeonardoIcon from "../svg/LeonardoIcon";

const LoadingSpinner = () => {
  return (
    <div className="relative flex w-fit">
      <div className="relative flex animate-spin w-[7.5rem] h-[7.5rem]">
        <div className="w-full h-full blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[36%] bg-loading-spinner-gradient" />
        <div className="z-10 w-full h-full rounded-[36%] bg-loading-spinner-gradient" />
      </div>
      <div className="z-10 w-[7.5rem] h-[7.5rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <LeonardoIcon />
      </div>
    </div>
  );
};

export default LoadingSpinner;
