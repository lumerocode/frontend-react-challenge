import { useEffect, useId, useRef, useState } from 'react';
import type { SelectProps } from '../../types';
import iconArrowDown from '../../assets/img/icons/icon-arrow-down.svg';
import iconCheck from '../../assets/img/icons/icon-check.svg';

// Reusable Atomic Select Component designed for the RIMAC design system.
export const Select = ({
  label,
  options,
  className = '',
  buttonClassName = '',
  value,
  defaultValue,
  onChange,
}: SelectProps) => {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    value ?? defaultValue ?? options[0]?.value ?? ''
  );

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption =
    options.find((option) => option.value === selectedValue) ?? options[0];

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);

    if (onChange) {
      const syntheticEvent = {
        target: { value: optionValue },
      } as unknown as React.ChangeEvent<HTMLSelectElement>;
      onChange(syntheticEvent);
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-rimac-black mb-1">
          {label}
        </label>
      )}

      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full h-12 inline-flex items-center justify-between bg-white text-rimac-black border border-rimac-gray-dark rounded-l-md px-3 py-2.5 text-base outline-none cursor-pointer transition-colors duration-200 focus:border-rimac-dark focus:ring-1 focus:ring-rimac-blue-dark ${buttonClassName}`}
      >
        <span>{selectedOption?.label}</span>
        <img
          src={iconArrowDown}
          alt={isOpen ? 'Close options' : 'Open options'}
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby={id}
          className="absolute z-20 mt-1 w-full overflow-hidden rounded-md border border-rimac-border-hover bg-white shadow-rimac-md p-2"
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === selectedValue}
              onClick={() => handleSelect(option.value)}
              className={`flex cursor-pointer items-center justify-between px-4 py-3 text-base transition-colors duration-200 rounded-sm ${
                option.value === selectedValue
                  ? 'bg-rimac-border-light font-semibold'
                  : 'hover:bg-rimac-light-bg'
              }`}
            >
              <span>{option.label}</span>
              {option.value === selectedValue && (
                <img src={iconCheck} alt="Check" className="w-auto" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;