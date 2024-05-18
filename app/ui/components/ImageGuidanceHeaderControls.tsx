import ImageToImageIcon from "../svg/ImageToImageIcon";
import RangeSlider from "./RangeSlider";

const ImageGuidanceHeaderControls = () => {
  return (
    <div
      className="mb-4"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(0px, calc(31.875rem)))",
        gap: "0.75rem",
        width: "100%",
      }}
    >
      <div className="flex w-full rounded-xl border border-[0.05rem] border-van-gogh-grey-600 p-1">
        <div className="flex w-full">
          <div className="flex w-[50%] bg-van-gogh-blue-500 py-1.5 px-2 gap-2 rounded-lg border border-[0.05rem] border-van-gogh-grey-800">
            <div className="h-[2.125rem] w-[2.125rem]">
              <img
                className="w-full h-full"
                alt="Image to Image"
                src="https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/d228995a-aa27-42c5-9013-0684ca78d08f/Default_An_enigmatically_luminescent_AI_consciousness_its_ethe_1.jpg?w=512"
              ></img>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1 items-center text-van-gogh-xs text-van-gogh-grey-700">
                <ImageToImageIcon />
                Image Guidance #1
              </div>
              <p className="text-van-gogh-sm font-medium">Image to Image</p>
            </div>
          </div>
          <div className="flex w-[50%] gap-2 items-center py-1.5 px-2 ">
            <div className="flex flex-auto justify-center">
              <div className="flex flex-col w-full max-w-36 gap-1">
                <div className="flex justify-between text-van-gogh-sm">
                  <span>Strength</span>
                  <span className="font-medium bg-van-gogh-grey-250 py-0.5 px-3 rounded-full">
                    0.30
                  </span>
                </div>
                <RangeSlider
                  value={30}
                  min={0}
                  max={100}
                  setValue={() => {}}
                  small={true}
                />
              </div>
            </div>
            <div>x</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGuidanceHeaderControls;
