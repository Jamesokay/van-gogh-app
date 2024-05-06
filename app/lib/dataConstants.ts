import { GenerationHistoryProps, ImageGenModel } from "./definitions";

export const routes = [
  { title: "Generation History", path: "/" },
  { title: "Image Guidance", path: "/image-guidance" },
  { title: "Prompt Generation", path: "/prompt-generation" },
];

export const numberOfImagesOptions = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const dimensionOptions = {
  default: [
    "512 x 512",
    "768 x 768",
    "512 x 1024",
    "768 x 1024",
    "1024 x 768",
    "1024 x 1024",
  ],
  alchemy: [
    "512 x 768",
    "768 x 512",
    "1024 x 768",
    "768 x 1024",
    "1360 x 768",
    "768 x 1360",
  ],
};

export const aspectRatioOptions = [
  "1:1",
  "1:2",
  "2:3",
  "3:2",
  "3:4",
  "4:3",
  "9:16",
  "16:9",
  "2.39:1",
];

export const defaultAspectRatioConversion = {
  "1:1": { width: 728, height: 728 },
  "1:2": { width: 512, height: 1024 },
  "2:3": { width: 592, height: 888 },
  "3:2": { width: 888, height: 592 },
  "3:4": { width: 624, height: 832 },
  "4:3": { width: 832, height: 624 },
  "9:16": { width: 536, height: 960 },
  "16:9": { width: 960, height: 536 },
  "2.39:1": { width: 1224, height: 512 },
};

export const modelData: ImageGenModel[] = [
  {
    modelId: "0",
    modelName: "Leonardo Lightning XL",
    ModelType: "Finetuned Model",
    dimensions: "1024x768",
    lightning: true,
    alchemy: true,
    img: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/334022a8-7cea-43f9-a8a0-b9c2d232f32f/Default_an_ageing_astronaut_piloting_an_old_spaceship_0.jpg",
  },
  {
    modelId: "1",
    modelName: "Leonardo Anime XL",
    ModelType: "Finetuned Model",
    dimensions: "1024x768",
    lightning: true,
    alchemy: true,
    img: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/16cbffcc-8672-47d6-8738-d22167dcea3f/Default_A_lush_vibrant_anime_hero_figure_emerges_from_the_shad_0.jpg",
  },
  {
    modelId: "2",
    modelName: "Leonardo Diffusion XL",
    ModelType: "Finetuned Model",
    dimensions: "1024x768",
    lightning: false,
    alchemy: true,
    img: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/16cbffcc-8672-47d6-8738-d22167dcea3f/Default_A_lush_vibrant_anime_hero_figure_emerges_from_the_shad_0.jpg",
  },
  {
    modelId: "3",
    modelName: "Leonardo Kino XL",
    ModelType: "Finetuned Model",
    dimensions: "1024x576",
    lightning: false,
    alchemy: true,
    img: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/38c684e6-702f-446a-b99b-649462d6a3d6/Leonardo_Kino_XL_cinematic_photo_of_a_surreal_adventurer_on_a_2.jpg",
  },
  {
    modelId: "4",
    modelName: "Leonardo Vision XL",
    ModelType: "Finetuned Model",
    dimensions: "1024x768",
    lightning: false,
    alchemy: true,
    img: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/bc0a7117-ad5e-4754-8648-6412cc554478/Leonardo_Vision_XL_A_gritty_unedited_photograph_perfectly_capt_2.jpg",
  },
];

export const imageStyles = [
  "Anime",
  "Cinematic",
  "Creative",
  "Dynamic",
  "Environment",
  "General",
  "Illustration",
  "Photography",
  "Raytraced",
  "3D Render",
  "Sketch B/W",
  "Sketch Color",
  "Vibrant",
  "None",
];

export const imageGuidanceTypes = [
  "Image to Image",
  "Style Reference",
  "Depth to Image",
  "Edge to Image",
  "Pose to Image",
  "Text Image Input",
];

export const sampleGenerationHistoryArray: GenerationHistoryProps[] = [
  {
    id: "xyz123",
    prompt:
      "Cityscape in evening, skyscrapers, dusky blue skies, blue colour palette, lights just coming on in some of the buildings, elevated view",
    images: [
      "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/07472a57-0e9b-4081-805c-c1599161a8c7/Default_Cityscape_in_evening_skyscrapers_dusky_blue_skies_blue_1.jpg",
      "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/07472a57-0e9b-4081-805c-c1599161a8c7/Default_Cityscape_in_evening_skyscrapers_dusky_blue_skies_blue_3.jpg",
      "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/07472a57-0e9b-4081-805c-c1599161a8c7/Default_Cityscape_in_evening_skyscrapers_dusky_blue_skies_blue_2.jpg",
      "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/07472a57-0e9b-4081-805c-c1599161a8c7/Default_Cityscape_in_evening_skyscrapers_dusky_blue_skies_blue_0.jpg"
    ],
    modelId: "0",
    style: "Dynamic",
    width: 768,
    height: 1024,
  },
  {
    id: "xyz456",
    prompt: "Natural beauty, mountains in mist, forest, photo realistic",
    images: [
      "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/364e0b86-64bc-469d-9e6f-2760ccb9a077/Default_Natural_beauty_mountains_in_mist_forest_photo_realisti_3.jpg",
      "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/364e0b86-64bc-469d-9e6f-2760ccb9a077/Default_Natural_beauty_mountains_in_mist_forest_photo_realisti_2.jpg",
      "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/364e0b86-64bc-469d-9e6f-2760ccb9a077/Default_Natural_beauty_mountains_in_mist_forest_photo_realisti_1.jpg",
      "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/364e0b86-64bc-469d-9e6f-2760ccb9a077/Default_Natural_beauty_mountains_in_mist_forest_photo_realisti_0.jpg",
    ],
    modelId: "0",
    style: "Dynamic",
    width: 768,
    height: 1024,
  },
  {
    id: "xyz789",
    prompt: "Architectural wonders",
    images: [
      "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/ef61be8e-3f80-4c3e-9e59-57305bd119fc/Default_architectural_wonders_1.jpg?w=512",
      "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/ef61be8e-3f80-4c3e-9e59-57305bd119fc/Default_architectural_wonders_0.jpg?w=512",
    ],
    modelId: "0",
    style: "Dynamic",
    width: 768,
    height: 1360,
  }
];

export const numberOfPromptsOptions = [2, 4, 6, 8];
