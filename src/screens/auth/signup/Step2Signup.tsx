import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "../../../components/Themed";
import valid from "validate.js";
import { styles as s, n } from "../../../util";
import { TextField, Card, Button, Image } from "react-native-ui-lib";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export function Step2Signup(props: any) {
    const auth = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();
    const { colors } = useTheme();
    const [email, SetEmail] = React.useState("");
    const [emailError, SetemailError] = React.useState("");

    const [sendOtp, SetsendOtp] = React.useState(false);
    const [otp, SetOtp] = React.useState("1234");
    const [errr, Seterr] = React.useState("");
    const verifyEmail = () => {
        let vEm = valid({ email }, { email: { email: true, presence: { allowEmpty: false } } });
        if (vEm && vEm.email && vEm.email.length > 0) {
            SetemailError(vEm.email[0]);
        } else {

            SetemailError("")
            // dispatch({ type: "EmailOtp_REQUEST", payload: { email } });
            dispatch({ type: "EmailOtp_SUCCESS", payload: { OTP: "1234" } });
        }
    };

    const verifyOtp = () => {
        if (otp == auth.emailOtp) {
            Seterr("");
            SetemailError("")
            // const { mobile, password, name,  } =
            //     props.routes.params;
            dispatch({
                type: "REGISTER_REQUEST",
                payload: {
                    // name,
                    // email,
                    // mobile,
                    // password,

                },
            });
        }
    };
    React.useEffect(() => {
        if (auth.emailverifErro && auth.emailverifErro.length > 0) {
            SetemailError(auth.emailverifErro);
        }
    }, [auth]);
    return (
        <SafeAreaProvider style={[s.flex1, s.px3, s.alignCenter]}>
            <View style={[s.w90, s.mt4, s.pa2]}>
                <TextField
                    style={[s.w100]}
                    // title="Email"
                    keyboardType="email-address"
                    placeholder="Email"
                    autoCapitalize={"none"}
                    onChangeText={SetEmail}
                    error={emailError}
                />


                {auth.emailOtp.length !== 0 ? (
                    <TextField
                        style={[s.w100]}
                        keyboardType="numeric"
                        placeholder="OTP"
                        maxLength={8}
                        autoCapitalize={"none"}
                        onChangeText={SetOtp}
                    />
                ) : (
                    <View style={[s.alignStart]}>
                        <Button
                            size={Button.sizes.medium}
                            style={[s.mt2, s.mb6]}
                            label="Send OTP"
                            onPress={verifyEmail}
                        />
                    </View>
                )}
                {errr.length > 0 && (
                    <Text style={[s.body, { color: colors.notification }]}>{errr}</Text>
                )}

                {auth.emailOtp.length !== 0 && <Button style={[s.my4]} label="Verify OTP" onPress={verifyOtp} />}
                <Button
                    style={[s.my2]}
                    label="Go back"
                    link
                    onPress={() => props.navigation.goBack()}
                />
                {/* <Button style={[s.my2]} label="I forgot my password" link onPress={() => props.navigation.navigate("forgetpassword")} /> */}
            </View>
        </SafeAreaProvider>
    );
}
