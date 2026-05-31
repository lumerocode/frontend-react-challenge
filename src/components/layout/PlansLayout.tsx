import type { ReactNode } from 'react';
import logo from '../../assets/img/brand/Logo.svg';
import phoneIcon from '../../assets/img/icons/icon-phone.svg';
import iconLeftArrowCircle from '../../assets/img/icons/icon-left-arrow-circle.svg';

interface PlansLayoutProps {
  children: ReactNode;
}

export const PlansLayout = ({ children }: PlansLayoutProps) => (
  <div className="min-h-screen bg-rimac-light-bg text-rimac-dark">
    <div className="">
      <header className="mx-auto h-16 max-w-desktop-container py-3 md:py-4 px-(--spacing-mobile-padding) md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RIMAC" className="w-auto" />
          </div>

          <div className="flex items-end gap-4 text-rimac-black">
            <span className="hidden md:inline text-xs font-semibold tracking-sm">¡Compra por este medio!</span>
            <div className="inline-flex items-center gap-2">
              <img src={phoneIcon} alt="Teléfono" className="w-5" />
              <span className="text-base md:text-lg font-bold leading-5 md:leading-5 tracking-md pt-1">(01) 411 6001</span>
            </div>
          </div>
        </div>
      </header>
      <section className="flex items-center justify-center gap-4 border-b md:border-none border-rimac-border bg-rimac-light-bg md:bg-rimac-light-gray-bg px-(--spacing-mobile-padding) md:px-0 py:0 md:py-4">
        <div className="hidden max-w-92 md:flex flex-1 items-center gap-4">
          <div className="inline-flex items-center gap-4 text-rimac-navy font-semibold">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rimac-blue text-white text-xs font-bold pt-0.5 leading-4">
              <span>1</span>
            </div>
            <span className="text-base mt-1">Planes y coberturas</span>
          </div>

          <div className="flex-1 border-t-2 border-dashed border-rimac-blue " />

          <div className="inline-flex items-center gap-4 text-rimac-gray font-semibold text-sm">
            <span className="flex h-6 w-6 items-center justify-center pt-0.5 rounded-full border border-rimac-gray text-rimac-gray text-xs font-bold">2</span>
            <span className="text-base mt-1">Resumen</span>
          </div>
        </div>

        <div className="w-full flex flex-row items-center gap-4 md:hidden rounded-3xl px-0 md:px-4 py-4">
          <div className="w-auto flex items-center gap-4 text-rimac-navy font-semibold text-sm">
            <img src={iconLeftArrowCircle} alt="Volver" className="w-6 h-6" />
            <span className="w-21 uppercase text-xxs pt-1">Paso 1 de 2</span>
          </div>
          <div className="w-full h-2 overflow-hidden rounded-full bg-rimac-border">
            <div className="h-full w-2/4 rounded-full bg-rimac-blue" />
          </div>
        </div>
      </section>
    </div>

    <main className="mx-auto w-full max-w-desktop-container px-(--spacing-mobile-padding) md:px-0">
      {children}
    </main>
  </div>
);

export default PlansLayout;