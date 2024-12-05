'use client';

import { IconProps } from './interfaces';

export default function IconDetails(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 15"
      fill="none"
      className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
      {...props}
    >
      <path
        d="M0.752697 7.53678H3.01373C3.15651 7.53678 3.29344 7.48006 3.3944 7.3791C3.49535 7.27815 3.55207 7.14122 3.55207 6.99844C3.55207 6.85566 3.49535 6.71873 3.3944 6.61777C3.29344 6.51682 3.15651 6.4601 3.01373 6.4601H0.752697C0.60992 6.4601 0.472991 6.51682 0.372032 6.61777C0.271073 6.71873 0.214355 6.85566 0.214355 6.99844C0.214355 7.14122 0.271073 7.27815 0.372032 7.3791C0.472991 7.48006 0.60992 7.53678 0.752697 7.53678ZM0.752697 10.7668H3.35827C3.50105 10.7668 3.63798 10.7101 3.73893 10.6092C3.83989 10.5082 3.89661 10.3713 3.89661 10.2285C3.89661 10.0857 3.83989 9.94878 3.73893 9.84782C3.63798 9.74686 3.50105 9.69015 3.35827 9.69015H0.752697C0.60992 9.69015 0.472991 9.74686 0.372032 9.84782C0.271073 9.94878 0.214355 10.0857 0.214355 10.2285C0.214355 10.3713 0.271073 10.5082 0.372032 10.6092C0.472991 10.7101 0.60992 10.7668 0.752697 10.7668ZM9.36616 12.9202H0.752697C0.60992 12.9202 0.472991 12.9769 0.372032 13.0779C0.271073 13.1788 0.214355 13.3158 0.214355 13.4585C0.214355 13.6013 0.271073 13.7382 0.372032 13.8392C0.472991 13.9402 0.60992 13.9969 0.752697 13.9969H9.36616C9.50894 13.9969 9.64587 13.9402 9.74683 13.8392C9.84778 13.7382 9.9045 13.6013 9.9045 13.4585C9.9045 13.3158 9.84778 13.1788 9.74683 13.0779C9.64587 12.9769 9.50894 12.9202 9.36616 12.9202ZM0.752697 4.30673H5.05943C5.20221 4.30673 5.33913 4.25001 5.44009 4.14906C5.54105 4.0481 5.59777 3.91117 5.59777 3.76839C5.59777 3.62561 5.54105 3.48868 5.44009 3.38773C5.33913 3.28677 5.20221 3.23005 5.05943 3.23005H0.752697C0.60992 3.23005 0.472991 3.28677 0.372032 3.38773C0.271073 3.48868 0.214355 3.62561 0.214355 3.76839C0.214355 3.91117 0.271073 4.0481 0.372032 4.14906C0.472991 4.25001 0.60992 4.30673 0.752697 4.30673ZM0.752697 1.07668H9.36616C9.50894 1.07668 9.64587 1.01996 9.74683 0.919006C9.84778 0.818048 9.9045 0.681118 9.9045 0.538341C9.9045 0.395564 9.84778 0.258635 9.74683 0.157677C9.64587 0.0567179 9.50894 0 9.36616 0H0.752697C0.60992 0 0.472991 0.0567179 0.372032 0.157677C0.271073 0.258635 0.214355 0.395564 0.214355 0.538341C0.214355 0.681118 0.271073 0.818048 0.372032 0.919006C0.472991 1.01996 0.60992 1.07668 0.752697 1.07668ZM14.0551 13.0763L11.3042 10.3254C11.8742 9.5622 12.134 8.61148 12.0313 7.66449C11.9287 6.7175 11.4712 5.84452 10.751 5.22115C10.0308 4.59778 9.10121 4.27029 8.14929 4.30456C7.19738 4.33883 6.29376 4.73232 5.62021 5.40586C4.94667 6.0794 4.55319 6.98302 4.51892 7.93494C4.48465 8.88685 4.81214 9.81643 5.4355 10.5367C6.05887 11.2569 6.93186 11.7143 7.87885 11.817C8.82583 11.9196 9.77655 11.6598 10.5397 11.0898L13.2907 13.8408C13.3407 13.8912 13.4003 13.9313 13.4659 13.9586C13.5315 13.9859 13.6018 14 13.6729 14C13.744 14 13.8143 13.9859 13.8799 13.9586C13.9455 13.9313 14.0051 13.8912 14.0551 13.8408C14.1056 13.7907 14.1456 13.7312 14.173 13.6656C14.2003 13.6 14.2144 13.5296 14.2144 13.4585C14.2144 13.3875 14.2003 13.3171 14.173 13.2515C14.1456 13.1859 14.1056 13.1264 14.0551 13.0763ZM8.28948 10.7668C7.75711 10.7668 7.23669 10.609 6.79404 10.3132C6.3514 10.0174 6.00639 9.59704 5.80266 9.10519C5.59894 8.61335 5.54563 8.07214 5.64949 7.55C5.75335 7.02786 6.00971 6.54824 6.38615 6.1718C6.7626 5.79536 7.24221 5.53899 7.76435 5.43513C8.28649 5.33127 8.8277 5.38458 9.31955 5.58831C9.81139 5.79204 10.2318 6.13704 10.5276 6.57969C10.8233 7.02234 10.9812 7.54275 10.9812 8.07512C10.9812 8.4286 10.9116 8.77862 10.7763 9.10519C10.641 9.43177 10.4427 9.7285 10.1928 9.97845C9.94285 10.2284 9.64612 10.4267 9.31955 10.5619C8.99298 10.6972 8.64296 10.7668 8.28948 10.7668Z"
        fill="currentColor"
      />
    </svg>
  );
}