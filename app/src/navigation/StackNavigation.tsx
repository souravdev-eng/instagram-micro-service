import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/AuthScreen/SignUpScreen";
import LogInScreen from "../screens/AuthScreen/LogInScreen";
import HomeScreen from "../screens/HomeScreen";
import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createNativeStackNavigator();

export const AuthStackNavigation = () => {
  return (
    // @ts-ignore
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LogInScreen} />
    </Stack.Navigator>
  );
};

export const AppStackNavigation = () => {
  return (
    // @ts-ignore
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};
