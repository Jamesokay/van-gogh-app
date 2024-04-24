import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body-gradient': "linear-gradient(112deg, #020305 0%, #070A0F 100%)",
        'darkblue-to-darkerblue-gradient': "linear-gradient(90deg, rgb(6, 8, 13) 0%, rgb(13, 18, 28) 100%)",
        'purple-gradient': "linear-gradient(81.02deg, rgb(250, 85, 96) -23.47%, rgb(177, 75, 244) 45.52%, rgb(77, 145, 255) 114.8%)"
      },
      borderRadius: {
        'corners-s': '0.375rem'
      },
      colors: {
        'van-gogh-white-16': 'rgba(255, 255, 255, 0.16)',
        'van-gogh-grey-d': 'rgb(81, 81, 81)',
        'van-gogh-grey-blue': '#242C3E'
      },
      width: {
        'sidebar-width': '17rem'
      },
      fontSize: {
        'van-gogh-4xs': '0.45rem',
        'van-gogh-3xs': '0.625rem',
        'van-gogh-2xs': '0.6875rem',
        'van-gogh-xs': '0.75rem',
        'van-gogh-sm': '0.875rem',
        'van-gogh-md': '0.9375rem',
        'van-gogh-lg': '1.125rem',
        'van-gogh-xl': '1.25rem',
        'van-gogh-2xl': '1.5rem',
        'van-gogh-3xl': '1.875rem',
        'van-gogh-4xl': '2.25rem',
        'van-gogh-5xl': '3rem',
        'van-gogh-6xl': '3.75rem',
        'van-gogh-7xl': '4.5rem',
        'van-gogh-8xl': '6rem',
        'van-gogh-9xl': '8rem',
      },
      spacing: {
        'spacing-1px': '1px',
        'spacing-xs': '0.25rem',
        'spacing-m': '0.75rem',
        'switch-track-width': 'calc(1rem * 2.625)',
        'switch-track-height': 'calc(1rem * 1.25)',
        'switch-track-x-enable': 'calc(1rem * 2.625 - 1rem * 1.25 - 0.125rem)',
        'switch-track-x-disable': '0.125rem'
      }
    },
  },
  plugins: [],
};
export default config;
