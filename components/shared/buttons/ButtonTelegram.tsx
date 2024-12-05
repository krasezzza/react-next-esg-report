'use client';

import IconTelegram from '../icons/IconTelegram';
import ButtonGeneric from './ButtonGeneric';

interface ButtonTelegramProps {
  onClickHandler: () => void;
}

export default function ButtonTelegram({
  onClickHandler,
}: ButtonTelegramProps) {
  return (
    <ButtonGeneric
      iconElement={<IconTelegram />}
      onClickHandler={onClickHandler}
      additionalClasses="!w-[40px] !h-[30px] md:!w-[40px] md:!h-[30px] !bg-typo-scnd2 hover:!bg-telegram !text-typo-light hover:!text-white !border-0"
    />
  );
}
