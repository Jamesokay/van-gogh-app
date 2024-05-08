import { FC } from "react";

const TickIcon:FC<{ fill?: string}> = ({ fill = '' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="paint0_linear_2003_5973_:r57a:"
          x1="-5.94833"
          y1="0.0820286"
          x2="15.6652"
          y2="-3.33331"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stopColor="#FA5560"></stop>
          <stop offset="0.499028" stopColor="#B14BF4"></stop>
          <stop offset="1" stopColor="#4D91FF"></stop>
        </linearGradient>
      </defs>
      <path
        d="M8.99978 17.9992C8.99878 17.9992 8.99778 17.9992 8.99578 17.9992C8.72878 17.9982 8.47477 17.8913 8.28777 17.7013L4.28778 13.6393C3.89978 13.2453 3.90478 12.6123 4.29878 12.2253C4.69278 11.8383 5.32478 11.8422 5.71278 12.2362L9.00577 15.5802L18.2938 6.29325C18.6848 5.90225 19.3168 5.90225 19.7078 6.29325C20.0988 6.68325 20.0988 7.31725 19.7078 7.70725L9.70777 17.7073C9.51977 17.8943 9.26478 17.9992 8.99978 17.9992Z"
        fill={fill ? fill : "url(#paint0_linear_2003_5973_:r57a:)"}
      ></path>
    </svg>
  );
};

export default TickIcon;
