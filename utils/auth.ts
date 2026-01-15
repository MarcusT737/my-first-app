import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthResult } from '../types';

export const login = async (email: string, password: string): Promise<AuthResult> => {
  if (email && password.length >= 6) {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    await AsyncStorage.setItem('userEmail', email);
    return { success: true };
  }
  return { success: false, error: 'Invalid credentials' };
};

export const signup = async (email: string, password: string): Promise<AuthResult> => {
  if (email && password.length >= 6) {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    await AsyncStorage.setItem('userEmail', email);
    return { success: true };
  }
  return { success: false, error: 'Password must be at least 6 characters' };
};

export const logout = async (): Promise<void> => {
  await AsyncStorage.removeItem('isLoggedIn');
  await AsyncStorage.removeItem('userEmail');
};

export const checkAuth = async (): Promise<boolean> => {
  const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
  return isLoggedIn === 'true';
};

export const getCurrentUser = async (): Promise<string | null> => {
  const email = await AsyncStorage.getItem('userEmail');
  return email;
};