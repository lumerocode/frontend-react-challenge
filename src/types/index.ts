import type { ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

// ==========================================================================
// 1. USER-DEFINED TYPES
// ==========================================================================

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  buttonClassName?: string;
}

export interface SelectInputGroupProps {
  label: string;
  options: Option[];
  selectProps?: Omit<SelectProps, 'label' | 'options'>;
  inputProps?: Omit<InputProps, 'label'>;
  error?: string;
  className?: string;
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: string;
}