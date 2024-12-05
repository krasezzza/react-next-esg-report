'use client';

import { InputSelectProps } from '@/interfaces';
import { useState } from 'react';
import ButtonIcon from '../buttons/ButtonIcon';
import IconDropdownFilled from '../icons/IconDropdownFilled';

export default function InputSelect(props: InputSelectProps) {
  const {
    labelText,
    placeholderText,
    selectListItems,
    initialValue = '',
    customClasses,
    style = 'normal',
    disabled,
  } = props;

  const [hasError, setHasError] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBlurred = () => {
    setTimeout(() => {
      if (isOpen) {
        setIsOpen(false);
      }
    }, 250);
  };

  const handleSelected = (item: string) => {
    props.inputValue(item);
    setInputValue(item);
  };

  const wrapperClasses = () => {
    const baseClasses = `relative h-[50px] md:h-[72px] px-[12px] py-[8px] rounded-md flex flex-row items-center justify-center text-bgnd-dark shadow-inner border ${disabled ? 'opacity-80 cursor-not-allowed' : 'hover:bg-hover-light hover:border-blue-main cursor-pointer'}`;
    let classes = baseClasses;

    const whiteClasses = '';
    const normalClasses = 'text-bgnd-dark shadow-inner hover:border-blue-main';

    if (style === 'white') {
      classes += ` ${whiteClasses}`;
    } else {
      classes += ` ${normalClasses}`;
    }

    if (hasError) {
      classes += ' border-error-light';
    } else {
      if (isOpen) {
        classes += ' bg-layer-light border-blue-main';
      } else {
        classes += ' bg-bgnd-light border-stroke-light';
      }
    }

    if (customClasses) {
      classes += ` ${customClasses}`;
    }

    return classes;
  };

  const labelClasses = () => {
    let classes = 'md:text-sm';

    if (hasError) {
      classes += ' text-error-light';
    } else {
      if (style === 'white') {
        classes +=
          ' absolute px-[4px] top-[-12px] left-[16px] bg-inherit text-[10px] text-typo-scnd1';
      } else {
        classes += ' text-xs text-blue-main font-bold';
      }

      if (isOpen) {
        classes += ' opacity-100';
      } else {
        classes += ' opacity-80';
      }
    }

    return classes;
  };

  const inputClasses = () => {
    let classes = `w-full h-full bg-transparent outline-none text-xs md:text-sm placeholder:text-typo-scnd1 select-none border-b font-light md:pb-[4px] ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;

    if (hasError) {
      classes += ' border-error-light';
    } else {
      if (style === 'white') {
        classes += ' font-normal';
      }

      if (isOpen) {
        classes += ' border-typo-scnd1';
      } else {
        classes += ' border-blue-main';
      }
    }

    return classes;
  };

  const optionListClasses = () => {
    let classes =
      'absolute top-[50px] left-[-1px] right-[-1px] z-30 max-h-[125px] pt-[8px] pb-[12px] flex flex-col items-start justify-center gap-y-[4px] bg-layer-light text-sm rounded shadow-md select-none';

    if (style === 'white') {
      classes += ' border border-stroke-light';
    }

    if (isOpen) {
      classes += ' animate-fade-in-fast visible';
    } else {
      // TODO does not work as expected!
      classes += ' animate-fade-out invisible';
    }

    return classes;
  };

  const optionItemClasses =
    'w-full h-[30px] px-[16px] flex flex-row items-center gap-x-[6px] bg-layer-light hover:bg-hover-light text-typo-scnd1 cursor-pointer';

  return (
    <div
      className={wrapperClasses()}
      onClick={() => {
        if (!disabled) {
          setIsOpen(!isOpen);
        }
      }}
      onBlur={handleBlurred}
    >
      {style === 'white' && <span className={labelClasses()}>{labelText}</span>}

      <div className="text-typo-scnd1 w-full h-full flex flex-col items-start justify-center gap-[6px]">
        {style === 'normal' && (
          <span className={labelClasses()}>{labelText}</span>
        )}

        <div className="relative w-full h-[20px] flex flex-col items-center justify-center">
          <input
            type="text"
            value={inputValue}
            className={inputClasses()}
            placeholder={placeholderText}
            readOnly={true}
            disabled={disabled}
          />

          <div className="absolute bottom-[2px] right-0">
            <ButtonIcon
              iconElement={<IconDropdownFilled isOpen={isOpen} />}
              overrideClasses="w-[20px] h-[20px] transition-transform"
            />
          </div>
        </div>
      </div>

      <div className={optionListClasses()}>
        {selectListItems.length ? (
          <ul className="w-full overflow-y-auto hide-scrollbar">
            {selectListItems.map((item: string, idx: number) => (
              <li
                key={idx}
                className={optionItemClasses}
                onClick={() => handleSelected(item)}
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className={optionItemClasses}>No items matched</div>
        )}
      </div>
    </div>
  );
}
