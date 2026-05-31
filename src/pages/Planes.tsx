import { useEffect, useState } from 'react';
import { PlansLayout } from '../components/layout/PlansLayout';
import { SelectCard } from '../components/shared/SelectCard';
import { PLAN_SELECTION_KEY } from '../constants/storageKeys';
import iconCircleArrowLeft from '../assets/img/icons/icon-circle-arrow-left.svg';
import iconCircleArrowLeftV2 from '../assets/img/icons/icon-circle-arrow-left-v2.svg';
import iconAssistantAvatar from '../assets/img/icons/icon-assistant-avatar.svg';
import iconProtectionSomeone from '../assets/img/icons/icon-protection-someone.svg';

export const Planes = () => {
  const [selectedOption, setSelectedOption] = useState(() => {
    if (typeof window === 'undefined') return '';
    return window.sessionStorage.getItem(PLAN_SELECTION_KEY) ?? '';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (selectedOption) {
      window.sessionStorage.setItem(PLAN_SELECTION_KEY, selectedOption);
    } else {
      window.sessionStorage.removeItem(PLAN_SELECTION_KEY);
    }
  }, [selectedOption]);

  const [isHoveringBack, setIsHoveringBack] = useState(false);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <PlansLayout>
      <section className="grid gap-14 pt-8 pb-12 md:py-10 px-0 md:px-6">
        <div className="hidden md:grid md:grid-cols-12">
          <div className="md:col-start-2 md:col-end-3">
            <button
              onClick={handleGoBack}
              onMouseEnter={() => setIsHoveringBack(true)}
              onMouseLeave={() => setIsHoveringBack(false)}
              className="md:inline-flex items-center gap-2 text-rimac-blue font-bold text-lg cursor-pointer"
            >
              <span className="relative inline-flex w-5 h-5 mb-0.5">
                <img
                  src={iconCircleArrowLeft}
                  alt="Volver"
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${isHoveringBack ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                  src={iconCircleArrowLeftV2}
                  alt="Volver"
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${isHoveringBack ? 'opacity-100' : 'opacity-0'}`}
                />
              </span>
                Volver
            </button>
          </div>
        </div>
        <div className="md:grid md:grid-cols-12 gap-8">
          <div className="grid md:col-start-4 md:col-end-10 gap-8 w-full">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-rimac-navy text-left md:text-center">
                Rocío ¿Para quién deseas cotizar?
              </h1>
              <p className="mt-2 text-rimac-navy font-normal text-base text-left md:text-center">
                Selecciona la opción que se ajuste más a tus necesidades.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <SelectCard
                icon={iconAssistantAvatar}
                title="Para mí"
                description="Cotiza tu seguro de salud y agrega familiares si al lo deseas."
                type="radio"
                name="plan-option"
                value="para-mi"
                checked={selectedOption === 'para-mi'}
                onChange={(e) => setSelectedOption(e.currentTarget.value)}
              />

              <SelectCard
                icon={iconProtectionSomeone}
                title="Para alguien más"
                description="Realiza una cotización para uno de tus familiares o cualquier persona."
                type="radio"
                name="plan-option"
                value="para-alguien-mas"
                checked={selectedOption === 'para-alguien-mas'}
                onChange={(e) => setSelectedOption(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>
      </section>
    </PlansLayout>
  );
};

export default Planes;