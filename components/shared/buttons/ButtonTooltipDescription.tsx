'use client';

interface TooltipDescriptionProps {
  tooltipContent?: string;
  tooltipMarginTopClass?: string;
  tooltipMinWidthClass?: string;
  tooltipMinHeightClass?: string;
}

export default function ButtonTooltipDescription({
  tooltipContent,
  tooltipMarginTopClass = 'mt-[40px]',
  tooltipMinWidthClass = 'min-w-[75px]',
  tooltipMinHeightClass = 'min-h-[35px]',
}: TooltipDescriptionProps) {
  const tooltipWrapperClasses = `absolute top-0 flex flex-col items-center invisible group-hover:visible delay-0 group-hover:delay-1000 ${tooltipMarginTopClass}`;

  const tooltopTriangleClasses =
    'w-3 h-3 z-20 -mb-[6.2px] rotate-45 bg-bgnd-light shadow-[-4px_-4px_6px_0_#00000012] border-t border-l border-stroke-light';

  const tooltipDescriptionClasses = `relative z-10 px-[12px] flex items-center justify-center text-center leading-none text-bgnd-dark whitespace-no-wrap bg-bgnd-light rounded-[7px] shadow-[0px_2px_8px_0_#00000033] border border-stroke-light text-xs font-light ${tooltipMinWidthClass} ${tooltipMinHeightClass}`;

  return (
    <div className={tooltipWrapperClasses}>
      <div className={tooltopTriangleClasses} />

      <span className={tooltipDescriptionClasses}>{tooltipContent}</span>
    </div>
  );
}
