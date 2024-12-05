import { PopupProps } from '@/interfaces';
import ButtonIcon from '../buttons/ButtonIcon';
import IconClose from '../icons/IconClose';

export default function Popup({
  title,
  subtitle,
  description,
  content,
  primaryButton,
  secondaryButton,
  buttonsDivClasses,
  closeModal,
  titleStyling,
  bottomContent,
  parentStyling,
  contentClasses,
}: PopupProps) {
  function closeModalBgClick(e: any) {
    if (e.target.id === 'modal-bg') {
      closeModal();
    }
  }

  return (
    <div
      id="modal-bg"
      className="fixed inset-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-xs flex flex-col justify-center items-center z-[9999]"
      onClick={closeModalBgClick}
    >
      <div
        className={`bg-layer-light md:w-6/12 w-10/12 max-w-screen-md rounded-lg pt-[20px] pb-[32px] px-[24px] m-4 flex flex-col shadow-[0px_2px_12px_4px_#00000033] border border-stroke-light ${parentStyling}`}
      >
        <div className="flex justify-between items-center pb-4">
          <div className="flex items-center gap-[12px] select-none">
            <h1
              className={`text-[16px] md:text-[20px] font-semibold text-bgnd-dark ${titleStyling}`}
            >
              {title}
              {subtitle && (
                <>
                  <span
                    className={`text-[16px] md:text-[20px] font-normal text-bgnd-dark ${titleStyling}`}
                  >
                    {' >'} {subtitle}
                  </span>
                </>
              )}
            </h1>

            {description}
          </div>

          <ButtonIcon
            iconElement={<IconClose className="w-[14px] h-[14px]" />}
            onClickHandler={closeModal}
            additionalClasses="!w-[30px] !h-[30px] md:!w-[30px] md:!h-[30px]"
          />
        </div>

        <div className={`w-full pt-[12px] pb-[24px] ${contentClasses}`}>
          {content}
        </div>

        <div
          className={`${buttonsDivClasses} grid ${secondaryButton && primaryButton ? 'grid-cols-2' : 'grid-cols-1'} gap-x-[12px]`}
        >
          {secondaryButton}
          {primaryButton}
        </div>

        {bottomContent && <div className="w-full">{bottomContent}</div>}
      </div>
    </div>
  );
}
