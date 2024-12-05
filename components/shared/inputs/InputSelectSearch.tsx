'use client';

import { useMainContext } from '@/context/MainContext';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import ButtonIcon from '../buttons/ButtonIcon';
import IconDropdownFilled from '../icons/IconDropdownFilled';

export interface InputSelectSearchProps {
  customClasses?: string;
  customInputClasses?: string;
  labelText?: string;
  placeholderText: string;
  selectListItems: string[];
  required?: boolean;
  currentValue?: string;
  hasError?: boolean;
  onChangeHandler?: (value: string) => void;
}

export default function InputSelectSearch({
  customClasses,
  customInputClasses,
  labelText,
  placeholderText,
  selectListItems,
  required,
  currentValue = '',
  hasError,
  onChangeHandler,
}: InputSelectSearchProps) {
  const searchInput = useRef<HTMLInputElement>(null);

  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string>(currentValue);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [filterQuery, setFilterQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const { queryName, setQueryName } = useMainContext();

  useEffect(() => {
    if (!inputValue.length) {
      setFilterQuery('');
    } else {
      setFilterQuery(inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    if (selectListItems.length) {
      const result = selectListItems.filter((item) =>
        item.toLowerCase().includes(filterQuery.toLowerCase()),
      );
      setFilteredItems(result);
    }
  }, [filterQuery, selectListItems]);

  const handleInputState = () => {
    if (searchInput.current) {
      if (isOptionsMenuOpen) {
        searchInput.current.blur();
      } else {
        setInputValue('');
        setSelectedItem('');

        if (onChangeHandler) {
          onChangeHandler('');
        }

        searchInput.current.focus();
      }
    }
    setIsOptionsMenuOpen(!isOptionsMenuOpen);
  };

  const handleChanged = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleSelected = (item: string) => {
    setSelectedItem(item);
    setInputValue(item);

    if (onChangeHandler) {
      onChangeHandler(item);
    }

    setFilterQuery('');
  };

  const wrapperClasses = () => {
    let classes =
      'relative h-[40px] px-[8px] py-[6px] rounded-md flex flex-row items-center justify-center text-bgnd-dark shadow-inner border hover:bg-hover-light hover:border-blue-main cursor-pointer';

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
      'w-full h-full bg-transparent outline-none text-xs placeholder:text-typo-scnd1 cursor-pointer placeholder:select-none lg:text-[16px]';

    if (customInputClasses) {
      classes += ` ${customInputClasses}`;
    }

    return classes;
  };

  const dropdownClasses = () => {
    return 'absolute top-[41px] left-[-1px] right-[-1px] z-30 max-h-[125px] pt-[8px] pb-[12px] flex flex-col items-start justify-center gap-y-[4px] bg-[#333] text-xs rounded shadow-md select-none border';
  };

  const optionItemClasses =
    'w-full h-[30px] px-[16px] flex flex-row items-center gap-x-[6px] bg-layer-light hover:bg-hover-light text-typo-scnd1 cursor-pointer whitespace-nowrap';

  return (
    <div className={wrapperClasses()} onClick={handleInputState}>
      <div className="text-typo-scnd1 w-full h-full flex flex-col items-start justify-center">
        {labelText && (
          <span className={labelClasses()}>
            {labelText}{' '}
            <span className={`${required ? 'text-blue-main' : 'hidden'}`}>
              *
            </span>
          </span>
        )}

        <div className="relative w-full h-[20px] flex flex-col items-center justify-center">
          <input
            type="text"
            ref={searchInput}
            value={inputValue}
            onChange={handleChanged}
            className={inputClasses()}
            placeholder={placeholderText}
          />

          <div className="absolute bottom-0 right-0">
            <ButtonIcon
              iconElement={<IconDropdownFilled isOpen={isOptionsMenuOpen} />}
              overrideClasses="w-[20px] h-[20px] flex flex-col items-center justify-center transition-transform hover:text-bgnd-dark"
            />
          </div>
        </div>
      </div>

      {isOptionsMenuOpen && (
        <div className={dropdownClasses()}>
          {filteredItems.length ? (
            <ul className="w-full overflow-y-auto hide-scrollbar">
              {filteredItems.map((item: string, idx: number) => (
                <li
                  key={idx}
                  className={optionItemClasses}
                  onClick={() => handleSelected(item)}
                >
                  <span className="truncate">{item}</span>
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
  );
}
