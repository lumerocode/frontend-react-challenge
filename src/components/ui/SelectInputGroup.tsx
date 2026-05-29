import { useEffect, useId, useState, type ChangeEvent } from 'react';
import Select from './Select';
import type { SelectInputGroupProps } from '../../types';
import { getRules, normalizeNumberInput, validateDocument, getDocumentErrorMessage } from '../../utils/documents';

export const SelectInputGroup = ({
  label,
  options,
  selectProps,
  inputProps,
  className = '',
}: SelectInputGroupProps) => {
  const inputId = useId();
  const [documentType, setDocumentType] = useState(options[0]?.value ?? 'dni');
  const [inputValue, setInputValue] = useState(() => {
    const value = inputProps?.value ?? inputProps?.defaultValue;
    return typeof value === 'string' ? value : '';
  });
  const [touched, setTouched] = useState(false);
  const { onChange: inputPropsOnChange, value: inputPropsValue, ...restInputProps } = inputProps ?? {};

  const { max: maxLength } = getRules(documentType);
  const isValid = validateDocument(inputValue, documentType);
  const showError = touched && inputValue.length > 0 && !isValid;

  useEffect(() => {
    if (inputPropsValue && typeof inputPropsValue === 'string') {
      setInputValue(inputPropsValue);
    }
  }, [inputPropsValue]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setDocumentType(selected);
    setInputValue('');
    setTouched(false);

    if (selectProps?.onChange) {
      selectProps.onChange(event);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let rawValue = normalizeNumberInput(event.target.value, maxLength);
    setInputValue(rawValue);
    setTouched(true);

    if (inputPropsOnChange) {
      const syntheticEvent = {
        ...event,
        target: { ...event.target, value: rawValue },
      } as ChangeEvent<HTMLInputElement>;
      inputPropsOnChange(syntheticEvent);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <label className="block text-sm font-semibold text-rimac-black mb-1">{label}</label>

      <div className="flex w-full">
        <div className="w-[40%]">
          <Select
            label={undefined}
            options={options}
            className="w-full"
            value={documentType}
            onChange={handleSelectChange}
            {...selectProps}
          />
        </div>

        <div className="w-[60%]">
          <input
            id={inputId}
            value={inputValue}
            onChange={handleInputChange}
            maxLength={maxLength}
            className={`w-full h-12 bg-white text-rimac-black tracking-sm border border-rimac-gray-dark rounded-r-md py-2.25 px-2.75 text-base leading-7 outline-none transition-all duration-200 focus:border-rimac-dark focus:ring-1 focus:ring-rimac-blue-dark ${
              showError ? 'border-2 border-rimac-red-dark' : ''
            }`}
            {...restInputProps}
          />
        </div>
      </div>

      {showError && (
        <p className="mt-1 text-xs font-medium text-rimac-red-dark">
          {getDocumentErrorMessage()}
        </p>
      )}
    </div>
  );
};

export default SelectInputGroup;