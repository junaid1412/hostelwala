import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import { SafeAreaView } from "react-native-safe-area-context";
import {
    ForgetScreen,
    LoginScreen,
    SignupScreen,
    Step2Signup,
    Step1Signup,
} from "../screens/auth";

const Stack = createNativeStackNavigator();

export function Authnavigator(props: any) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="forgetpassword" component={ForgetScreen} />
            <Stack.Screen name="signup" component={Step1Signup} />
            <Stack.Screen name="verifyEmail" component={Step2Signup} options={{ headerShown: true, title: "Verify Email" }} />
        </Stack.Navigator>
    );
}
