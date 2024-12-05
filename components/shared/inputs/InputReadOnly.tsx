'use client';

interface InputReadOnlyProps {
  style?: 'normal' | 'white';
  label?: string;
  labelSize?: 'small' | 'large';
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  value: string;
  additionalClasses?: string;
  overrideClasses?: string;
  customInputClasses?: string;
  customLabelClasses?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export default function InputReadOnly({
  style = 'normal',
  label,
  labelSize = 'small',
  iconLeft,
  iconRight,
  value,
  additionalClasses,
  overrideClasses,
  customInputClasses,
  type = 'text',
  customLabelClasses,
  placeholder,
  required,
}: InputReadOnlyProps) {
  const wrapperClasses = () => {
    const baseClasses =
      'w-full p-[12px] flex items-center border border-stroke-light rounded-[5px]';
    let classes = baseClasses;

    const whiteClasses = 'h-[50px] justify-start bg-layer-light';
    const normalClasses =
      'h-[25px] md:h-[35px] px-[4px] md:px-[8px] justify-center bg-bgnd-light shadow-inner';

    if (style === 'white') {
      classes += ` ${whiteClasses}`;
    } else {
      classes += ` ${normalClasses}`;
    }

    if (label) {
      classes += ' relative !pt-[16px]';
    }

    if (additionalClasses) {
      classes += ` ${additionalClasses}`;
    }

    if (overrideClasses) {
      classes = overrideClasses;
    }

    return classes;
  };

  const labelClasses = () => {
    let classes = `absolute px-[4px] top-[-10px] left-[16px] bg-inherit text-typo-scnd1 ${customLabelClasses}`;

    if (labelSize === 'large') {
      classes += ' md:top-[-12px] text-[12px] md:text-[14px]';
    } else {
      classes += ' md:top-[-8px] text-xs';
    }

    return classes;
  };

  const inputClasses = () => {
    let classes =
      'w-full bg-inherit text-[12px] md:text-sm text-center md:text-left text-typo-dark font-medium outline-none placeholder:text-typo-scnd2 placeholder:text-[12px] md:placeholder:text-[14px] placeholder:font-light capitalize';

    if (customInputClasses) {
      classes += ` ${customInputClasses}`;
    }

    return classes;
  };

  return (
    <div className={wrapperClasses()}>
      {label && (
        <span className={labelClasses()}>
          {label}{' '}
          <span className={`${required ? 'text-blue-main' : 'hidden'}`}>*</span>
        </span>
      )}
      {iconLeft && iconLeft}
      <input
        defaultValue={value}
        className={inputClasses()}
        readOnly={true}
        type={type}
        placeholder={placeholder}
      />
      {iconRight && iconRight}
    </div>
  );
}
