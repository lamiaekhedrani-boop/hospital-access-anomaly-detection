// src/store/authStore.ts
import { create } from 'zustand';
import type { User, Role } from '../types/user.types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (role: Role) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (role) => set({
    isAuthenticated: true,
    user: {
      id: 'uuid-123',
      username: role.toLowerCase(),
      email: `${role.toLowerCase()}@hopital.com`,
      firstName: 'Dr. John',
      lastName: 'Doe',
      role: role,
    }
  }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));