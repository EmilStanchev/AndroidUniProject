import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import LoginScreen from "../screens/auth/Login";
import Home from "../screens/Home";
import LandmarkDetailScreen from "../screens/LandmarkDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabBarStyle = {
  left: 20,
  right: 20,
  height: 60,
  bottom: 20,
  borderRadius: 20,
  position: "absolute",
  alignItems: "center",
  paddingBottom: 0,
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="location-pin" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="UploadImage"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="location-pin" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="location-pin" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LandmarkDetail" component={LandmarkDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
