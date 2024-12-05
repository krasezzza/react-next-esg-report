'use client';

import ScrollableContent from './ScrollableContent';

interface WrapperSectionScrollableProps {
  children: React.ReactNode;
  heightClasses?: string;
  additionalClasses?: string;
}

export default function WrapperSectionScrollable({
  children,
  heightClasses = 'h-[240px]',
  additionalClasses,
}: WrapperSectionScrollableProps) {
  const wrapperClasses = () => {
    let classes = `w-full p-[12px] flex flex-col items-start justify-start gap-y-[8px] bg-bgnd-light border border-stroke-light shadow-[0_2px_4px_0_#0000001A_inset] rounded-[5px] text-[12px] md:text-[14px] font-normal ${heightClasses}`;

    if (additionalClasses) {
      classes += ` ${additionalClasses}`;
    }

    return classes;
  };

  return (
    <ScrollableContent customClasses={wrapperClasses()}>
      {children}
    </ScrollableContent>
  );
}
