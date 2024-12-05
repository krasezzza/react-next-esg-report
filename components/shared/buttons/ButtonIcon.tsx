'use client';

import { ButtonIconProps } from '@/interfaces';
import ButtonGeneric from './ButtonGeneric';
import ButtonTooltipDescription from './ButtonTooltipDescription';

export default function ButtonIcon({
  isDisabled,
  iconElement,
  onClickHandler,
  tooltipContent,
  tooltipMarginTopClass = 'mt-[32px] md:mt-[42px]',
  tooltipMinWidthClass,
  overrideWrapperClasses,
  additionalWrapperClasses,
  overrideClasses,
  additionalClasses,
}: ButtonIconProps) {
  const wrapperClasses = () => {
    let classes = 'relative flex flex-col items-center justify-center group';

    if (additionalWrapperClasses) {
      classes += ` ${additionalWrapperClasses}`;
    }
    if (overrideWrapperClasses) {
      classes = overrideWrapperClasses;
    }

    return classes;
  };

  const additionalButtonClasses = () => {
    let classes =
      '!w-[25px] !h-[25px] md:!w-[35px] md:!h-[35px] text-typo-scnd2 hover:text-typo-scnd1';

    if (additionalClasses) {
      classes += ` ${additionalClasses}`;
    }

    return classes;
  };

  return (
    <div className={wrapperClasses()}>
      {tooltipContent && (
        <ButtonTooltipDescription
          tooltipContent={tooltipContent}
          tooltipMarginTopClass={tooltipMarginTopClass}
          tooltipMinWidthClass={tooltipMinWidthClass}
        />
      )}

      <ButtonGeneric
        isDisabled={isDisabled}
        iconElement={iconElement}
        onClickHandler={onClickHandler}
        overrideClasses={overrideClasses}
        additionalClasses={additionalButtonClasses()}
      />
    </div>
  );
}
