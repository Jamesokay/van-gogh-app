import ImageContainer from "../ui/universal-upscaler/ImageContainer";

const Page = () => {
  // To-do:
  // Logic for displaying upload view when !selectedUpscaleHistoryItem
  return (
    <div className="flex flex-auto overflow-hidden">
      <ImageContainer />
    </div>
  );
};

export default Page;
