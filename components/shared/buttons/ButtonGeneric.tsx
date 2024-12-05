'use client';

import { IconPosition } from '@/enums';
import { ButtonGenericProps } from '@/interfaces';
import { useRef } from 'react';

export default function ButtonGeneric({
  isDisabled = false,
  textValue,
  iconElement,
  iconPosition = IconPosition.LEFT,
  onClickHandler,
  overrideClasses,
  additionalClasses,
}: ButtonGenericProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const buttonClasses = () => {
    let classes = '';

    const defaultClasses =
      'w-full h-[50px] flex items-center justify-center gap-x-[8px] lg:gap-x-[12px] rounded-[5px] text-xs md:text-sm bg-layer-light border border-stroke-light hover:bg-hover-light text-typo-scnd2 hover:text-typo-scnd1 cursor-pointer select-none transition duration-300';

    if (additionalClasses) {
      classes += `${defaultClasses} ${additionalClasses}`;
    }

    if (isDisabled) {
      classes +=
        ' !bg-hover-light hover:!bg-hover-light !border-none !text-typo-scnd2 !font-semibold';
    }

    if (overrideClasses) {
      classes = overrideClasses;
    }

    return classes;
  };

  return (
    <div
      ref={buttonRef}
      className={buttonClasses()}
      onClick={!isDisabled && onClickHandler ? onClickHandler : () => {}}
    >
      {iconElement && iconPosition === IconPosition.LEFT && iconElement}

      {textValue && <span className="mx-[4px] ">{textValue}</span>}

      {iconElement && iconPosition === IconPosition.RIGHT && iconElement}
    </div>
  );
}
