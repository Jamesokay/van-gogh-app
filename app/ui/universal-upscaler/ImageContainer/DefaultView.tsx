import GradientBorderButton from "../../components/GradientBorderButton";
import AddImagesAnimatedIcon from "../../svg/AddImagesAnimatedIcon";
import UpscalerUpload from "../SideBar/UpscalerUpload";

const DefaultView = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-van-gogh-extra-dark-blue-gradient">
      <div className="flex flex-col items-center gap-3 cursor-pointer">
        <AddImagesAnimatedIcon />
        <p className="font-medium">
          <span className="van-gogh-gradient-text">Add an image</span> to get
          started
        </p>
        <UpscalerUpload>
          <GradientBorderButton
            text="Add an image"
            classname="py-2 px-4 text-van-gogh-md font-medium"
          />
        </UpscalerUpload>
      </div>
    </div>
  );
};

export default DefaultView;
