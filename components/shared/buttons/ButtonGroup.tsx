'use client';

interface ButtonGroupProps {
  groupName: string;
  valuesList: string[];
  selectedValue: string;
  switchHandler: (value: string) => void;
}

export default function ButtonGroup({
  groupName,
  valuesList,
  selectedValue,
  switchHandler,
}: ButtonGroupProps) {
  const handleClick = (value: string) => {
    switchHandler(value);
  };

  const wrapperClasses = (value: string) => {
    let classes =
      'w-auto min-w-[64px] md:min-w-[120px] h-[30px] flex items-center justify-center rounded-md cursor-pointer select-none transition duration-300';

    if (selectedValue === value) {
      classes += ' border-2 border-blue-main';
    } else {
      classes += ' border border-stroke-light';
    }

    return classes;
  };

  const labelClasses = (value: string) => {
    let classes = 'cursor-pointer text-xs md:text-sm';

    if (selectedValue === value) {
      classes += ' text-blue-main font-medium';
    }

    return classes;
  };

  return (
    <>
      {valuesList.map((value, index) => (
        <div
          key={index}
          className={wrapperClasses(value)}
          onClick={() => handleClick(value)}
        >
          <input
            type="radio"
            id={value}
            name={groupName}
            value={value}
            className="hidden"
          />
          <label htmlFor={value} className={labelClasses(value)}>
            {value}
          </label>
        </div>
      ))}
    </>
  );
}
