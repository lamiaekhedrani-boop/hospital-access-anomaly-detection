import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import type { Role } from '../../types/user.types';

export const LoginPage = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (role: Role) => {
    login(role);
    if (role === 'ADMIN_SYS') navigate('/admin-sys/dashboard');
    else if (role === 'MEDECIN') navigate('/medecin/dashboard');
    else if (role === 'ASSISTANT') navigate('/assistant/dashboard');
    else navigate('/admin-hosp/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">PHS-DIA</h1>
        <p className="text-center text-gray-500 mb-6">Plateforme Hospitalière Sécurisée</p>
        
        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-600 mb-2">Simuler une connexion :</p>
          <button onClick={() => handleLogin('ADMIN_SYS')} className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">Admin Système</button>
          <button onClick={() => handleLogin('ADMIN_HOSP')} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Admin Hospitalier</button>
          <button onClick={() => handleLogin('ASSISTANT')} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Assistant</button>
          <button onClick={() => handleLogin('MEDECIN')} className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">Médecin</button>
        </div>
      </div>
    </div>
  );
};