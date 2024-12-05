'use client';

import { IconProps } from './interfaces';

export default function IconCircleAdd(props: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className="w-[32px] h-[32px]"
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="15.5"
        fill="#F6FAFF"
        stroke="currentColor"
      />
      <g filter="url(#filter0_i_1949_48468)">
        <path
          d="M24.7451 14.9158L24.7451 16.6755L16.8492 16.6755L16.8492 24.8138L15.0946 24.8138L15.0946 16.6755L7.19871 16.6755L7.19871 14.9158L15.0946 14.9158L15.0946 6.77747L16.8492 6.77747L16.8492 14.9158L24.7451 14.9158Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1949_48468"
          x="7.19824"
          y="6.77747"
          width="17.5469"
          height="19.0364"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1949_48468"
          />
        </filter>
      </defs>
    </svg>
  );
}
