import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { RootStackParamList } from './types';
import { checkAuth } from './utils/auth';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const loggedIn = await checkAuth();
    setIsLoggedIn(loggedIn);
    setIsLoading(false);
  };

  if (isLoading) {
    return null;
  }

  return (
    // <NavigationContainer>
    //   <Stack.Navigator 
    //     initialRouteName={isLoggedIn ? "Home" : "Welcome"}
    //     screenOptions={{
    //       headerStyle: { backgroundColor: '#007AFF' },
    //       headerTintColor: '#fff',
    //       headerTitleStyle: { fontWeight: 'bold' },
    //     }}
    //   >
    //     <Stack.Screen 
    //       name="Welcome" 
    //       component={WelcomeScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="Signup" component={SignupScreen} />
    //     <Stack.Screen 
    //       name="Home" 
    //       component={HomeScreen}
    //       options={{ headerLeft: () => null }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <>Hej</>
  );
}