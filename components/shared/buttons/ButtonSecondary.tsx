'use client';

import ButtonGeneric from './ButtonGeneric';

interface ButtonSecondaryProps {
  textValue: string;
  isDisabled?: boolean;
  onClickHandler?: () => void;
  additionalButtonClasses?: string;
}

export default function ButtonSecondary({
  textValue,
  isDisabled,
  onClickHandler,
  additionalButtonClasses,
}: ButtonSecondaryProps) {
  const additionalClasses = () => {
    let classes =
      'hover:!bg-hover-light !rounded-[7px] !text-sm md:!text-base !text-typo-scnd1 !font-semibold';

    if (additionalButtonClasses) {
      classes += ` ${additionalButtonClasses}`;
    }

    return classes;
  };

  return (
    <ButtonGeneric
      isDisabled={isDisabled}
      textValue={textValue}
      onClickHandler={onClickHandler}
      additionalClasses={additionalClasses()}
    />
  );
}
