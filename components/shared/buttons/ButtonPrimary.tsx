'use client';

import ButtonGeneric from './ButtonGeneric';

interface ButtonPrimaryProps {
  textValue: string;
  isDisabled?: boolean;
  onClickHandler?: () => void;
  additionalButtonClasses?: string;
}

export default function ButtonPrimary({
  textValue,
  isDisabled,
  onClickHandler,
  additionalButtonClasses,
}: ButtonPrimaryProps) {
  const additionalClasses = () => {
    let classes =
      '!bg-blue-main hover:!bg-hover-blue !rounded-[7px] !text-sm md:!text-base !text-layer-light !font-semibold';

    if (additionalButtonClasses) {
      classes += ` ${additionalButtonClasses}`;
    }

    return classes;
  };

  return (
    <ButtonGeneric
      isDisabled={isDisabled}
      textValue={textValue}
      onClickHandler={(e) => {
        if (onClickHandler) {
          e.preventDefault();
          onClickHandler();
        }
      }}
      additionalClasses={additionalClasses()}
    />
  );
}
