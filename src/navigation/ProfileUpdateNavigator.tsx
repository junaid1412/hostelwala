import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import { SafeAreaView } from "react-native-safe-area-context";
import { SignupScreen } from "../screens/auth";

import { useSelector } from "react-redux";

import { AddProfile } from "../screens/updateProfile/AddProfile"
import { AddQualification } from "../screens/updateProfile/AddQualification"
import { AddRoom } from "../screens/updateProfile/AddRoom"
const Stack = createNativeStackNavigator();

export function ProfileUpdateNavigator(props: any) {
  const auth = useSelector((state: any) => state.auth);
  return (
    <Stack.Navigator screenOptions={{}}>
      {!auth.addprofile && (
        <Stack.Screen
          name="addprofile"
          component={AddProfile}
          options={{ title: "Update Profile" }}
        />)}

      {!auth.addqualification && (
        <Stack.Screen
          name="addqualification_f"
          component={AddQualification}
          options={{ title: "Add Qualification" }}
        />)}
      {!auth.addroom && (
        <Stack.Screen
          name="addroom"
          component={AddRoom}
          options={{ title: "Add Room" }}
        />)}
    </Stack.Navigator>
  );
}
