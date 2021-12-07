/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 */
import { NavigationContainer } from "@react-navigation/native";
import { LightThemes, DarkThemes } from "../constants/Colors";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { enableScreens } from "react-native-screens";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { ProfileUpdateNavigator } from "./ProfileUpdateNavigator";
import { ProfileNavigator } from "./StackNavigator";
enableScreens();
import { Authnavigator } from "./Authnavigator";
import { useSelector } from "react-redux";
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const auth = useSelector((state: any) => state.auth);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? LightThemes : LightThemes}
    >
      {/* <ProfileUpdateNavigator /> */}
      {auth.authanticated ? <RootNavigator /> : <Authnavigator />}
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createNativeStackNavigator();

function RootNavigator() {
  const auth = useSelector((state: any) => state.auth);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!(auth.addprofile && auth.addqualification && auth.addroom) ? (
        <Stack.Screen name="Root2" component={ProfileUpdateNavigator} />
      ) : (
        <>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen name="profile" component={ProfileNavigator} />
        </>
      )}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
