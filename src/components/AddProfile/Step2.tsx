import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "../../components/Themed";

import { styles as s, n } from "../../util";
import { TextField, Card, Button, Image, Wizard } from "react-native-ui-lib";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export function Step2(props: any) {
    const { colors } = useTheme()
    const [gname, Setgname] = React.useState("Mukesh");
    const [gphone, Setphone] = React.useState("9722654758");
    const [relation, Setrelation] = React.useState("Father");
    const [goccupation, Setgoccupation] = React.useState("Salaried");
    return (
        <View style={[s.alignSelfCenter, s.py3, s.px4]}>
            <TextField
                style={[s.w100]}
                defaultValue={gname}
                placeholder="Guardian Name"
                onChangeText={Setgname}
            />
            <TextField
                style={[s.w100]}
                defaultValue={gphone}
                keyboardType="numeric"
                maxLength={10}
                placeholder="Guardian Phone "
                onChangeText={Setphone}
            />
            <TextField
                style={[s.w100]}
                defaultValue={relation}
                placeholder="Guardian Relation "
                onChangeText={Setrelation}
            />
            <TextField
                style={[s.w100]}
                defaultValue={goccupation}
                placeholder="Guardian Occupation"
                onChangeText={Setgoccupation}
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