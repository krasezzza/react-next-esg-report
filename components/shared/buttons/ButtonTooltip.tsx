'use client';

import IconQuestionMark from '../icons/IconQuestionMark';
import { ButtonIconProps } from './ButtonIcon';
import ButtonTooltipDescription from './ButtonTooltipDescription';

export default function ButtonTooltip({
  iconClasses = 'w-[18px] h-[18px]',
  tooltipContent,
  tooltipMinWidthClass = 'min-w-[180px]',
  tooltipMinHeightClass = 'min-h-[75px]',
}: ButtonIconProps) {
  const tooltipWrapperClasses =
    'relative flex flex-col items-center group text-typo-scnd2 hover:text-typo-scnd1';

  return (
    <div className={tooltipWrapperClasses}>
      <ButtonTooltipDescription
        tooltipContent={tooltipContent}
        tooltipMarginTopClass="mt-[24px]"
        tooltipMinWidthClass={tooltipMinWidthClass}
        tooltipMinHeightClass={tooltipMinHeightClass}
      />

      <IconQuestionMark className={iconClasses} />
    </div>
  );
}
