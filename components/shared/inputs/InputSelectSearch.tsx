'use client';

import { InputSelectSearchProps, SelectListItem } from '@/interfaces';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import ButtonIcon from '../buttons/ButtonIcon';
import IconDropdownFilled from '../icons/IconDropdownFilled';

export default function InputSelectSearch({
  customClasses,
  customInputClasses,
  labelText,
  placeholderText,
  selectListItems,
  required,
  currentValue = '',
  onChangeHandler,
  hasError,
}: InputSelectSearchProps) {
  const searchInput = useRef<HTMLInputElement>(null);

  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string>(currentValue);
  const [selectedItem, setSelectedItem] = useState<SelectListItem | undefined>(
    undefined,
  );
  const [filterQuery, setFilterQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<SelectListItem[]>([]);

  useEffect(() => {
    if (!inputValue.length) {
      setFilterQuery('');
    } else {
      setFilterQuery(inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    const result = selectListItems.filter((item) =>
      item.value.toLowerCase().includes(filterQuery.toLowerCase()),
    );
    setFilteredItems(result);
  }, [filterQuery, selectListItems]);

  const handleInputState = () => {
    if (searchInput.current) {
      if (isOptionsMenuOpen) {
        searchInput.current.blur();
      } else {
        setInputValue('');
        setSelectedItem(undefined);
        if (onChangeHandler) {
          onChangeHandler(undefined);
        }
        searchInput.current.focus();
      }
    }
    setIsOptionsMenuOpen(!isOptionsMenuOpen);
  };

  const handleChanged = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleSelected = (item: SelectListItem) => {
    setSelectedItem(item);
    setInputValue(item.value);
    if (onChangeHandler) {
      onChangeHandler(item);
    }
    setFilterQuery('');
  };

  const wrapperClasses = () => {
    let classes =
      'relative h-[50px] px-[8px] py-[6px] rounded-md flex flex-row items-center justify-center text-bgnd-dark shadow-inner border hover:bg-hover-light hover:border-blue-main cursor-pointer';

    if (hasError) {
      classes += ' border-red-light';
    } else {
      if (isFocused) {
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
    let classes = 'text-xs font-bold';

    if (hasError) {
      classes += ' text-red-light';
    } else {
      classes += ' text-blue-main';

      if (isFocused) {
        classes += ' opacity-100';
      } else {
        classes += ' opacity-80';
      }
    }

    return classes;
  };

  const inputClasses = () => {
    let classes =
      'w-full h-full bg-transparent outline-none text-xs placeholder:text-typo-scnd1 cursor-pointer placeholder:select-none border-b lg:text-[16px]';

    if (hasError) {
      classes += ' border-red-light';
    } else {
      if (isFocused) {
        classes += ' border-typo-scnd1';
      } else {
        classes += ' border-blue-main';
      }
    }

    if (customInputClasses) {
      classes += ` ${customInputClasses}`;
    }

    return classes;
  };

  const optionListClasses = () => {
    return 'absolute top-[50px] left-[-1px] right-[-1px] z-30 max-h-[125px] pt-[8px] pb-[12px] flex flex-col items-start justify-center gap-y-[4px] bg-layer-light text-sm rounded shadow-md select-none';
  };

  const optionItemClasses =
    'w-full h-[30px] px-[16px] flex flex-row items-center gap-x-[6px] bg-layer-light hover:bg-hover-light text-typo-scnd1 cursor-pointer whitespace-nowrap';

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (isOptionsMenuOpen) {
          setIsOptionsMenuOpen(false);
          if (!selectedItem) {
            setInputValue('');
          }
        }
      }}
      display="contents"
    >
      <div className={wrapperClasses()} onClick={handleInputState}>
        <div className="text-typo-scnd1 w-full h-full flex flex-col items-start justify-center">
          <span className={labelClasses()}>
            {labelText}{' '}
            <span className={`${required ? 'text-blue-main' : 'hidden'}`}>
              *
            </span>
          </span>

          <div className="relative w-full h-[20px] flex flex-col items-center justify-center">
            <input
              type="text"
              ref={searchInput}
              value={inputValue}
              onChange={handleChanged}
              className={inputClasses()}
              placeholder={placeholderText}
            />

            <div className="absolute bottom-[2px] right-0">
              <ButtonIcon
                iconElement={<IconDropdownFilled isOpen={isOptionsMenuOpen} />}
                overrideClasses="w-[20px] h-[20px] transition-transform hover:text-bgnd-dark"
              />
            </div>
          </div>
        </div>

        {isOptionsMenuOpen && (
          <div className={optionListClasses()}>
            {filteredItems.length ? (
              <ul className="w-full overflow-y-auto hide-scrollbar">
                {filteredItems.map((item: SelectListItem, idx: number) => (
                  <li
                    key={idx}
                    className={optionItemClasses}
                    onClick={() => handleSelected(item)}
                  >
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.value}
                        width={20}
                        height={20}
                        className="w-[20px] h-[20px] rounded-full"
                        loading="lazy"
                      />
                    )}
                    <span className="truncate">{item.value}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div
                className={optionItemClasses}
                onClick={() => {
                  if (!selectedItem) {
                    setInputValue('');
                  }
                }}
              >
                No items matched
              </div>
            )}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}
