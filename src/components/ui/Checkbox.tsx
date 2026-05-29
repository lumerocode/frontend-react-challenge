import { useId } from 'react';
import type { CheckboxProps } from '../../types';
import iconCheckbox from '../../assets/img/icons/icon-checkbox.svg';

export const Checkbox = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}: CheckboxProps) => {
  const id = useId();

  return (
    <div className={`w-full ${className}`}>
      <label 
        htmlFor={id} 
        className="flex items-center gap-3 cursor-pointer group select-none text-sm font-normal text-rimac-dark"
      >
        <div className="relative flex items-center">
          <input
            id={id}
            type="checkbox"
            className="peer sr-only"
            {...props}
          />

          {/* Custom checkbox */}
          <div className={`w-5 h-5 border rounded bg-white transition-all duration-200 
            ${error ? 'border-rimac-red' : 'border-rimac-dark'} 
            peer-checked:bg-rimac-dark peer-checked:border-rimac-dark 
            peer-focus-visible:ring-2 peer-focus-visible:ring-rimac-gray/30`}
          />

          <img
            src={iconCheckbox}
            alt="Check"
            className="absolute w-auto opacity-0 scale-75 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200"
          />
        </div>

        {/* Text/links container for the label */}
        <span className="leading-5 text-rimac-dark mt-0.5 text-xs">
          {label}
        </span>
      </label>

      {error && (
        <span className="text-rimac-red text-xs mt-1 block font-medium pl-8">
          {error}
        </span>
      )}
    </div>
  );
};

export default Checkbox;