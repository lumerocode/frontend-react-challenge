import { Navigate, Route, Routes } from 'react-router-dom';
import SeguroSaludFlexible from '../pages/SeguroSaludFlexible';
import Planes from '../pages/Planes';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = () => (
  <Routes>
    <Route path="/seguro-salud-flexible" element={<SeguroSaludFlexible />} />
    <Route
      path="/Planes"
      element={<ProtectedRoute element={<Planes />} />}
    />
    <Route path="*" element={<Navigate to="/seguro-salud-flexible" replace />} />
  </Routes>
);

export default AppRoutes;
