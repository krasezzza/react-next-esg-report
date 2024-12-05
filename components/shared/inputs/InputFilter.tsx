'use client';

import FilterCheckbox from '@/components/api-dashboard/EndpointsPopups/FilterCheckbox';
import { useApiDashboardContext } from '@/context/ApiDashboardContext';
import { useScreenSize } from '@/hooks/useScreenSize';
import { InputFilterProps } from '@/interfaces';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import ButtonIcon from '../buttons/ButtonIcon';
import FilterTag from '../common/FilterTag';
import IconDropdownFilled from '../icons/IconDropdownFilled';

export default function FilterInput(props: InputFilterProps) {
  const { labelText, selectListItems, customClasses } = props;
  const [screenWidth] = useScreenSize();

  const [hasError, setHasError] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    selectedProtocols,
    setSelectedProtocols,
    selectedNetworks,
    setSelectedNetworks,
    selectedApis,
    setSelectedApis,
  } = useApiDashboardContext();

  const handleOptionsMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (item: any, e: any) => {
    e.preventDefault();
    e.stopPropagation();
    switch (labelText) {
      case 'Protocol':
        setSelectedProtocols((prevItems) => {
          if (prevItems.includes(item)) {
            return prevItems.filter((selectedItem) => selectedItem !== item);
          } else {
            return [...prevItems, item];
          }
        });
        break;

      case 'Network':
        setSelectedNetworks((prevItems) => {
          if (prevItems.includes(item)) {
            return prevItems.filter((selectedItem) => selectedItem !== item);
          } else {
            return [...prevItems, item];
          }
        });
        break;

      case 'API':
        setSelectedApis((prevItems) => {
          if (prevItems.includes(item)) {
            return prevItems.filter((selectedItem) => selectedItem !== item);
          } else {
            return [...prevItems, item];
          }
        });
        break;

      default:
        break;
    }
  };

  const handleTagRemove = (item: any, e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (labelText === 'Protocol') {
      setSelectedProtocols((prevItems) =>
        prevItems.filter((selectedItem) => selectedItem.displayName !== item),
      );
    } else if (labelText === 'Network') {
      setSelectedNetworks((prevItems) =>
        prevItems.filter((selectedItem) => selectedItem !== item),
      );
    } else {
      setSelectedApis((prevItems) =>
        prevItems.filter((selectedItem) => selectedItem !== item),
      );
    }
  };

  const wrapperClasses = () => {
    let classes =
      'relative h-[50px] px-[8px] py-[6px] rounded-md flex flex-row items-center justify-center text-bgnd-dark shadow-inner border hover:bg-hover-light hover:border-blue-main cursor-pointer';

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
    let classes = 'text-xs font-bold';

    if (hasError) {
      classes += ' text-error-light';
    } else {
      classes += ' text-blue-main';

      if (isOpen) {
        classes += ' opacity-100';
      } else {
        classes += ' opacity-80';
      }
    }

    return classes;
  };

  const inputClasses = () => {
    let classes = `w-full h-[25px] flex items-center bg-transparent outline-none text-xs placeholder:text-typo-scnd1 cursor-pointer select-none border-b lg:text-[16px]`;

    if (hasError) {
      classes += ' border-error-light';
    } else {
      if (isOpen) {
        classes += ' border-typo-scnd1';
      } else {
        classes += ' border-blue-main';
      }
    }

    return classes;
  };

  const optionListClasses =
    'absolute top-[50px] left-[-1px] right-[-1px] z-30 max-h-[125px] pt-[8px] pb-[12px] flex flex-col items-start justify-center gap-y-[4px] bg-layer-light text-sm rounded shadow-md select-none';

  const optionItemClasses =
    'w-full h-[30px] px-[16px] flex flex-row items-center gap-x-[6px] bg-layer-light hover:bg-hover-light text-typo-scnd1 cursor-pointer';

  const renderTags = (array: any) => {
    return (
      <div className="flex gap-[4px] items-center w-full">
        <div className="flex gap-[4px] max-w-[calc(100%-24px)] overflow-x-hidden">
          {array
            .filter((item: string, index: number) => {
              if (screenWidth < 768) {
                return index < 2;
              } else {
                return index < array.length;
              }
            })
            .map((item: string, idx: number) => (
              <FilterTag
                key={idx}
                text={item}
                onRemove={(e) => handleTagRemove(item, e)}
              />
            ))}
        </div>

        {array.length >= 2 && <span className="md:hidden">...</span>}
      </div>
    );
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}
      display="contents"
    >
      <div className={wrapperClasses()} onClick={handleOptionsMenu}>
        <div className="text-typo-scnd1 w-full h-full flex flex-col items-start justify-center">
          <span className={labelClasses()}>{labelText}</span>

          <div className="relative w-full h-[25px] flex flex-col items-center justify-center">
            {labelText === 'Protocol' && (
              <div className={inputClasses()}>
                {selectedProtocols.length === 0
                  ? 'Choose Protocol'
                  : renderTags(
                      selectedProtocols.map((item) => item.displayName),
                    )}
              </div>
            )}
            {labelText === 'Network' && (
              <div className={inputClasses()}>
                {selectedNetworks.length === 0
                  ? 'Choose Network'
                  : renderTags(selectedNetworks)}
              </div>
            )}
            {labelText === 'API' && (
              <div className={inputClasses()}>
                {selectedApis.length === 0
                  ? 'Choose API'
                  : renderTags(selectedApis)}
              </div>
            )}

            <div className="absolute bottom-[2px] right-0">
              <ButtonIcon
                iconElement={<IconDropdownFilled isOpen={isOpen} />}
                overrideClasses="w-[20px] h-[20px] transition-transform hover:text-bgnd-dark"
              />
            </div>
          </div>
        </div>

        {isOpen && (
          <div className={optionListClasses}>
            <ul className="w-full overflow-y-auto hide-scrollbar">
              {selectListItems.map((item, idx: number) => (
                <li key={idx}>
                  {labelText === 'Protocol' && (
                    <FilterCheckbox
                      customClasses={optionItemClasses}
                      checked={selectedProtocols.includes(item.item)}
                      onChange={(e) => handleCheckboxChange(item.item, e)}
                    >
                      <span>{item.value}</span>
                    </FilterCheckbox>
                  )}
                  {labelText === 'Network' && (
                    <FilterCheckbox
                      customClasses={optionItemClasses}
                      checked={selectedNetworks.includes(item.value)}
                      onChange={(e) => handleCheckboxChange(item.value, e)}
                    >
                      <span>{item.value}</span>
                    </FilterCheckbox>
                  )}
                  {labelText === 'API' && (
                    <FilterCheckbox
                      customClasses={optionItemClasses}
                      checked={selectedApis.includes(item.value)}
                      onChange={(e) => handleCheckboxChange(item.value, e)}
                    >
                      <span>{item.value}</span>
                    </FilterCheckbox>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}
