'use client';

interface WrapperSectionProps {
  children: React.ReactNode;
  additionalClasses?: string;
}

export default function WrapperSection({
  children,
  additionalClasses,
}: WrapperSectionProps) {
  const wrapperClasses = () => {
    let classes =
      'w-full px-[12px] md:px-[24px] pt-[20px] pb-[32px] flex flex-col items-start justify-start bg-layer-light border border-stroke-light text-typo-dark rounded-[7px] drop-shadow-1';

    if (additionalClasses) {
      classes += ` ${additionalClasses}`;
    }

    return classes;
  };

  return <div className={wrapperClasses()}>{children}</div>;
}
