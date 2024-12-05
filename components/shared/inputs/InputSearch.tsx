'use client';

import IconSearch from '@/components/shared/icons/IconSearch';

interface InputSearchProps {
  customClasses?: string;
  height?: string;
  borderColor?: string;
  backgroundColor?: string;
  placeholder?: string;
  textSize?: string;
  textColor?: string;
  boxShadow?: string;
  borderRadius?: string;
  searchValue: (value: string) => void;
}

export default function InputSearch({
  searchValue,
  customClasses,
  height = 'h-[30px]',
  borderColor = 'border-stroke-light',
  backgroundColor = 'bg-bgnd-light',
  placeholder = 'Search',
  textSize = 'text-[14px]',
  textColor = 'text-typo-scnd1',
  boxShadow = 'inner-shadow-1',
  borderRadius = 'rounded-[5px]',
}: InputSearchProps) {
  return (
    <div
      className={`flex items-center ${height} border ${borderColor} ${backgroundColor} ${textSize} ${textColor} ${boxShadow} ${borderRadius} ${customClasses} hover:bg-hover-light`}
    >
      <div className="mx-[12px] text-typo-scnd2">
        <IconSearch />
      </div>

      <input
        placeholder={placeholder}
        className="bg-transparent w-full border-none outline-none"
        onChange={(e) => searchValue(e.target.value)}
      />
    </div>
  );
}
