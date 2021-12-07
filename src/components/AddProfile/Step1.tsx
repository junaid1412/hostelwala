import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "../../components/Themed";

import { styles as s, n } from "../../util";
import { TextField, Card, Button, Picker, DateTimePicker } from "react-native-ui-lib";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { CustPicker } from "../CustPicker"
const GenderOptions = [{ value: "male", label: "Male" }, { value: "female", label: "Female" },]

export function Step1(props: any) {
    const { colors } = useTheme();
    const [fname, Setfname] = React.useState("Anil");
    const [mname, Setmname] = React.useState("Mukesh");
    const [lname, Setlname] = React.useState("Patel");
    const [gender, Setgender] = React.useState("male");
    const [DOB, setDOB] = React.useState("");
    return (
        <View style={[s.alignSelfCenter, s.py3, s.px4]}>
            <TextField
                style={[s.w100]}
                defaultValue={fname}
                placeholder="First Name"
                onChangeText={Setfname}
            />
            <TextField
                defaultValue={mname}
                style={[s.w100]}
                placeholder="Middle Name"
                onChangeText={Setmname}
            />
            <TextField
                defaultValue={lname}
                // editable={false}
                style={[s.w100]}
                placeholder="Last Name"
                onChangeText={Setlname}
            />
            <CustPicker options={GenderOptions} value={gender} placeholder="Select gender" onChange={Setgender} />
            {/* <TextField value={gender} style={[s.w100]} placeholder="Gender" onChangeText={Setgender} /> */}
            {/* <TextField
                style={[s.w100]}
                placeholder="Date Of Birth"
                onChangeText={setDOB}
            /> */}
            <DateTimePicker
                containerStyle={{ marginVertical: 0 }}
                title={''}
                onChange={setDOB}
                placeholder={'Date Of Birth'}
                dateFormat={'MMMM Do, YYYY'}
                value={new Date('October 13, 2000')}
            />
            <View style={[s.flexRow, s.justCenter]}>
                <Button
                    style={[s.my4]}
                    label="Next"
                    iconOnRight={true}
                    iconSource={() => (
                        <Ionicons name="ios-arrow-forward" size={n(18)} color={"#fff"} />
                    )}
                    onPress={props.onNext}
                />
            </View>
        </View>
    );
}


