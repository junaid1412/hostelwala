/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import * as React from 'react';

import { BottomTabParamList } from '../../types';
import { HomeNavigator, ProfileNavigator, TicketNavigator, NoticeNavigator, RentsNavigator, FeesNavigator } from "./StackNavigator"
import { RentsTopbar } from "./RentsTopbar"
import { RentList } from "../screens/rent/RentList"
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const { colors } = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="home"
      tabBarOptions={{ activeTintColor: colors.primary }}>
      <BottomTab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "home" : "home-outline"} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="rents"
        component={RentsNavigator}
        options={{
          title: "Rents",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "card" : "card-outline"} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="fees"
        component={FeesNavigator}
        options={{
          title: "Fees",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "list-circle" : "list-circle-outline"} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="notice"
        component={NoticeNavigator}
        options={{
          title: "Notice",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "notifications" : "notifications-outline"} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ticket"
        component={TicketNavigator}
        options={{
          title: "Ticket",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "film" : "film-outline"} color={color} />,
        }}
      />
      {/* <BottomTab.Screen
        name="profile"
        component={ProfileNavigator}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "person" : "person-outline"} color={color} />,
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}
