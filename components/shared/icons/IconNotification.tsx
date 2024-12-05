'use client';

import { IconProps } from './interfaces';

export default function IconNotification(props: IconProps) {
  return (
    <svg
      viewBox="0 0 20 22"
      fill="none"
      className="w-[20px] h-[22px]"
      {...props}
    >
      <path
        d="M8.29805 19.9949C8.46539 20.2993 8.71139 20.5531 9.01036 20.7299C9.30932 20.9067 9.65027 21 9.9976 21C10.3449 21 10.6859 20.9067 10.9848 20.7299C11.2838 20.5531 11.5298 20.2993 11.6971 19.9949M3.9992 6.9984C3.9992 5.40753 4.63117 3.88181 5.75609 2.75689C6.88101 1.63197 8.40673 1 9.9976 1C11.5885 1 13.1142 1.63197 14.2391 2.75689C15.364 3.88181 15.996 5.40753 15.996 6.9984C15.996 13.9965 18.9952 15.996 18.9952 15.996H1C1 15.996 3.9992 13.9965 3.9992 6.9984Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
