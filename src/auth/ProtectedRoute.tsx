// src/auth/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import type { Role } from '../types/user.types';

interface ProtectedRouteProps {
  allowedRoles?: Role[]; 
}

export const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuthStore();

  // 1. Si pas connecté -> redirection vers login
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Si le rôle n'est pas autorisé -> accès refusé
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
        <h1>403 - Accès Refusé</h1>
        <p>Vous n'avez pas les droits pour accéder à cette page.</p>
      </div>
    );
  }

  // 3. Sinon, on affiche la page demandée
  return <Outlet />;
};