'use client';

import ButtonIcon from '../buttons/ButtonIcon';
import IconCopy from '../icons/IconCopy';

interface InputCopyFromProps {
  customClasses?: string;
  labelText: string;
  valueText: string;
}

export default function InputCopyFrom({
  customClasses,
  labelText,
  valueText,
}: InputCopyFromProps) {
  const wrapperClasses = () => {
    let classes =
      'relative h-[50px] md:h-[72px] px-[8px] py-[6px] rounded-md flex flex-col items-start justify-center gap-y-[2px] md:gap-y-[6px] text-typo-landing2 shadow-inner bg-bgnd-light hover:bg-hover-light border border-stroke-light hover:border-blue-main';

    if (customClasses) {
      classes += ` ${customClasses}`;
    }

    return classes;
  };

  const handleCopyValue = () => {
    navigator.clipboard.writeText(valueText);
  };

  return (
    <div className={wrapperClasses()}>
      <span className="text-xs text-blue-main font-bold">{labelText}</span>

      <div className="relative w-full h-[20px] flex flex-col items-center justify-center">
        <input
          readOnly
          type="text"
          defaultValue={valueText}
          className="w-full h-full pr-[36px] bg-transparent outline-none text-xs md:text-base border-b border-blue-main"
        />

        <div className="absolute bottom-[5px] right-[0px]">
          <ButtonIcon
            iconElement={<IconCopy />}
            onClickHandler={handleCopyValue}
            tooltipContent="Copy to clipboard"
            tooltipMarginTopClass="mt-[37px]"
            tooltipMinWidthClass="!w-[130px]"
            additionalClasses="!w-[30px] !h-[30px] md:!w-[30px] md:!h-[30px]"
          />
        </div>
      </div>
    </div>
  );
}
