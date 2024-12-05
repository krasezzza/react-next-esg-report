'use client';

import IconCheck from '../icons/IconCheck';

export default function Checkbox({
  customClasses,
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (e: any) => void;
  customClasses?: string;
}) {
  return (
    <div className={`hover:cursor-pointer ${customClasses}`} onClick={onChange}>
      {checked ? (
        <div className="flex items-center justify-center text-layer-light hover:text-hover-light hover:cursor-pointer bg-blue-main w-[18px] h-[18px] rounded-[3px]">
          <IconCheck />
        </div>
      ) : (
        <div className="flex items-center justify-center text-layer-light hover:text-hover-light hover:cursor-pointer border-2 border-typo-landing2 w-[18px] h-[18px] rounded-[3px]"></div>
      )}
    </div>
  );
}
