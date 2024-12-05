'use client';

import { IconProps } from './interfaces';

interface IconDropdownProps extends IconProps {
  isOpen?: boolean;
  strokeWidth?: number;
}

export default function IconDropdown(props: IconDropdownProps) {
  const computedClasses = () => {
    let classes = 'transition-transform';

    if (props.isOpen) {
      classes += ' rotate-180';
    }
    if (props.className) {
      classes += ` ${props.className}`;
    } else {
      classes += ' w-[14px] h-[14px]';
    }

    return classes;
  };

  return (
    <svg viewBox="0 0 42 23" fill="none" className={computedClasses()}>
      <path
        d="M1 1L21 21L41 1.00001"
        stroke="currentColor"
        strokeWidth={props.strokeWidth || 2}
        strokeLinecap="round"
      />
    </svg>
  );
}
