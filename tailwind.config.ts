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
    "bg-van-gogh-badge-grey",
    "bg-green-gradient",
    "bg-darkblue-to-purple-gradient",
    "rounded-b-full",
    "rounded-t-full",
  ],
  theme: {
    extend: {
      backdropBlur: {
        "modal-overlay-blur": "2rem",
      },
      backgroundImage: {
        "body-gradient": "linear-gradient(112deg, #020305 0%, #070A0F 100%)",
        "darkblue-to-darkerblue-gradient":
          "linear-gradient(90deg, rgb(6, 8, 13) 0%, rgb(13, 18, 28) 100%)",
        "darkblue-to-purple-gradient":
          "linear-gradient(270deg, rgba(202, 79, 194, 0.20) -0.11%, rgba(178, 76, 243, 0.00) 50.06%)",
        "purple-gradient":
          "linear-gradient(81.02deg, rgb(250, 85, 96) -23.47%, rgb(177, 75, 244) 45.52%, rgb(77, 145, 255) 114.8%)",
        "blue-gradient":
          "linear-gradient(90.04deg, rgb(177, 75, 244) -7.94%, rgb(77, 145, 255) 110%)",
        "pink-gradient":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), linear-gradient(81.02deg, rgb(250, 85, 96) -23.47%, rgb(177, 75, 244) 45.52%, rgb(77, 145, 255) 114.8%)",
        "green-gradient":
          "linear-gradient(90deg, rgb(0, 194, 119) 0%, rgb(0, 121, 78) 100%)",
        "transparent-purple-gradient":
          "linear-gradient(81.02deg, rgba(250, 85, 96, 0.08) -23.47%, rgba(177, 75, 244, 0.08) 45.52%, rgba(77, 145, 255, 0.08) 114.8%)",
        "image-overlay-gradient":
          "linear-gradient(rgba(18, 19, 21, 0) -2.43%, rgb(18, 19, 21) 97.57%)",
        "loading-spinner-gradient":
          "conic-gradient(rgb(23, 38, 44), rgb(250, 85, 96), rgb(177, 75, 244), rgb(23, 38, 44), rgb(23, 38, 44), rgb(177, 75, 244), rgb(77, 145, 255), rgb(23, 38, 44), rgb(23, 38, 44))",
      },
      boxShadow: {
        "purple-glow": "rgba(143, 0, 255, 0.6) 0px 0px calc(0.9375rem)",
      },
      colors: {
        "van-gogh-border-grey": "rgb(36, 44, 62)",
        "van-gogh-border-white-alpha": "rgba(255, 255, 255, 0.24)",
        "van-gogh-black-opal": "rgba(0, 0, 0, 0.34)",
        "van-gogh-black-opal-100": "rgba(0, 0, 0, 0.48)",
        "van-gogh-black-opal-200": "rgba(25, 25, 25, 0.5)",
        "van-gogh-white-opal": "rgba(255, 255, 255, 0.06)",
        "van-gogh-white-opal-hover": "rgba(255, 255, 255, 0.16)",
        "van-gogh-grey-opal": "rgba(170, 170, 170, 0.28)",
        "van-gogh-grey-2xd": "rgb(32, 33, 37)",
        "van-gogh-grey-xd": "rgb(40, 40, 40)",
        "van-gogh-grey-d": "rgb(81, 81, 81)",
        "van-gogh-grey-m": "rgb(144, 148, 166)",
        "van-gogh-grey-blue": "#242C3E",
        "van-gogh-purple": "rgb(114, 88, 242)",
        "van-gogh-dark-blue": "rgb(16, 22, 34)",
        "van-gogh-blue-hover": "rgb(11, 15, 23)",
        "van-gogh-dark-blue-alt": "#0B0F17",
        "van-gogh-dark-blue-hover": "rgb(22, 29, 45)",
        "van-gogh-badge-grey": "rgb(38, 39, 44)",
        "van-gogh-grey-subdued": "#494E5B",
        "van-gogh-text-grey": "rgb(151, 151, 151)",
        "van-gogh-input-grey": "rgb(23, 23, 23)",
        "van-gogh-hover-grey": "rgb(19, 25, 38)",
        "van-gogh-icon-grey": "rgb(73, 78, 91)"
      },
      flex: {
        "1-1-0": "1 1 0%",
      },
      gridTemplateColumns: {
        "auto-fit-minmax-35": "repeat(auto-fit, minmax(calc(35.75rem), 1fr))",
        "auto-fit-minmax-16": "repeat(auto-fit, minmax(calc(16rem), 1fr))",
      },
      maxHeight: {
        "input-height": "50px",
        "van-gogh-modal-height": "calc(-10rem + 100vh)",
      },
      minWidth: {
        "input-width": "100px",
        "van-gogh-modal-width": "32rem",
      },
      width: {
        "van-gogh-sidebar-width": "17rem",
        "4.5": "1.125rem",
      },
      maxWidth: {
        "van-gogh-modal-width": "90vw",
      },
      height: {
        "4.5": "1.125rem",
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
