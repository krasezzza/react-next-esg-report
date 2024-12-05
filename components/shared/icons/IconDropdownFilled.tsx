'use client';

interface IconDropdownFilledProps {
  width?: number;
  height?: number;
  isOpen?: boolean;
  className?: string;
  strokeWidth?: number;
}

export default function IconDropdownFilled(props: IconDropdownFilledProps) {
  const computedClasses = () => {
    let classes = 'transition-transform';

    if (props.isOpen) {
      classes += ' rotate-180';
    }
    if (props.className) {
      classes += ` ${props.className}`;
    } else {
      classes += ' w-[11px] h-[6px]';
    }

    return classes;
  };

  return (
    <svg viewBox="0 0 11 6" fill="none" className={computedClasses()}>
      <path
        d="M0.0496826 0.261719L5.04968 5.26172L10.0497 0.261719H0.0496826Z"
        fill="currentColor"
      />
    </svg>
  );
}
