import TransformContainer from "./TransformContainer";

const SideBySideView = () => {
  return (
    <TransformContainer>
      <div className="flex gap-1.5">
        <div className="flex h-full">
          <img
            src="https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/ee3f536c-9b89-4d5d-b2a1-def003e457f8/Default_A_vividly_sparkling_digital_avatar_its_pixelated_form_2.jpg"
            alt=""
            className="h-full w-auto object-contain"
            style={{ maxHeight: "calc(-9.792rem + 100dvh)" }}
          />
        </div>
        <div className="flex h-full">
          <img
            src="https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/6010529c-f5cf-4b14-a80f-a61318b0738f/variations/UniversalUpscaler_6010529c-f5cf-4b14-a80f-a61318b0738f.jpg"
            alt=""
            className="h-full w-auto object-contain"
            style={{ maxHeight: "calc(-9.792rem + 100dvh)" }}
          />
        </div>
      </div>
    </TransformContainer>
  );
};

export default SideBySideView;
