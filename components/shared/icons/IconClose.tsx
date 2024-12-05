'use client';

import { IconProps } from './interfaces';

export default function IconClose(props: IconProps) {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      className="w-[14px] h-[14px]"
      {...props}
    >
      <path
        d="M20.9998 1.00015L10.9999 11.0001M10.9999 11.0001L1 21M10.9999 11.0001L1 1M10.9999 11.0001L20.9998 20.9998"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
