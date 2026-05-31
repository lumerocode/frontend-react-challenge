import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export interface QuoteFormData {
  documentType: string;
  documentNumber: string;
  phone: string;
  acceptedPrivacy: boolean;
  acceptedCommercial: boolean;
}

interface QuoteContextValue {
  quoteData: QuoteFormData | null;
  submitQuote: (data: QuoteFormData) => void;
  clearQuote: () => void;
}

const STORAGE_KEY = 'quoteFormData';

const QuoteContext = createContext<QuoteContextValue | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [quoteData, setQuoteData] = useState<QuoteFormData | null>(() => {
    if (typeof window === 'undefined') return null;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as QuoteFormData) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (quoteData) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(quoteData));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, [quoteData]);

  const submitQuote = (data: QuoteFormData) => {
    setQuoteData(data);
  };

  const clearQuote = () => {
    setQuoteData(null);
  };

  return (
    <QuoteContext.Provider value={{ quoteData, submitQuote, clearQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within QuoteProvider');
  }
  return context;
};