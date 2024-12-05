import ButtonIcon from '../buttons/ButtonIcon';
import IconClose from '../icons/IconClose';

export default function FilterTag({
  text,
  onRemove,
}: {
  text: string;
  onRemove: (item: any) => void;
}) {
  return (
    <div className="flex items-center gap-[6px] bg-layer-light border border-stroke-light rounded-[5px] h-[20px] px-[8px] shadow-[0_2px_4px_0_#0000001A]">
      <span className="text-bgnd-dark text-[14px] font-light whitespace-nowrap">
        {text}
      </span>

      <ButtonIcon
        iconElement={<IconClose className="w-[6px] h-[6px]" />}
        onClickHandler={onRemove}
        overrideClasses="w-[16px] h-[16px] flex items-center justify-center rounded-[2000px] border border-typo-scnd2 hover:bg-hover-light"
      />
    </div>
  );
}
