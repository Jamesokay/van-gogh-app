'use client'

import { uniqueId } from '@/app/lib/helpers';
import { FC, useMemo } from 'react';

const RemoveBackgroundIcon:FC<{ white?: boolean }> = ({ white }) => {

  const ids = useMemo(() => ({
    paint0: uniqueId(),
    paint1: uniqueId(),
    paint2: uniqueId(),
    paint3: uniqueId(),
    paint4: uniqueId(),
  }), []);

  return (
    <svg
      width="calc(1rem * 0.8750)"
      height="calc(1rem * 0.8750)"
      viewBox="0 0 14 14"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0.5 13.5L13.5 0.5"
        stroke={white ? '#fff' : `url(#${ids.paint0})`}
      ></path>
      <path
        d="M0.5 7.5L7.5 0.5"
        stroke={white ? '#fff' : `url(#${ids.paint1})`}
      ></path>
      <path
        d="M0.5 1.5L1.5 0.5"
        stroke={white ? '#fff' : `url(#${ids.paint2})`}
      ></path>
      <path
        d="M6.5 13.5L13.5 6.5"
        stroke={white ? '#fff' : `url(#${ids.paint3})`}
      ></path>
      <path
        d="M12.5 13.5L13.5 12.5"
        stroke={white ? '#fff' : `url(#${ids.paint4})`}
      ></path>
      <defs>
        <linearGradient
          id={ids.paint0}
          x1="-5.09"
          y1="0.499997"
          x2="15.2215"
          y2="-2.7096"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stopColor="#FA5560"></stop>
          <stop offset="0.499028" stopColor="#B14BF4"></stop>
          <stop offset="1" stopColor="#4D91FF"></stop>
        </linearGradient>
        <linearGradient
          id={ids.paint1}
          x1="-2.51"
          y1="0.499999"
          x2="8.42698"
          y2="-1.22825"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stopColor="#FA5560"></stop>
          <stop offset="0.499028" stopColor="#B14BF4"></stop>
          <stop offset="1" stopColor="#4D91FF"></stop>
        </linearGradient>
        <linearGradient
          id={ids.paint2}
          x1="0.07"
          y1="0.5"
          x2="1.63243"
          y2="0.253108"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stopColor="#FA5560"></stop>
          <stop offset="0.499028" stopColor="#B14BF4"></stop>
          <stop offset="1" stopColor="#4D91FF"></stop>
        </linearGradient>
        <linearGradient
          id={ids.paint3}
          x1="3.49"
          y1="6.5"
          x2="14.427"
          y2="4.77175"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stopColor="#FA5560"></stop>
          <stop offset="0.499028" stopColor="#B14BF4"></stop>
          <stop offset="1" stopColor="#4D91FF"></stop>
        </linearGradient>
        <linearGradient
          id={ids.paint4}
          x1="12.07"
          y1="12.5"
          x2="13.6324"
          y2="12.2531"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stopColor="#FA5560"></stop>
          <stop offset="0.499028" stopColor="#B14BF4"></stop>
          <stop offset="1" stopColor="#4D91FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RemoveBackgroundIcon;
