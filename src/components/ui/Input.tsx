import { useEffect, useId, useState, type ChangeEvent } from 'react';
import type { InputProps } from '../../types';
import { normalizePhoneInput, validatePhone, getPhoneErrorMessage } from '../../utils/documents';

//Reusable Atomic Input Component designed for the RIMAC design system.
export const Input = ({ 
  label, 
  error, 
  className = '', 
  value,
  type,
  ...props 
}: InputProps) => {
  const id = useId();
  const [telValue, setTelValue] = useState(() => (type === 'tel' && typeof value === 'string' ? value : ''));
  const [touched, setTouched] = useState(false);
  const { onChange, ...restProps } = props as { onChange?: (event: ChangeEvent<HTMLInputElement>) => void } & Record<string, unknown>;

  useEffect(() => {
    if (type === 'tel' && typeof value === 'string') {
      setTelValue(value);
    }
  }, [type, value]);

  const isTel = type === 'tel';
  const showTelError = isTel && touched && telValue.length > 0 && !validatePhone(telValue);
  const validationMessage = error ?? (showTelError ? getPhoneErrorMessage() : '');

  const handleTelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const normalized = normalizePhoneInput(event.target.value);
    setTelValue(normalized);
    setTouched(true);

    if (onChange) {
      const syntheticEvent = {
        ...event,
        target: { ...event.target, value: normalized },
      } as ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  return (
    <div className={`w-full flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-rimac-black mb-1"
        >
          {label}
        </label>
      )}
      
      <input
        id={id}
        value={isTel ? telValue : value}
        type={type}
        maxLength={isTel ? 9 : undefined}
        onChange={isTel ? handleTelChange : onChange}
        className={`w-full h-12 bg-white text-rimac-black border tracking-sm ${
          validationMessage ? 'border-rimac-red-dark' : 'border-rimac-gray-dark'
        } rounded-md py-2.25 px-2.75 text-base outline-none transition-all duration-200 focus:border-rimac-dark focus:ring-1 focus:ring-rimac-blue-dark ${
          validationMessage ? 'border-2 focus:border-rimac-red-dark' : 'focus:border-rimac-dark'
        }`}
        {...restProps}
      />
      
      {validationMessage && (
        <span className="mt-1 text-xs font-medium text-rimac-red-dark">
          {validationMessage}
        </span>
      )}
    </div>
  );
};

export default Input;