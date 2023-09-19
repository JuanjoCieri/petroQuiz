import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { LogBox, Platform, View } from "react-native";
import { themeColors } from "../theme";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon as HomeOutline,
  TrophyIcon as TrophyOutline,
  ChartBarIcon as ChartBarOutline,
  UserIcon as UserOutline,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  TrophyIcon as TrophySolid,
  ChartBarIcon as ChartBarSolid,
  UserIcon as UserSolid,
} from "react-native-heroicons/solid";
import Leaderboard from "../screens/LeaderboardScreen/Leaderboard";
import LandingScreen from "../screens/LandingScreen/LandingScreen";
import PlayScreen from "../screens/PlayScreen/PlayScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import { useGetLoggedUser } from "../hooks/useGetLoggedUser";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import TournamentsScreen from "../screens/TournamentsScreen/TournamentsScreen";
import TournamentScreen from "../screens/TournamentScreen/TournamentScreen";
import PlayTournamentScreen from "../screens/PlayTournamentScreen/PlayTournamentScreen"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == "ios";
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function AppNavigation() {
  const loggedUser = useGetLoggedUser();
  const [user, setUser] = useState([]);

  const handleUserInfo = (userInfo) => {
    setUser(userInfo);
    loggedUser;
    console.log(userInfo, "userinfo");
  };

  if (user && Object.keys(user).length > 0) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
          headerMode="none"
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
            name="Tournament"
            options={{ headerShown: false }}
            component={TournamentsScreen}
          />
          <Stack.Screen
            name="PlayScreen"
            options={{ headerShown: false }}
            component={PlayScreen}
          />
          <Stack.Screen
            name="SearchScreen"
            options={{ headerShown: false }}
            component={SearchScreen}
          />
          <Stack.Screen
            name="TournamentDetailScreen"
            options={{ headerShown: false }}
            component={TournamentScreen}
          />
          <Stack.Screen 
          name="PlayTournamentScreen"
          options={{headerShown: false}}
          component={PlayTournamentScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LandingScreen onUserInfo={handleUserInfo} />;
  }
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          height: 75,
          alignItems: "around",
          backgroundColor: themeColors.bgLight,
        },
        tabBarItemStyle: {
          marginTop: ios ? 0 : 0,
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="LeaderboardScreen" component={Leaderboard} />
      <Tab.Screen name="TournamentScreen" component={TournamentsScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;

  if (route.name === "HomeScreen") {
    icon = focused ? (
      <HomeSolid size="30" color={themeColors.bgDark} />
    ) : (
      <HomeOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === "LeaderboardScreen") {
    icon = focused ? (
      <ChartBarSolid size="30" color={themeColors.bgDark} />
    ) : (
      <ChartBarOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === "TournamentScreen") {
    icon = focused ? (
      <TrophySolid size="30" color={themeColors.bgDark} />
    ) : (
      <TrophyOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === "ProfileScreen") {
    icon = focused ? (
      <UserSolid size="30" color={themeColors.bgDark} />
    ) : (
      <UserOutline size="30" strokeWidth={2} color="white" />
    );
  }

  let buttonClass = focused ? "bg-white" : "";
  return (
    <View className={"flex items-center rounded-full p-3 " + buttonClass}>
      {icon}
    </View>
  );
};
