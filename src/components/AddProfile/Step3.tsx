import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "../../components/Themed";

import { styles as s, n } from "../../util";
import { TextField, Card, Button, Image, Wizard } from "react-native-ui-lib";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export function Step3(props: any) {
    const { colors } = useTheme()
    const [address, Setaddress] = React.useState("1072 Kenwood Place");
    const [state, Setstate] = React.useState("Florida");
    const [city, Setcity] = React.useState("Plantation");
    const [pincode, Setpincode] = React.useState("33317");
    return (
        <View style={[s.alignSelfCenter, s.py3, s.px4]}>
            <TextField
                style={[s.w100]}
                placeholder="Address"
                multiline={true}
                defaultValue={address}
                onChangeText={Setaddress}
            />
            <TextField
                style={[s.w100]}
                placeholder="State"
                defaultValue={state}
                onChangeText={Setstate}
            />
            <TextField
                style={[s.w100]}
                placeholder="City "
                defaultValue={city}
                onChangeText={Setcity}
            />
            <TextField
                style={[s.w100]}
                keyboardType="numeric"
                maxLength={8}
                defaultValue={pincode}
                placeholder="Pincode"
                onChangeText={Setpincode}
            />

            <View style={[s.flexRow, s.justBetween]}>
                <Button
                    style={[s.my4]}
                    outline

                    label="Previous"
                    size={Button.sizes.small}
                    iconSource={() => (
                        <Ionicons name="ios-arrow-back" size={n(18)} color={colors.primary} />
                    )}
                    onPress={props.onPrev}
                />
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
    )
}