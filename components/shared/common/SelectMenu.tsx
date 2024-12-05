'use client';
import ScrollableContent from '@/components/shared/wrappers/ScrollableContent';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import IconDropdownFilled from '../icons/IconDropdownFilled';

interface SelectMenuProps {
  label: string;
  options: string[];
  selectedOption: (option: number) => void;
  wrapperCustomClasses?: string;
  selectorCustomClasses?: string;
  menuCustomClasses?: string;
  labelCustomClasses?: string;
  labelSize?: string;
}

export default function SelectMenu(props: SelectMenuProps) {
  const {
    label,
    labelCustomClasses,
    labelSize,
    wrapperCustomClasses = 'w-full',
    selectorCustomClasses,
    menuCustomClasses,
    options,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(2);

  const selectorClasses = `relative w-full h-[35px] p-[12px] pt-[16px] flex items-center justify-start border border-stroke-light rounded-[4px] hover:bg-hover-light hover:text-typo-dark cursor-pointer ${selectorCustomClasses} ${isOpen ? 'bg-hover-light' : ''}`;

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
      <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
        <div
          className={selectorClasses}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          data-id="select-menu-button"
        >
          <span className={labelClasses()}>{label}</span>
          <div className="flex justify-between items-center w-full text-xs md:text-sm">
            <span>{options[selectedOption]}</span>
            <div
              className={`hover:text-typo-scnd1 cursor-pointer ${isOpen ? 'text-typo-scnd1' : 'text-typo-scnd2'}`}
            >
              <IconDropdownFilled
                isOpen={isOpen}
                className="w-[10px] h-[5px]"
              />
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className={`w-[120px] mt-[2px] absolute bg-layer-light z-50 ${menuCustomClasses}`}
          >
            <ScrollableContent customClasses="flex flex-col rounded-[4px] menu-box-shadow max-h-[200px]">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`${optionClasses} ${selectedOption === index && 'bg-hover-light'}`}
                  onClick={() => {
                    setSelectedOption(index);
                    props.selectedOption(index);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </ScrollableContent>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
}
