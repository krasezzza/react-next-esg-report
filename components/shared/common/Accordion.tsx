'use client';

interface AccordionProps {
  isOpen: boolean;
  onClickHandler: () => void;
  headerContent: JSX.Element;
  bodyContent: JSX.Element;
  additionalWrapperClasses?: string;
  overrideWrapperClasses?: string;
  additionalHeaderClasses?: string;
  overrideHeaderClasses?: string;
  additionalBodyClasses?: string;
  overrideBodyClasses?: string;
}

export default function Accordion({
  isOpen,
  onClickHandler,
  headerContent,
  bodyContent,
  additionalWrapperClasses,
  overrideWrapperClasses,
  additionalHeaderClasses,
  overrideHeaderClasses,
  additionalBodyClasses,
  overrideBodyClasses,
}: AccordionProps) {
  const wrapperClasses = () => {
    let classes =
      'w-full flex flex-col items-center justify-center border border-stroke-light bg-layer-light shadow rounded-[5px]';

    if (additionalWrapperClasses) {
      classes += ` ${additionalWrapperClasses}`;
    }
    if (overrideWrapperClasses) {
      classes = overrideWrapperClasses;
    }

    return classes;
  };

  const headerClasses = () => {
    let classes = 'w-full px-[4px] py-[6px] flex items-center cursor-pointer';

    if (additionalHeaderClasses) {
      classes += ` ${additionalHeaderClasses}`;
    }
    if (overrideHeaderClasses) {
      classes = overrideHeaderClasses;
    }

    return classes;
  };

  const bodyClasses = () => {
    let classes = 'w-full px-[12px] py-[8px]';

    if (isOpen) {
      classes += ' flex flex-col items-center border-t border-stroke-light';
    } else {
      classes += ' hidden';
    }
    if (additionalBodyClasses) {
      classes += ` ${additionalBodyClasses}`;
    }
    if (overrideBodyClasses) {
      classes = overrideBodyClasses;
    }

    return classes;
  };

  return (
    <div className={wrapperClasses()}>
      <div onClick={onClickHandler} className={headerClasses()}>
        {headerContent}
      </div>

      <div className={bodyClasses()}>{bodyContent}</div>
    </div>
  );
}
