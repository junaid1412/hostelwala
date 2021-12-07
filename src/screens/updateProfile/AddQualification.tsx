import React from "react";
import { View, Text } from "../../components/Themed";
import { styles as s, n } from "../../util";
import { TextField, Button } from "react-native-ui-lib";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

export function AddQualification(props: any) {
    const [qualific, Setqualific] = React.useState("Graduate");
    const [univer, Setuniver] = React.useState("GTU");
    const [subject, Setsubject] = React.useState("Arts");
    const [pyear, Setpyear] = React.useState("2019");
    const [percen, Setpercen] = React.useState("80");
    const dispatch = useDispatch();
    const onSave = () => {
        dispatch({ type: "Addqualification" })
    }
    return (
        <SafeAreaProvider style={[s.flex1]}>
            <View style={[s.px4, s.pt4]}>
                <TextField
                    style={[s.w100]}
                    defaultValue={qualific}
                    placeholder="Qualification"
                    onChangeText={Setqualific}
                />
                <TextField
                    style={[s.w100]}
                    // title="Email"
                    defaultValue={univer}
                    keyboardType="email-address"
                    placeholder="University/College/School"
                    autoCapitalize={"none"}
                    onChangeText={Setuniver}
                />
                <TextField
                    style={[s.w100]}
                    defaultValue={subject}
                    placeholder="Subject"
                    onChangeText={Setsubject}
                />
                <TextField
                    style={[s.w100]}
                    defaultValue={pyear}
                    keyboardType="numeric"
                    placeholder="Passing Year"
                    maxLength={4}
                    onChangeText={Setpyear}
                />
                <TextField
                    style={[s.w100]}
                    defaultValue={percen}
                    keyboardType="numeric"
                    placeholder="Percentage"
                    maxLength={2}
                    onChangeText={Setpercen}
                />
                {/* <Button style={[s.my2]} label="Go back to Login" link onPress={() => props.navigation.navigate("login")} /> */}
                {/* <Button style={[s.my2]} label="I forgot my password" link onPress={() => props.navigation.navigate("forgetpassword")} /> */}
            </View>
            <View style={[s.alignCenter, s.px4]}>
                {/* <Button style={[s.my4]} label="Register" onPress={props.onSubmit} /> */}
                <Button style={[s.my4]} label="Save" fullWidth={false} onPress={onSave} />
            </View>
        </SafeAreaProvider>
    );
}
