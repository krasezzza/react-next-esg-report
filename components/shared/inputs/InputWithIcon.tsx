'use client';

import ButtonIcon from '../buttons/ButtonIcon';

interface InputWithIconProps {
  label: string;
  wrapperStyling?: string;
  inputStyling?: string;
  labelStyling?: string;
  placeholder?: string;
  readonly?: boolean;
  icon?: React.ReactElement;
  inputValue?: (value: string) => void;
  defaultValue?: string;
  inputType?: string;
  onIconClick?: () => void;
}

export default function InputWithIcon(props: InputWithIconProps) {
  const {
    label,
    wrapperStyling,
    inputStyling,
    labelStyling,
    placeholder,
    icon,
    readonly,
    defaultValue,
    inputType,
  } = props;
  return (
    <div
      className={`relative w-full min-w-[120px] min-h-[50px] py-[4px] px-[12px] flex items-center justify-start border border-stroke-light rounded-[4px] ${wrapperStyling}`}
    >
      <span
        className={`absolute px-[4px] top-[-10px] md:top-[-12px] left-[16px] text-typo-scnd2 text-[12px] md:text-[14px] bg-layer-light ${labelStyling}`}
      >
        {label}
      </span>
      <input
        className={`w-full text-[12px] md:text-[14px] text-typo-scnd1 bg-transparent outline-none ${inputStyling}`}
        placeholder={placeholder}
        onChange={(e) => {
          if (props.inputValue) {
            props.inputValue(e.target.value);
          }
        }}
        value={defaultValue}
        readOnly={readonly}
        type={inputType}
      />

      {icon && (
        <ButtonIcon iconElement={icon} onClickHandler={props.onIconClick} />
      )}
    </div>
  );
}
