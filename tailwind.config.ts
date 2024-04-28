import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "grid-cols-2",
    "grid-cols-4",
    "max-h-0",
    "max-h-input-height",
    "opacity-0",
    "opacity-100",
    "mb-0",
    "mb-4",
    "bg-van-gogh-black-opal",
    "rounded-corners-m",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "body-gradient": "linear-gradient(112deg, #020305 0%, #070A0F 100%)",
        "darkblue-to-darkerblue-gradient":
          "linear-gradient(90deg, rgb(6, 8, 13) 0%, rgb(13, 18, 28) 100%)",
        "purple-gradient":
          "linear-gradient(81.02deg, rgb(250, 85, 96) -23.47%, rgb(177, 75, 244) 45.52%, rgb(77, 145, 255) 114.8%)",
        "blue-gradient":
          "linear-gradient(90.04deg, rgb(177, 75, 244) -7.94%, rgb(77, 145, 255) 110%)",
      },
      borderRadius: {
        "corners-xs": "0.312rem",
        "corners-s": "0.375rem",
        "corners-m": "1.25rem",
        "corners-l": "1.875rem",
      },
      colors: {
        "van-gogh-white-16": "rgba(255, 255, 255, 0.16)",
        "van-gogh-border-grey": "rgb(36, 44, 62)",
        "van-gogh-black-opal": "rgba(0, 0, 0, 0.34)",
        "van-gogh-grey-2xd": "rgb(32, 33, 37)",
        "van-gogh-grey-xd": "rgb(40, 40, 40)",
        "van-gogh-grey-d": "rgb(81, 81, 81)",
        "van-gogh-grey-m": "rgb(144, 148, 166)",
        "van-gogh-grey-blue": "#242C3E",
        "van-gogh-purple": "rgb(114, 88, 242)",
        "van-gogh-dark-blue": "rgb(16, 22, 34)",
        "van-gogh-dark-blue-hover": "rgb(22, 29, 45)",
      },
      maxHeight: {
        "input-height": "50px",
      },
      minWidth: {
        "input-width": "100px",
      },
      width: {
        "van-gogh-sidebar-width": "17rem",
      },
      fontSize: {
        "van-gogh-4xs": "0.45rem",
        "van-gogh-3xs": "0.625rem",
        "van-gogh-2xs": "0.6875rem",
        "van-gogh-xs": "0.75rem",
        "van-gogh-sm": "0.875rem",
        "van-gogh-md": "0.9375rem",
        "van-gogh-lg": "1.125rem",
        "van-gogh-xl": "1.25rem",
        "van-gogh-2xl": "1.5rem",
        "van-gogh-3xl": "1.875rem",
        "van-gogh-4xl": "2.25rem",
        "van-gogh-5xl": "3rem",
        "van-gogh-6xl": "3.75rem",
        "van-gogh-7xl": "4.5rem",
        "van-gogh-8xl": "6rem",
        "van-gogh-9xl": "8rem",
      },
      borderWidth: {
        thinner: "0.063rem",
        thin: "0.125rem",
      },
      spacing: {
        "van-gogh-spacing-1px": "1px",
        "van-gogh-spacing-xs": "0.25rem",
        "van-gogh-spacing-m": "0.75rem",
        "van-gogh-spacing-ml": "0.875rem",
        "grid-row-gap": "0.625rem",
        "switch-track-width": "calc(1rem * 2.625)",
        "switch-track-height": "calc(1rem * 1.25)",
        "switch-track-x-enable": "calc(1rem * 2.625 - 1rem * 1.25 - 0.125rem)",
        "switch-track-x-disable": "0.125rem",
      },
    },
  },
  plugins: [],
};
export default config;
