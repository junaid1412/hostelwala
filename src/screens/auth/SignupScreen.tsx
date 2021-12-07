import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "../../components/Themed";

import { styles as s, n } from "../../util";
import { TextField, Card, Button, Image } from "react-native-ui-lib";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

export function SignupScreen(props: any) {
    const { colors } = useTheme();
    const [name, Setname] = React.useState("");
    const [email, SetEmail] = React.useState("");
    const [mobile, Setmobile] = React.useState("");
    const [password, Setpassword] = React.useState("");
    return (
        <SafeAreaProvider style={[s.flex1, s.px3, s.alignCenter, s.justCenter, { backgroundColor: "#fff" }]}>
            <View
                style={[
                    s.pb1,
                    s.mb3,
                    { width: "100%", backgroundColor: "#fff" }
                ]}
            >
                <Image source={require("../../assets/images/logo.png")} />
                <Button style={[s.my4]} label="Signup" outline
                    outlineColor={colors.primary}
                    outlineWidth={3}
                    borderRadius={0} />
            </View>
            <View style={[s.w80, s.alignSelfCenter, s.pa2, { backgroundColor: "#fff" }]}>

                <TextField
                    style={[s.w100]}
                    placeholder="Full name"
                    onChangeText={Setname}
                />
                <TextField
                    style={[s.w100]}
                    // title="Email"
                    keyboardType="email-address"
                    placeholder="Email"
                    autoCapitalize={"none"}
                    onChangeText={SetEmail}
                />
                <TextField
                    style={[s.w100]}
                    keyboardType="numeric"
                    placeholder="Mobile Number"
                    maxLength={10}
                    autoCapitalize={"none"}
                    onChangeText={Setmobile}
                />
                <TextField
                    style={[s.w100]}
                    autoCapitalize={false}
                    // title="Password"
                    placeholder="Password"
                    onChangeText={Setpassword}
                    secureTextEntry={true}
                />
                <Button style={[s.my4]} label="Signup" />
                <Button style={[s.my2]} label="Go back to Login" link onPress={() => props.navigation.navigate("login")} />
                {/* <Button style={[s.my2]} label="I forgot my password" link onPress={() => props.navigation.navigate("forgetpassword")} /> */}

            </View>
        </SafeAreaProvider>)
}