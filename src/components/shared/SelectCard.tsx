import type { InputHTMLAttributes } from 'react';
import iconCircleCheck from '../../assets/img/icons/icon-circle-check.svg';

export interface SelectCardProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string;
  title: string;
  description: string;
}

export const SelectCard = ({
  icon,
  title,
  description,
  checked,
  ...props
}: SelectCardProps) => {
  const isChecked = Boolean(checked);

  return (
    <label
      className={`group relative flex cursor-pointer overflow-hidden rounded-3xl transition-shadow border-[3px] bg-white px-6 py-4 duration-200 shadow-rimac-md ${
        isChecked ? 'border-rimac-black' : 'border-none'
      }`}
    >
      <input
        type="radio"
        className="sr-only"
        checked={checked}
        {...props}
      />

      <div className="w-full">
        <div className="flex flex-col-reverse justify-between">
          <div className="flex flex-col items-start gap-2">
            <div className="shrink-0 flex gap-2 items-center">
              <img src={icon} alt={title} className="w-12 h-12" />
              <h3 className="md:hidden text-xl leading-7 font-bold text-rimac-navy">{title}</h3>
            </div>

            <div className="flex-1 space-y-1">
              <h3 className="hidden md:block text-xl leading-7 font-bold text-rimac-navy">{title}</h3>
              <p className="text-xs text-rimac-navy font-normal leading-5 tracking-sm">{description}</p>
            </div>
          </div>

          <div className="flex justify-end shrink-0">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-rimac-gray bg-white">
              {isChecked ? (
                <img
                  src={iconCircleCheck}
                  alt="Seleccionado"
                  className="h-6 w-6"
                />
              ) : (
                <div className="h-2 w-2 rounded-full bg-white" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 -z-10 bg-rimac-light-blue-bg transition-opacity duration-200 ${
          isChecked ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </label>
  );
};

export default SelectCard;