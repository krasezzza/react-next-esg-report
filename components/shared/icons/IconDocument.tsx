'use client';

import { IconProps } from './interfaces';

export default function IconDocument(props: IconProps) {
  return (
    <svg
      viewBox="0 0 23 22"
      fill="none"
      className="w-[14px] h-[14px]"
      {...props}
    >
      <path
        d="M1 1H19.8889C19.8889 1 22.1111 2.11111 22.1111 4.88889C22.1111 7.66667 19.8889 8.77778 19.8889 8.77778H1C1 8.77778 3.22222 7.66667 3.22222 4.88889C3.22222 2.11111 1 1 1 1ZM22.1111 13.2222H3.22222C3.22222 13.2222 1 14.3333 1 17.1111C1 19.8889 3.22222 21 3.22222 21H22.1111C22.1111 21 19.8889 19.8889 19.8889 17.1111C19.8889 14.3333 22.1111 13.2222 22.1111 13.2222Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
