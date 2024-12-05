'use client';

import { useState } from 'react';
import IconDropdownFilled from '../icons/IconDropdownFilled';
import WrapperScrollable from '../wrappers/WrapperScrollable';

interface SelectProps {
  options: any[];
  setCurrentOption: (value: any) => void;
  label?: string;
  labelSize?: string;
  labelCustomClasses?: string;
  wrapperCustomClasses?: string;
  selectorCustomClasses?: string;
  menuCustomClasses?: string;
}

export default function Select({
  options,
  setCurrentOption,
  label,
  labelSize,
  labelCustomClasses,
  wrapperCustomClasses,
  selectorCustomClasses,
  menuCustomClasses
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectorClasses = `relative w-[90px] h-[35px] p-[12px] pt-[16px] flex items-center justify-start border border-stroke-light rounded-[4px] hover:bg-hover-light hover:text-typo-dark cursor-pointer ${selectorCustomClasses} ${isOpen ? 'bg-hover-light' : ''}`;

  const dropdownClasses = () => {
    return `absolute w-[90px] mt-[2px] bg-[#333] z-50 rounded shadow-md select-none border ${menuCustomClasses}`;
  };

  const optionClasses: string =
    'px-[16px] py-[6px] hover:bg-bgnd-light cursor-pointer';

  const labelClasses = () => {
    let classes = `absolute px-[4px] top-[-8px] left-[16px] font-light text-typo-scnd2 rounded-[4px] bg-layer-light ${labelCustomClasses}`;

    if (labelSize === 'large') {
      classes += ' text-xs';
    } else {
      classes += ' text-[10px]';
    }

    return classes;
  };

  return (
    <div className={wrapperCustomClasses}>
      <div
        className={selectorClasses}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        data-id="select-menu-button"
      >
        {label && (
          <span className={labelClasses()}>{label}</span>
        )}
        <div className="flex justify-between items-center w-full text-xs md:text-sm">
          <span>{options[selectedIndex]}</span>
          <div
            className={`hover:text-typo-scnd1 cursor-pointer ${isOpen ? 'text-typo-scnd1' : 'text-typo-scnd2'}`}
          >
            <IconDropdownFilled isOpen={isOpen} className="w-[10px] h-[5px]" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={dropdownClasses()}
        >
          <WrapperScrollable customClasses="flex flex-col rounded-[4px] menu-box-shadow max-h-[200px]">
            {options.map((option, index) => (
              <div
                key={index}
                className={`${optionClasses} ${selectedIndex === index && 'bg-hover-light'}`}
                onClick={() => {
                  setSelectedIndex(index);
                  setCurrentOption(options[index]);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </WrapperScrollable>
        </div>
      )}
    </div>
  );
}
