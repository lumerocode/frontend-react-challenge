export const documentOptions = [
  { value: 'dni', label: 'DNI' },
  { value: 'ce', label: 'C.E.' },
];

export const documentRules = {
  dni: { min: 8, max: 8 },
  ce: { min: 8, max: 11 },
} as const;

export const phoneRules = {
  min: 9,
  max: 9,
} as const;

export type DocumentType = keyof typeof documentRules;

export function getRules(type: string) {
  return (documentRules as Record<string, { min: number; max: number }>)[type] ?? documentRules.dni;
}

export function normalizeNumberInput(value: string, max: number) {
  return value.replace(/\D/g, '').slice(0, max);
}

export function normalizePhoneInput(value: string) {
  return value.replace(/\D/g, '').slice(0, phoneRules.max);
}

export function validateDocument(value: string, type: string) {
  const { min, max } = getRules(type);
  const numeric = /^[0-9]+$/.test(value);
  return numeric && value.length >= min && value.length <= max;
}

export function validatePhone(value: string) {
  return /^[0-9]{9}$/.test(value);
}

export function getDocumentErrorMessage() {
  return 'Ingresa un documento válido';
}

export function getPhoneErrorMessage() {
  return 'Ingrese un número válido';
}