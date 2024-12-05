'use client';

import { ChangeEventHandler } from 'react';

export default function InputText({
  label,
  type = 'text',
  landing,
  required,
  value,
  hasError,
  name,
  onChange,
  parentStyling,
  inputStyling,
}: {
  label: string;
  type?: string;
  landing?: boolean;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  pattern?: string;
  value?: string;
  name?: string;
  hasError?: boolean;
  parentStyling?: string;
  inputStyling?: string;
}) {
  const parentClasses = () => {
    let classes = 'relative w-full h-[50px] group';

    if (parentStyling) {
      classes += ` ${parentStyling}`;
    }

    return classes;
  };

  const inputClasses = () => {
    let classes = 'w-full outline-none p-[12px] peer';

    if (inputStyling) {
      classes += ` ${inputStyling}`;
    }

    if (landing) {
      classes += ' text-typo-landing1 bg-bgnd-landing';
    } else {
      classes += ' text-typo-scnd1 bg-layer-light';
    }

    if (hasError) {
      classes += ' text-red-main';
    }

    return classes;
  };

  return (
    <div className={parentClasses()}>
      <input
        type={type}
        className={inputClasses()}
        placeholder=""
        value={value}
        onChange={onChange}
        name={name}
      />

      <label
        className={`absolute left-[9px] top-[-2px] text-[10px] md:text-[12px] ${landing ? 'text-typo-landing2 group-focus-within:!text-typo-landing2' : 'text-typo-scnd2 group-focus-within:!text-typo-scnd2'} transition-all duration-300 px-1 transform -translate-y-1/2 pointer-events-none 
  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[14px] group-focus-within:!top-[-2px] group-focus-within:!text-[10px] md:group-focus-within:!text-[12px] select-none`}
      >
        {label}
        <span className={`${required ? 'text-blue-main' : 'hidden'}`}> *</span>
      </label>

      <fieldset
        //TODO: Check hover effect and consult
        className={`inset-0 absolute border rounded-[10px] pointer-events-none mt-[-9px] invisible peer-placeholder-shown:visible  ${hasError ? 'border-red-main group-hover:border-red-300' : 'border-stroke-light group-hover:border-typo-scnd2'}`}
      >
        <legend className="ml-2 px-0 text-[10px] md:text-[12px] transition-all duration-300 invisible max-w-[0.01px] group-focus-within:max-w-full group-focus-within:px-1 whitespace-nowrap">
          {label}
          <span className={`${required ? 'text-blue-main' : 'hidden'}`}>
            {' '}
            *
          </span>
        </legend>
      </fieldset>

      <fieldset className="inset-0 absolute border border-stroke-light rounded-[10px] pointer-events-none mt-[-9px] visible peer-placeholder-shown:invisible group-focus-within:border group-focus-within:!border-typo-scnd1">
        <legend className="ml-2 text-[10px] md:text-[12px] invisible px-1 max-w-full whitespace-nowrap">
          {label}
          <span className={`${required ? 'text-blue-main' : 'hidden'}`}>
            {' '}
            *
          </span>
        </legend>
      </fieldset>
    </div>
  );
}
