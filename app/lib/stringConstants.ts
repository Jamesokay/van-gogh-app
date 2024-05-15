export const sideBarStrings = {
  numberOfImages: "Number of Images",
  inputDimensions: "Input Dimensions",
  advancedControls: "Advanced Controls",
  guidanceScale: "Guidance Scale",
  showAdvancedSettings: "Show Advanced Settings",
  scheduler: "Scheduler",
  photoReal: "PhotoReal",
  alchemy: "Alchemy",
  promptMagic: "Prompt Magic",
  transparency: "Transparency",
  publicImages: "Public Images",
  tiling: "Tiling",
  recommendedSizes: "Recommended Sizes",
  useFixedSeed: "Use Fixed Seed",
  manage: "Manage",
  reset: "Reset to defaults",
  outputResolution: "Output Resolution",
};

export const imageGenerationHeaderStrings = {
  title: "AI Image Generation",
  promptInputPlaceholder: "Type a prompt...",
  negPromptInputPlaceholder: "Type a negative prompt...",
  addNegPrompt: "Add negative prompt",
  addElements: "Add Elements",
  buttonText: "Generate",
  finetunedModel: "Finetuned Model"
};

export const generationHistoryStrings = {
  emptyState:
    "You still have yet to make your first AI image generation. Please type a prompt above to create your first image set.",
};

export const imageGuidanceStrings = {
  uploadStrings: {
    title: "Image Input",
    description: "Add an image to get started",
    formatAndSize: "PNG, JPG or WEBP up to 5MB",
  },
  uploadedStrings: {
    titleLeft: "Image Source",
    titleRight: "Type",
    midSectionTitle: "Description",
    midSectionBody:
      "Detects the color pattern, and the overall entire look view of an input image, and will use this to guide your image generations",
    strength: "Strength",
  },
  CTAStrings: {
    fourLayers: "Add up to 4 layers of",
    imageGuidance: "Image Guidance",
    buttonText: "Unlock with Premium",
  },
};

export const promptGenerationStrings = {
  description:
    "This tool will allow you to come up with more complex prompt ideas from a simple prompt. E.g. if you type in “a car” and click Ideate it will come up with a number of more complex concepts which include a car.",
  optionsTitle: "Number of Prompts to Generate",
  inputPlaceHolder: "Enter a basic prompt idea.",
  promptsRemaining: "prompts remaining",
  buttonText: "Ideate",
};

export const tooltipText = {
  photoReal: "Enhanced photorealism. Requires Leonardo Kino XL, Leonardo Diffusion XL or Leonardo Vision XL to be selected.",
  alchemy: "Powerful new image generation pipeline. Requires an XL model to be selected.",
  promptMagic: "Prompt Magic tooltip text",
  transparency: "Adds transparency to the generated images.",
  publicImages: "Send your generations to the community feed.",
  inputDimensions: "This is the input resolution into Alchemy.",
  guidanceScale: "How strongly your prompt is weighted",
  tiling: "Ideal for repeating textures or backgrounds.",
  recommendedSizes: "Automatically set dimensions to best fit for your model.",
  useFixedSeed: "The deterministic number for the random number generator.",
  scheduler: "Defines how noise affects the generation.",
  setAspectRatio: "Set aspect ratio",
  uploadInput: "Upload image input",
  deleteInput: "Delete image input",
  mismatchedAspectRatio:
    "Selected aspect ratio does not match dimensions of the image. Match output ratio for best results.",
  downloadImage: "Download image",
  copy: "Copy to clipboard",
  removeBackground: "Remove background",
  alchemyUpscaler:
    "Alchemy Upscaler - use this to refine and upscale your images. This can improve faces and hands as part of the process.",
  premiumToDelete: "Upgrade to premium to delete image",
  motionVideo: "Generate a Motion video",
  imageGuidance: "Use as Image Guidance input",
  editCanvas: "Edit in canvas",
  premiumPrivateImages:
    "The image is public. Please subscribe to a paid plan if you wish to generate private images.",
  randomPrompt: 'Generate a random prompt'
};

export const badgeText = {
  v2: "V2",
  beta: "Beta",
  new: "New",
  premium: "Premium",
  alchemy: "Alchemy V2",
};