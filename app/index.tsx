import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { RootStackParamList } from "../types";
import { checkAuth } from "../utils/auth";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Page() {
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
    <NavigationIndependentTree>
    <View style={styles.container }>
      <View style={styles.main}>
                <NavigationContainer>
          <Stack.Navigator 
            initialRouteName={isLoggedIn ? "Home" : "Welcome"}
            screenOptions={{
              headerStyle: { backgroundColor: '#007AFF' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          >
            <Stack.Screen 
              name="Welcome" 
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{ headerLeft: () => null }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>

        </NavigationIndependentTree>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
