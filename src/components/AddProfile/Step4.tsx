import React from "react";
import { View, Text } from "../../components/Themed";
import { styles as s, n } from "../../util";
import { TextField, Button } from "react-native-ui-lib";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { CustPicker } from "../CustPicker";
const idTypeOptions = [
    { value: "adharcard", label: "Aadhar Card" },
    { value: "voterid", label: "Voter Id" },
    { value: "drivinglicense", label: "Driving License" },
    { value: "pancard", label: "PAN Card" },
];
export function Step4(props: any) {
    const { colors } = useTheme();
    const [name, Setname] = React.useState("");
    const [idtype, Setidtype] = React.useState("adharcard");
    const [idno, Setidno] = React.useState("252215451982");
    const [idproof, Setidproof] = React.useState("");
    const [prof, Setprof] = React.useState("Developer");
    return (
        <View style={[s.alignSelfCenter, s.pt3, s.px4, s.flex1]}>
            <CustPicker
                options={idTypeOptions}
                placeholder="Select ID Type"
                value={idtype}
                onChange={Setidtype}
            />
            <TextField
                style={[s.w100]}
                defaultValue={idno}
                placeholder="ID Number"
                onChangeText={Setidno}
            />
            {/* <TextField
                style={[s.w100]}
                placeholder="Upload Id Proof"
                onChangeText={Setname}
            /> */}
            <TextField
                style={[s.w100]}
                defaultValue={prof}
                placeholder="Profession"
                onChangeText={Setprof}
            />
            <View style={[s.justBetween]}>
                <Button style={[s.my4]} label="Register" onPress={props.onSubmit} />
                <Button
                    style={[s.my4]}
                    label="Previous"
                    outline
                    iconSource={() => (
                        <Ionicons
                            name="ios-arrow-back"
                            size={n(18)}
                            color={colors.primary}
                        />
                    )}
                    onPress={props.onPrev}
                />
            </View>
        </View>
    );
}
