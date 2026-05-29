import type { ReactNode } from 'react';
import logo from '../assets/img/brand/Logo.svg';
import phoneIcon from '../assets/img/icons/icon-phone.svg';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="min-h-screen bg-rimac-light-bg text-rimac-dark">
    <div className="px-(--spacing-mobile-padding) md:px-0">
      <header className="mx-auto flex max-w-desktop-container items-center justify-between py-3 md:py-4 md:px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="RIMAC" className="w-auto" />
        </div>

          <div className="flex items-end gap-4 text-rimac-black">
            <span className="hidden md:inline text-xs font-semibold tracking-sm">¡Compra por este medio!</span>
            <div className="inline-flex items-center gap-2">
                <img src={phoneIcon} alt="Teléfono" className="w-5" />
                <span className='text-base md:text-lg font-bold leading-5 md:leading-5 tracking-md pt-1'>(01) 411 6001</span>
            </div>
          </div>
      </header>
    </div>

    <main className="mx-auto w-full max-w-desktop-container px-(--spacing-mobile-padding) md:px-0">
      {children}
    </main>
  </div>
);

export default MainLayout;