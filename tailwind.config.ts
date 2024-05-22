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
    "opacity-0",
    "opacity-100",
    "mb-0",
    "mb-4",
    "bg-van-gogh-black-opal-300",
    "bg-van-gogh-grey-400",
    "bg-van-gogh-green-gradient",
    "bg-van-gogh-blue-to-purple-gradient",
    "rounded-b-full",
    "rounded-t-full",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "van-gogh-dark-blue-gradient":
          "linear-gradient(90deg, rgb(6, 8, 13) 0%, rgb(13, 18, 28) 100%)",
        "van-gogh-blue-to-purple-gradient":
          "linear-gradient(270deg, rgba(202, 79, 194, 0.20) -0.11%, rgba(178, 76, 243, 0.00) 50.06%)",
        "van-gogh-purple-gradient":
          "linear-gradient(81.02deg, rgb(250, 85, 96) -23.47%, rgb(177, 75, 244) 45.52%, rgb(77, 145, 255) 114.8%)",
        "van-gogh-blue-gradient":
          "linear-gradient(90.04deg, rgb(177, 75, 244) -7.94%, rgb(77, 145, 255) 110%)",
        "van-gogh-pink-gradient":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), linear-gradient(81.02deg, rgb(250, 85, 96) -23.47%, rgb(177, 75, 244) 45.52%, rgb(77, 145, 255) 114.8%)",
        "van-gogh-green-gradient":
          "linear-gradient(90deg, rgb(0, 194, 119) 0%, rgb(0, 121, 78) 100%)",
        "van-gogh-transparent-purple-gradient":
          "linear-gradient(81.02deg, rgba(250, 85, 96, 0.08) -23.47%, rgba(177, 75, 244, 0.08) 45.52%, rgba(77, 145, 255, 0.08) 114.8%)",
        "van-gogh-image-overlay-gradient":
          "linear-gradient(rgba(18, 19, 21, 0) -2.43%, rgb(18, 19, 21) 97.57%)",
        "van-gogh-loading-spinner-gradient":
          "conic-gradient(rgb(23, 38, 44), rgb(250, 85, 96), rgb(177, 75, 244), rgb(23, 38, 44), rgb(23, 38, 44), rgb(177, 75, 244), rgb(77, 145, 255), rgb(23, 38, 44), rgb(23, 38, 44))"
      },
      boxShadow: {
        "van-gogh-purple-glow": "rgba(143, 0, 255, 0.6) 0px 0px calc(0.9375rem)",
      },
      colors: {
        "van-gogh-grey-50": "rgb(23, 23, 23)",
        "van-gogh-grey-100": "rgb(36, 44, 62)",
        "van-gogh-grey-200": "rgba(255, 255, 255, 0.24)",
        "van-gogh-black-opal-300": "rgba(0, 0, 0, 0.34)",
        "van-gogh-black-opal-400": "rgba(0, 0, 0, 0.48)",
        "van-gogh-black-opal-500": "rgba(25, 25, 25, 0.5)",
        "van-gogh-black-opal-600" : "rgba(0, 0, 0, 0.65)",
        "van-gogh-white-opal-100": "rgba(255, 255, 255, 0.06)",
        "van-gogh-white-opal-150": "rgba(255, 255, 255, 0.08)",
        "van-gogh-white-opal-200": "rgba(255, 255, 255, 0.16)",
        "van-gogh-white-opal-900": "rgba(255, 255, 255, 0.92)",
        "van-gogh-grey-opal-300": "rgba(170, 170, 170, 0.28)",
        "van-gogh-grey-blue-400": "#282C42",
        "van-gogh-grey-250": "rgb(11, 15, 23)",
        "van-gogh-grey-400": "rgb(32, 33, 37)",
        "van-gogh-grey-500": "rgb(40, 40, 40)",
        "van-gogh-grey-600": "rgb(81, 81, 81)",
        "van-gogh-grey-700": "rgb(144, 148, 166)",
        "van-gogh-grey-800": "#242C3E",
        "van-gogh-purple-400": "rgb(114, 88, 242)",
        "van-gogh-blue-200": "#101622",
        "van-gogh-blue-500": "rgb(16, 22, 34)",
        "van-gogh-blue-700": "#0B0F17",
        "van-gogh-blue-800": "rgb(22, 29, 45)",
        "van-gogh-grey-900": "rgb(38, 39, 44)",
        "van-gogh-grey-subdued-500": "rgb(73, 78, 91)",
        "van-gogh-text-grey-600": "rgb(151, 151, 151)",
        "van-gogh-input-grey-700": "rgb(23, 23, 23)",
        "van-gogh-hover-grey-800": "rgb(19, 25, 38)",
        "van-gogh-icon-grey-900": "rgb(73, 78, 91)",
        "van-gogh-border-grey-300": "#26272C"
      },
      flex: {
        "van-gogh-1-1-0": "1 1 0%",
      },
      gridTemplateColumns: {
        "van-gogh-auto-fit-minmax-35": "repeat(auto-fit, minmax(calc(35.75rem), 1fr))",
        "van-gogh-auto-fill-minmax-0-31": "repeat(auto-fill, minmax(0px, calc(31.875rem)))",
        "van-gogh-auto-fit-minmax-16": "repeat(auto-fit, minmax(calc(16rem), 1fr))",
        "van-gogh-auto-fit-minmax-24": "repeat(auto-fit, minmax(calc(24rem), 1fr))",
        "van-gogh-auto-fit-minmax-75px": "repeat(auto-fill, minmax(75px, 1fr))"
      },
      maxHeight: {
        "van-gogh-modal-height": "calc(-10rem + 100vh)",
      },
      minWidth: {
        "van-gogh-input-width": "100px",
        "van-gogh-modal-width": "32rem",
      },
      width: {
        "van-gogh-sidebar-width": "17rem",
        "van-gogh-van-gogh-4.5": "1.125rem",
      },
      maxWidth: {
        "van-gogh-modal-width": "90vw",
      },
      height: {
        "van-gogh-van-gogh-4.5": "1.125rem",
      },
      minHeight: {
        "van-gogh-modal-height": "32rem",
      },
      fontSize: {
        "van-gogh-5xs": "0.45rem",
        "van-gogh-4xs": "0.538rem",
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
      spacing: {
        "van-gogh-spacing-1px": "1px",
        "van-gogh-spacing-xs": "0.25rem",
        "van-gogh-spacing-m": "0.75rem",
        "van-gogh-spacing-ml": "0.875rem",
        "van-gogh-grid-row-gap": "0.625rem",
        "van-gogh-switch-track-width": "calc(1rem * 2.625)",
        "van-gogh-switch-track-height": "calc(1rem * 1.25)",
        "van-gogh-switch-track-x-enable": "calc(1rem * 2.625 - 1rem * 1.25 - 0.125rem)",
        "van-gogh-switch-track-x-disable": "0.125rem",
      },
    },
  },
  plugins: [],
};
export default config;
