'use client';

import IconDropdown from './IconDropdown';

interface BorderedDropdownIconProps {
  isOpen: boolean;
}

export default function IconBorderedDropdown({
  isOpen,
}: BorderedDropdownIconProps) {
  return (
    <div className="w-[25px] h-[25px] flex items-center justify-center border border-stroke-light rounded-[5px]">
      <IconDropdown isOpen={isOpen} />
    </div>
  );
}
