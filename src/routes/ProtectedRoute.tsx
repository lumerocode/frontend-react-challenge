import { Navigate } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';

interface ProtectedRouteProps {
  element: React.ReactNode;
}

export const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { quoteData } = useQuote();

  if (!quoteData) {
    return <Navigate to="/seguro-salud-flexible" replace />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;