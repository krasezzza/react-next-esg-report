'use client';

interface WrapperSectionInboxProps {
  children: React.ReactNode;
  additionalClasses?: string;
}

export default function WrapperSectionInbox({
  children,
  additionalClasses,
}: WrapperSectionInboxProps) {
  const wrapperClasses = () => {
    let classes =
      'px-[12px] flex items-center justify-center bg-bgnd-light border border-stroke-light shadow-[0_2px_4px_0_#0000001A_inset] rounded-[5px] text-[12px] md:text-[14px] font-normal';

    if (additionalClasses) {
      classes += ` ${additionalClasses}`;
    }

    return classes;
  };

  return <div className={wrapperClasses()}>{children}</div>;
}
