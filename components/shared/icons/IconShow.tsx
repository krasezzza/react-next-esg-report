'use client';

import { IconProps } from './interfaces';

export default function IconShow(props: IconProps) {
  return (
    <svg
      viewBox="0 0 25 16"
      fill="none"
      className="w-[16px] h-[10px] md:w-[22px] md:h-[14px]"
      {...props}
    >
      <path
        d="M12.6722 11.5094C14.5958 11.5094 16.1552 9.94996 16.1552 8.02633C16.1552 6.10272 14.5958 4.54333 12.6722 4.54333C10.7486 4.54333 9.18921 6.10272 9.18921 8.02633C9.18921 9.94996 10.7486 11.5094 12.6722 11.5094Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.2163 6.84366C23.8554 7.53933 23.8554 8.51328 23.2163 9.20895C21.4587 11.1568 17.4642 15.0526 12.6709 15.0526C7.87758 15.0526 3.88314 11.2959 2.12557 9.20895C1.48646 8.51328 1.48646 7.53933 2.12557 6.84366C3.88314 4.89578 7.87758 1 12.6709 1C17.4642 1 21.4587 4.89578 23.2163 6.84366Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
