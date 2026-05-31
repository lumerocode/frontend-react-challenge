import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  documentOptions,
  validateDocument,
  validatePhone,
  getDocumentErrorMessage,
  getPhoneErrorMessage,
} from '../utils/documents';
import { useQuote } from '../context/QuoteContext';
import { PLAN_SELECTION_KEY } from '../constants/storageKeys';

interface FormErrors {
  documentNumber?: string;
  phone?: string;
  privacy?: string;
  commercial?: string;
}

interface UseSeguroSaludFormReturn {
  documentType: string;
  documentNumber: string;
  phone: string;
  acceptedPrivacy: boolean;
  acceptedCommercial: boolean;
  errors: FormErrors;
  isSubmitting: boolean;
  handleDocumentTypeChange: (value: string) => void;
  handleDocumentNumberChange: (value: string) => void;
  handlePhoneChange: (value: string) => void;
  handlePrivacyChange: (checked: boolean) => void;
  handleCommercialChange: (checked: boolean) => void;
  handleSubmit: () => void;
}

export const useSeguroSaludForm = (): UseSeguroSaludFormReturn => {
  const navigate = useNavigate();
  const { quoteData, submitQuote } = useQuote();

  const [documentType, setDocumentType] = useState(
    quoteData?.documentType ?? documentOptions[0]?.value ?? 'dni',
  );
  const [documentNumber, setDocumentNumber] = useState(quoteData?.documentNumber ?? '');
  const [phone, setPhone] = useState(quoteData?.phone ?? '');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(quoteData?.acceptedPrivacy ?? false);
  const [acceptedCommercial, setAcceptedCommercial] = useState(
    quoteData?.acceptedCommercial ?? false,
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDocumentTypeChange = (value: string) => {
    setDocumentType(value);
    setErrors((prev) => {
      const next = { ...prev };

      if (documentNumber.trim() && validateDocument(documentNumber, value)) {
        delete next.documentNumber;
      }

      return next;
    });
  };

  const handleDocumentNumberChange = (value: string) => {
    setDocumentNumber(value);
    setErrors((prev) => {
      const next = { ...prev };

      if (!value.trim()) {
        delete next.documentNumber;
      } else if (!validateDocument(value, documentType)) {
        next.documentNumber = getDocumentErrorMessage();
      } else {
        delete next.documentNumber;
      }

      return next;
    });
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    setErrors((prev) => {
      const next = { ...prev };

      if (!value.trim()) {
        delete next.phone;
      } else if (!validatePhone(value)) {
        next.phone = getPhoneErrorMessage();
      } else {
        delete next.phone;
      }

      return next;
    });
  };

  const handlePrivacyChange = (checked: boolean) => {
    setAcceptedPrivacy(checked);
    setErrors((prev) => {
      const next = { ...prev };
      if (checked) delete next.privacy;
      return next;
    });
  };

  const handleCommercialChange = (checked: boolean) => {
    setAcceptedCommercial(checked);
    setErrors((prev) => {
      const next = { ...prev };
      if (checked) delete next.commercial;
      return next;
    });
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!documentNumber.trim()) {
      nextErrors.documentNumber = 'Ingresa tu documento';
    } else if (!validateDocument(documentNumber, documentType)) {
      nextErrors.documentNumber = getDocumentErrorMessage();
    }

    if (!phone.trim()) {
      nextErrors.phone = 'Ingresa tu celular';
    } else if (!validatePhone(phone)) {
      nextErrors.phone = getPhoneErrorMessage();
    }

    if (!acceptedPrivacy) {
      nextErrors.privacy = 'Debes aceptar la Política de Privacidad';
    }

    if (!acceptedCommercial) {
      nextErrors.commercial = 'Debes aceptar la Política Comunicaciones Comerciales';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    submitQuote({
      documentType,
      documentNumber,
      phone,
      acceptedPrivacy,
      acceptedCommercial,
    });

    sessionStorage.removeItem(PLAN_SELECTION_KEY);
    setTimeout(() => {
      navigate('/Planes');
    }, 1000);
  };

  return {
    documentType,
    documentNumber,
    phone,
    acceptedPrivacy,
    acceptedCommercial,
    errors,
    isSubmitting,
    handleDocumentTypeChange,
    handleDocumentNumberChange,
    handlePhoneChange,
    handlePrivacyChange,
    handleCommercialChange,
    handleSubmit,
  };
};