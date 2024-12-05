'use client';

import { IconProps } from './interfaces';

export default function IconPlus(props: IconProps) {
  return (
    <svg
      viewBox="0 0 23 24"
      fill="none"
      className="w-[23px] h-[24px]"
      {...props}
    >
      <g filter="url(#filter0_i_540_11049)">
        <path
          d="M22.2725 10.8995L22.2725 13.0991L12.4543 13.0991L12.4543 23.272L10.2725 23.272L10.2725 13.0991L0.454278 13.0991L0.454279 10.8995L10.2725 10.8995L10.2725 0.726563L12.4543 0.726563L12.4543 10.8995L22.2725 10.8995Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_540_11049"
          x="0.454102"
          y="0.726562"
          width="21.8184"
          height="23.5449"
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
            result="effect1_innerShadow_540_11049"
          />
        </filter>
      </defs>
    </svg>
  );
}
