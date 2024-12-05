'use client';

interface OptionSwitchProps {
  leftLabel: string;
  leftValue: string;
  rightLabel: string;
  rightValue: string;
  selectedValue: string;
  switchHandler: (value: string) => void;
  additionalContainerClasses?: string;
}

export default function OptionSwitch({
  leftLabel,
  leftValue,
  rightLabel,
  rightValue,
  selectedValue,
  switchHandler,
  additionalContainerClasses,
}: OptionSwitchProps) {
  const handleClick = (value: string) => {
    switchHandler(value);
  };

  const containerClasses = () => {
    let classes =
      'w-full md:w-auto min-w-[240px] h-[40px] py-[6px] px-[12px] flex items-center justify-center gap-x-[4px] border border-stroke-light rounded-md shadow-inner select-none';

    if (additionalContainerClasses) {
      classes += ` ${additionalContainerClasses}`;
    }

    return classes;
  };

  const buttonWrapperClasses =
    'w-full h-[30px] py-[6px] px-[8px] flex items-center justify-center rounded-md cursor-pointer';

  const leftButtonWrapperClasses = () => {
    let classes = buttonWrapperClasses;

    if (selectedValue === leftValue) {
      classes += ' border-2 border-blue-main';
    }

    return classes;
  };

  const rightButtonWrapperClasses = () => {
    let classes = buttonWrapperClasses;

    if (selectedValue === rightValue) {
      classes += ' border-2 border-blue-main';
    }

    return classes;
  };

  const buttonLabelClasses = 'text-xs cursor-pointer';

  const leftButtonLabelClasses = () => {
    let classes = buttonLabelClasses;

    if (selectedValue === leftValue) {
      classes += ' text-blue-main font-medium';
    }

    return classes;
  };

  const rightButtonLabelClasses = () => {
    let classes = buttonLabelClasses;

    if (selectedValue === rightValue) {
      classes += ' text-blue-main font-medium';
    }

    return classes;
  };

  return (
    <div className={containerClasses()}>
      <div
        className={leftButtonWrapperClasses()}
        onClick={() => handleClick(leftValue)}
      >
        <input
          type="radio"
          id={leftValue}
          name="optionSwitch"
          value={leftValue}
          className="hidden"
        />

        <label htmlFor={leftValue} className={leftButtonLabelClasses()}>
          {leftLabel}
        </label>
      </div>

      <div
        className={rightButtonWrapperClasses()}
        onClick={() => handleClick(rightValue)}
      >
        <input
          type="radio"
          id={rightValue}
          name="optionSwitch"
          value={rightValue}
          className="hidden"
        />

        <label htmlFor={rightValue} className={rightButtonLabelClasses()}>
          {rightLabel}
        </label>
      </div>
    </div>
  );
}
