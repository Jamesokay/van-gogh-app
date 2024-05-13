import { uniqueId } from "@/app/lib/helpers";
import { FC, useMemo } from "react";

const CopyOutlineIcon:FC<{ white?: boolean }> = ({ white }) => {
  const gradientId = useMemo(uniqueId, []);

  return (
    <svg
      viewBox="0 0 16 16"
      focusable="false"
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
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
      <g
        strokeWidth="1"
        fill="none"
        stroke={white? '#fff' : `url(#${gradientId})`} // Use the unique ID here
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7.5" y="5.5" width="8" height="10"></rect>
        <polyline points="4.5,13.5 0.5,13.5 0.5,0.5 11.5,0.5 11.5,2.5"></polyline>
      </g>
    </svg>
  );
};

export default CopyOutlineIcon;
