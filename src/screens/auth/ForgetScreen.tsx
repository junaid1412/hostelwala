import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "../../components/Themed";

import { styles as s, n } from "../../util";
import { TextField, Card, Button, Image } from "react-native-ui-lib";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

export function ForgetScreen(props: any) {
    const { colors } = useTheme();
    const [email, SetEmail] = React.useState("");
    return (
        <SafeAreaProvider>
            <View style={[s.flex1, s.px3, s.alignCenter, s.justCenter, { backgroundColor: "#fff" }]}>
                <View
                    style={[
                        s.pb1,
                        s.mb2,
                        s.alignCenter,
                        { width: "80%", backgroundColor: "#fff" }
                    ]}
                >
                    <Image source={require("../../assets/images/logo.png")} style={{ width: "100%", resizeMode: "contain" }} />
                    <Button style={[s.my4]} label="Forgot Password" outline
                        outlineColor={colors.primary}
                        outlineWidth={3}
                        borderRadius={0} />
                </View>
                <View style={[s.w80, s.alignSelfCenter, s.pa2, { backgroundColor: "#fff" }]}>
                    <TextField
                        style={[s.w100]}
                        // title="Email"
                        keyboardType="email-address"
                        placeholder="Email"
                        autoCapitalize={"none"}
                        onChangeText={SetEmail}
                    />

                    <Button style={[s.my4]} label="Reset Password" />
                    <Button style={[s.my2]} label="Go back to Login" link onPress={() => props.navigation.navigate("login")} />
                    <Button style={[s.my2]} label="Create a account" link onPress={() => props.navigation.navigate("signup")} />
                </View>
            </View>
        </SafeAreaProvider>)
}