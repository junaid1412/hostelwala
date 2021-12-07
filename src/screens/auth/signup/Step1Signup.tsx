import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "../../../components/Themed";
import valid from "validate.js";
import { styles as s, n } from "../../../util";
import { TextField, Card, Button, Image } from "react-native-ui-lib";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export function Step1Signup(props: any) {
    const show: any = require("../../../assets/images/show.png");
    const hide: any = require("../../../assets/images/hide.png");
    const img: any = require("../../../assets/images/logo.png");
    const ShowBtn = {
        iconSource: show,
        onPress: () => Setshowpass(false),
        style: {},
    };
    const hideBtn = {
        iconSource: hide,
        onPress: () => Setshowpass(true),
        style: {},
    };
    const { colors } = useTheme();
    const [name, Setname] = React.useState("");
    const [mobile, Setmobile] = React.useState("");
    const [password, Setpassword] = React.useState("");
    const [showpass, Setshowpass] = React.useState(false);
    const [ename, Setename] = React.useState("");
    const [emobile, Setemobile] = React.useState("");
    const [epassword, Setepassworde] = React.useState("");
    const newStep = () => {
        let vEm = valid(
            { name, mobile, password },
            {
                name: { presence: { allowEmpty: false } },
                mobile: {
                    length: {
                        minimum: 3,
                        tooShort: "needs to have %{count} words or more",
                    }, presence: { allowEmpty: false }
                },
                password: { presence: { allowEmpty: false } },
            }
        );
        if (vEm) {
            vEm.name && vEm.name.length > 0 && Setename(vEm.name[0]);
            vEm.mobile && vEm.mobile.length > 0 && Setemobile(vEm.mobile[0]);
            vEm.password && vEm.password.length > 0 && Setepassworde(vEm.password[0]);
        } else {
            props.navigation.navigate("verifyEmail", { name, mobile, password });
        }
    };
    return (
        <SafeAreaProvider
            style={[
                s.flex1,
                s.px3,
                s.alignCenter,
                s.justCenter,
                { backgroundColor: "#fff" },
            ]}
        >
            <View style={[s.pb1, s.mb3, { width: "100%", backgroundColor: "#fff" }]}>
                <Image source={img} />
                <Button
                    style={[s.my4]}
                    label="Signup"
                    outline
                    outlineColor={colors.primary}
                    outlineWidth={3}
                    borderRadius={0}
                />
            </View>
            <View
                style={[s.w80, s.alignSelfCenter, s.pa2, { backgroundColor: "#fff" }]}
            >
                <TextField
                    style={[s.w100, s.pb1]}
                    placeholder="Full name"
                    onChangeText={Setname}
                    error={ename}
                />

                <TextField
                    style={[s.w100]}
                    keyboardType="numeric"
                    placeholder="Mobile Number"
                    maxLength={10}
                    autoCapitalize={"none"}
                    onChangeText={Setmobile}
                    error={emobile}
                />
                <TextField
                    style={[s.w100]}
                    autoCapitalize={false}
                    // title="Password"
                    placeholder="Password"
                    onChangeText={Setpassword}
                    secureTextEntry={showpass}
                    rightButtonProps={showpass ? ShowBtn : hideBtn}
                    error={epassword}
                />
                <Button style={[s.my4]} label="Signup" onPress={newStep} />
                <Button
                    style={[s.my2]}
                    label="Go back to Login"
                    link
                    onPress={() => props.navigation.navigate("login")}
                />
                {/* <Button style={[s.my2]} label="I forgot my password" link onPress={() => props.navigation.navigate("forgetpassword")} /> */}
            </View>
        </SafeAreaProvider>
    );
}
