import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export interface AuthResult {
  success: boolean;
  error?: string;
}