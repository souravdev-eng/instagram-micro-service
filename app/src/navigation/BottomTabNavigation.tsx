import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { Icon as Icons } from "../constant";

const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LikedScreen from "../screens/LikedScreen";
import AddPostScreen from "../screens/AddPostScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const Icon = (
  { name, size = 30 }: { name: string; size?: number },
  props: any
) => {
  //  @ts-ignore
  return <Ionicons name={name} size={size} {...props} />;
};

const BottomTabNavigation = () => {
  const renderHomeIcon = (props: any) => {
    return props.focused ? (
      <Icon name="md-home-sharp" {...props} />
    ) : (
      <Icon name="md-home-outline" {...props} />
    );
  };

  const renderSearchIcon = (props: any) => {
    return props.focused ? (
      <Icon name="ios-search" {...props} size={props.size * 1.18} />
    ) : (
      <Icon name="search-outline" {...props} size={props.size * 1.17} />
    );
  };

  const renderLikeIcon = (props: any) => {
    return (
      <Image
        source={props.focused ? Icons.Active_Like : Icons.Like}
        style={{ width: 28, height: 28 }}
        resizeMode="contain"
      />
    );
  };

  const renderAddIcon = () => (
    <Image
      source={Icons.Add}
      style={{ width: 32, height: 32 }}
      resizeMode="contain"
    />
  );

  const renderProfileIcon = () => (
    <Image
      source={{ uri: image }}
      style={{
        width: 26,
        height: 26,
        resizeMode: "cover",
        borderRadius: 40,
      }}
    />
  );

  return (
    // @ts-ignore
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
      }}
      initialRouteName="Add"
    >
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{ tabBarIcon: (props) => renderHomeIcon(props) }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarIcon: (props) => renderSearchIcon(props) }}
      />
      <Tab.Screen
        name="Add"
        component={AddPostScreen}
        options={{
          tabBarIcon: () => renderAddIcon(),
        }}
      />
      <Tab.Screen
        name="Liked"
        component={LikedScreen}
        options={{
          tabBarIcon: (props) => renderLikeIcon(props),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => renderProfileIcon(),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
