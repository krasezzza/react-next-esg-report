'use client';

import { IconProps } from './interfaces';

export default function IconCopy(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 15"
      fill="none"
      className="w-[16px] h-[15px]"
      {...props}
    >
      <path
        d="M10.3569 0.625H2.85693C2.16943 0.625 1.60693 1.1875 1.60693 1.875V10.625H2.85693V1.875H10.3569V0.625ZM12.2319 3.125H5.35693C4.66943 3.125 4.10693 3.6875 4.10693 4.375V13.125C4.10693 13.8125 4.66943 14.375 5.35693 14.375H12.2319C12.9194 14.375 13.4819 13.8125 13.4819 13.125V4.375C13.4819 3.6875 12.9194 3.125 12.2319 3.125ZM12.2319 13.125H5.35693V4.375H12.2319V13.125Z"
        fill="currentColor"
      />
    </svg>
  );
}
