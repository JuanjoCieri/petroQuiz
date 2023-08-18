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
  ChartBarIcon as ChartBarOutline
} from "react-native-heroicons/outline";
import {
  UserIcon as UserSolid,
  HomeIcon as HomeSolid,
  TrophyIcon as TrophySolid,
  HeartIcon as HeartSolid,
  ChartBarIcon as ChartBarSolid
} from "react-native-heroicons/solid";
import Leaderboard from "../screens/LeaderboardScreen/Leaderboard";
import PlayScreen from "../screens/PlayScreen/PlayScreen";

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
          contentStyle: { backgroundColor: "none" },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
        <Stack.Screen
          name="Leaderboard"
          options={{ headerShown: false }}
          component={Leaderboard}
        />
        <Stack.Screen
          name="PlayScreen"
          options={{ headerShown: false }}
          component={PlayScreen}
        />
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
          // marginBottom: 20,
          height: 75,
          alignItems: "around",
          // borderRadius: 100,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          // marginHorizontal: 20,
          backgroundColor: themeColors.bgLight,
        },
        tabBarItemStyle: {
          marginTop: ios ? 0 : 0,
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="leaderboard" component={Leaderboard} />
      <Tab.Screen name="favourite" component={HomeScreen} />
      <Tab.Screen name="PlayScreen" component={PlayScreen} />
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
  } else if (route.name === "leaderboard") {
    icon = focused ? (
      <ChartBarSolid size="30" color={themeColors.bgDark} />
    ) : (
      <ChartBarOutline size="30" strokeWidth={2} color="white" />
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
