import { Navigate, Route, Routes } from 'react-router-dom';
import SeguroSaludFlexible from '../pages/SeguroSaludFlexible';

export const AppRoutes = () => (
  <Routes>
    <Route path="/seguro-salud-flexible" element={<SeguroSaludFlexible />} />
    <Route path="*" element={<Navigate to="/seguro-salud-flexible" replace />} />
  </Routes>
);

export default AppRoutes;
