'use client';

import { useState } from 'react';

interface ButtonToggleProps {
  onSwitch: (isSelected: boolean) => void;
}

export default function ButtonToggle({ onSwitch }: ButtonToggleProps) {
  const [isSelected, setIsSelected] = useState(false);

  const switchHandler = () => {
    setIsSelected(!isSelected);
    onSwitch(!isSelected);
  };

  return (
    <div
      onClick={switchHandler}
      className={`${isSelected ? 'bg-blue-main' : 'bg-typo-scnd2'} hover:cursor-pointer w-[60px] h-[28px] flex rounded-full border border-stroke-light shadow-[0px_2px_4px_0px_#00000033_inset]`}
    >
      <span
        className={`
          ${
            isSelected
              ? 'text-blue-main ml-[35px] outline-blue-light/50'
              : 'text-typo-scnd1 ml-[3px] outline-typo-scnd1/50'
          } text-[10px] flex items-center justify-center mt-[3px] w-[20px] h-[20px] bg-layer-light rounded-full transition-all duration-500 border border-stroke-light hover:outline outline-[10px]
        `}
      >
        {isSelected ? 'On' : 'Off'}
      </span>
    </div>
  );
}
