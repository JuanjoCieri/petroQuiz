import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { Dimensions, LogBox, Platform, Text, View } from "react-native";
import { themeColors } from "../theme";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  UserIcon as UserOutline,
  HomeIcon as HomeOutline,
  TrophyIcon as TrophyOutline,
  HeartIcon as HeartOutline,
  ShoppingBagIcon as BagOutline,
} from "react-native-heroicons/outline";
import {
  UserIcon as UserSolid,
  HomeIcon as HomeSolid,
  TrophyIcon as TrophySolid,
  HeartIcon as HeartSolid,
} from "react-native-heroicons/solid";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == "ios";
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
        {/* <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          height: 75,
          alignItems: "around",

          borderRadius: 100,
          marginHorizontal: 20,
          backgroundColor: themeColors.bgLight,
        },
        tabBarItemStyle: {
          marginTop: ios ? 0 : 0,
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="hotme" component={HomeScreen} />
      <Tab.Screen name="favourite" component={HomeScreen} />
      <Tab.Screen name="cart" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;

  if (route.name === "home") {
    icon = focused ? (
      <HomeSolid size="30" color={themeColors.bgDark} />
    ) : (
      <HomeOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === "hotme") {
    icon = focused ? (
      <HeartSolid size="30" color={themeColors.bgDark} />
    ) : (
      <HeartOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === "favourite") {
    icon = focused ? (
      <TrophySolid size="30" color={themeColors.bgDark} />
    ) : (
      <TrophyOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === "cart") {
    icon = focused ? (
      <UserSolid size="30" color={themeColors.bgDark} />
    ) : (
      <UserOutline size="30" strokeWidth={2} color="white" />
    );
  }

  let buttonClass = focused ? "bg-white" : "";
  return (
    <View
      className={"flex items-center rounded-full p-3 shadow " + buttonClass}
    >
      {icon}
    </View>
  );
};
