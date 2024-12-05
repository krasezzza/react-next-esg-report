'use client';

interface PlaceholderProps {
  textValue: string;
  additionalClasses?: string;
}

export default function Placeholder({
  textValue,
  additionalClasses,
}: PlaceholderProps) {
  const wrapperClasses = () => {
    let classes =
      'w-full h-full px-[24px] flex flex-col items-center justify-center text-base text-center text-typo-scnd2 font-light';

    if (additionalClasses) {
      classes += ` ${additionalClasses}`;
    }

    return classes;
  };

  return <div className={wrapperClasses()}>{textValue}</div>;
}
