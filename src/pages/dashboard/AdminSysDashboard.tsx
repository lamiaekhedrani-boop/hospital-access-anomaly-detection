import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

export const AdminSysDashboard = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard - Admin Système</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Déconnexion</button>
      </div>
      <p>Bienvenue {user?.firstName} ({user?.role}).</p>
    </div>
  );
};