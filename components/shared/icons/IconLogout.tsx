'use client';

import { IconProps } from './interfaces';

export default function IconLogout(props: IconProps) {
  return (
    <svg
      viewBox="0 0 18 15"
      fill="none"
      className="w-[18px] h-[15px]"
      {...props}
    >
      <path
        d="M17.7676 6.96028L14.897 4.0896C14.6046 3.79728 14.1324 3.79728 13.8401 4.0896C13.5478 4.38191 13.5478 4.85411 13.8401 5.14643L15.4291 6.73542H8.6609C8.24866 6.73542 7.91138 7.07271 7.91138 7.48495C7.91138 7.89719 8.24866 8.23448 8.6609 8.23448H15.4141L13.8476 9.7785C13.5553 10.0708 13.5478 10.543 13.8476 10.8353C13.9975 10.9852 14.1849 11.0602 14.3798 11.0602C14.5747 11.0602 14.762 10.9852 14.9045 10.8428L17.7751 8.01712C17.9175 7.8747 18 7.68732 18 7.48495C18 7.28258 17.925 7.0952 17.7826 6.95279L17.7676 6.96028Z"
        fill="currentColor"
      />
      <path
        d="M11.7338 11.7347C10.602 12.8665 9.0955 13.4886 7.49151 13.4886C5.88753 13.4886 4.38098 12.8665 3.2492 11.7347C0.910675 9.3962 0.910675 5.5961 3.2492 3.25758C4.38098 2.1258 5.88753 1.50369 7.49151 1.50369C9.0955 1.50369 10.602 2.1258 11.7338 3.25758C12.0261 3.5499 12.4983 3.5499 12.7907 3.25758C13.083 2.96527 13.083 2.49306 12.7907 2.20075C11.3741 0.784145 9.49275 0.00463867 7.49151 0.00463867C5.49028 0.00463867 3.60897 0.784145 2.19236 2.20075C-0.730788 5.1239 -0.730788 9.8759 2.19236 12.799C3.60897 14.2157 5.49028 14.9952 7.49151 14.9952C9.49275 14.9952 11.3741 14.2157 12.7907 12.799C13.083 12.5067 13.083 12.0345 12.7907 11.7422C12.4983 11.4499 12.0261 11.4499 11.7338 11.7422V11.7347Z"
        fill="currentColor"
      />
    </svg>
  );
}