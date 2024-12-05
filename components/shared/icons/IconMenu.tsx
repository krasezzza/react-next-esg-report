'use client';

import { IconProps } from './interfaces';

export default function IconMenu(props: IconProps) {
  return (
    <svg
      viewBox="0 0 20 14"
      fill="currentColor"
      className="w-[20px] h-[14px]"
      {...props}
    >
      <path
        d="M4 1L16 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1 7L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 13L16 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
