'use client';

import { IconProps } from './interfaces';

export default function IconFilter(props: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="w-[20px] h-[20px]"
      {...props}
    >
      <path
        d="M0.3125 2.075C0.4375 2.2375 7.4875 11.2375 7.4875 11.2375V18.75C7.4875 19.4375 8.05 20 8.75 20H11.2625C11.95 20 12.525 19.4375 12.525 18.75V11.225C12.525 11.225 19.3875 2.45 19.7125 2.05C20.0375 1.65 20 1.25 20 1.25C20 0.5625 19.4375 0 18.7375 0H1.2625C0.5 0 0 0.6 0 1.25C0 1.5 0.075 1.8 0.3125 2.075Z"
        fill="currentColor"
      />
    </svg>
  );
}
