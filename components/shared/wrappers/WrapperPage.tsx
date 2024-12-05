'use client';

import AppHeader from '@/components/application/AppHeader';
import AppSidebarMenu from '@/components/application/AppSidebarMenu';
import CustomizePlanPopup from '@/components/billing/CustomizePlanPopup/BusinessInfoPopup';
import { BillingProvider } from '@/context/BillingContext';
import { MainProvider } from '@/context/MainContext';
import { defaultTheme } from '@/theme';
import { ThemeProvider } from '@material-tailwind/react';

export default function WrapperPage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider value={defaultTheme}>
      <MainProvider>
        <BillingProvider>
          <CustomizePlanPopup />
          <main className="h-full py-[20px] px-[24px] flex flex-col gap-[20px]">
            <div className="hidden lg:flex fixed py-[20px] pl-[20px] top-0 left-0 h-full">
              <AppSidebarMenu />
            </div>

            <div className="flex flex-col lg:ml-[225px]">
              <div className="fixed w-[calc(100%-48px)] lg:w-[calc(100%-272px)] z-50 before:absolute before:bottom-[10%] lg:before:bottom-[80%] before:left-[-2px] before:right-[-2px] before:h-[160px] lg:before:h-[40px] before:bg-bgnd-light before:z-[-1]">
                <AppHeader />
              </div>

              {/* [in case Search is enabled]: mt-[132px] lg:mt-[92px] md:mt-[152px] */}
              <div className="mt-[72px] md:mt-[92px] [&>*:first-child]:mb-[20px]">
                {children}
              </div>
            </div>
          </main>
        </BillingProvider>
      </MainProvider>
    </ThemeProvider>
  );
}
