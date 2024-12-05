'use client';

import { useRef, useState } from 'react';

export interface InputBaseProps {
  customClasses?: string;
  labelText: string;
  placeholderText: string;
  currentValue?: string;
  onChangeHandler?: (value: string) => void;
  error?: string;
  icon?: React.ReactElement;
}

export default function InputBase({
  customClasses,
  labelText,
  placeholderText,
  currentValue,
  onChangeHandler,
  error,
  icon,
}: InputBaseProps) {
  const searchInput = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleWrapperFocused = () => {
    if (searchInput.current) {
      searchInput.current.focus();
      searchInput.current.select();
    }
  };

  const handleBlurred = () => {
    setTimeout(() => {
      if (isFocused) {
        setIsFocused(false);
      }
    }, 250);
  };

  const handleInputFocused = () => {
    setIsFocused(!isFocused);
  };

  const handleInputClicked = () => {
    setIsFocused(true);
  };

  const wrapperClasses = () => {
    let classes =
      'relative h-[50px] px-[8px] py-[6px] rounded-md flex flex-row items-center justify-center text-bgnd-dark shadow-inner border hover:bg-hover-light hover:border-blue-main';

    if (error) {
      classes += ' border-red-light';
    } else {
      if (isFocused) {
        classes += ' bg-layer-light border-blue-main';
      } else {
        classes += ' bg-bgnd-light border-stroke-light';
      }
    }

    if (customClasses) {
      classes += ` ${customClasses}`;
    }

    return classes;
  };

  const labelClasses = () => {
    let classes = 'text-xs font-bold';

    if (error) {
      classes += ' text-red-light';
    } else {
      classes += ' text-blue-main';

      if (isFocused) {
        classes += ' opacity-100';
      } else {
        classes += ' opacity-80';
      }
    }

    return classes;
  };

  const inputClasses = () => {
    let classes =
      'w-full h-full bg-transparent outline-none text-xs placeholder:text-typo-scnd1 placeholder:select-none md:text-[16px]';

    if (error) {
      classes += ' border-red-light';
    } else {
      if (isFocused) {
        classes += ' border-typo-scnd1';
      } else {
        classes += ' border-blue-main';
      }
    }

    return classes;
  };

  return (
    <div
      className={wrapperClasses()}
      onClick={handleWrapperFocused}
      onBlur={handleBlurred}
    >
      <div className="text-typo-scnd1 w-full h-full flex flex-col items-start justify-center">
        <span className={labelClasses()}>{labelText}</span>

        <div className="relative w-full h-[20px] flex flex-col items-center justify-center">
          <input
            type="text"
            ref={searchInput}
            value={currentValue}
            onChange={(e) => {
              e.preventDefault();
              if (onChangeHandler) {
                onChangeHandler(e.target.value);
              }
            }}
            onFocus={handleInputFocused}
            onClick={handleInputClicked}
            className={inputClasses()}
            placeholder={placeholderText}
          />
        </div>
      </div>
      {icon && icon}
    </div>
  );
}
