import { ImageGenModel } from "./definitions";

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
    modelId: "b24e16ff-06e3-43eb-8d33-4416c2d75876",
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

export const numberOfPromptsOptions = [2, 4, 6, 8];
