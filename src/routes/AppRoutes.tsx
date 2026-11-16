// src/routes/AppRoutes.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import { AdminSysDashboard } from '../pages/dashboard/AdminSysDashboard';
import { AdminHospDashboard } from '../pages/dashboard/AdminHospDashboard';
import { AssistantDashboard } from '../pages/dashboard/AssistantDashboard';
import { MedecinDashboard } from '../pages/dashboard/MedecinDashboard';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route publique */}
        <Route path="/login" element={<LoginPage />} />

        {/* Routes protégées avec vérification stricte des rôles */}
        <Route element={<ProtectedRoute allowedRoles={['ADMIN_SYS']} />}>
          <Route path="/admin-sys/dashboard" element={<AdminSysDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['ADMIN_HOSP']} />}>
          <Route path="/admin-hosp/dashboard" element={<AdminHospDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['ASSISTANT']} />}>
          <Route path="/assistant/dashboard" element={<AssistantDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['MEDECIN']} />}>
          <Route path="/medecin/dashboard" element={<MedecinDashboard />} />
        </Route>

        {/* Redirection par défaut */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};