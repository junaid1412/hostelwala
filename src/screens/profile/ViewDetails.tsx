import React from "react";
import { View, Text, useThemeColor } from "../../components/Themed";
import { Ionicons } from "@expo/vector-icons";

import { styles as s, n } from "../../util";
import { Avatar, Button } from "react-native-ui-lib";
import { ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
export function ViewDetails(props: any) {
    const { colors } = useTheme();
    return (
        <ScrollView>
            <View style={[s.flex1, s.pa3]}>
                <VaLabel label="Name" value="John Deo" />
                <VaLabel label="Email" value="admin@gmail.com" />
                <VaLabel label="Mobile" value="+91 98815245420" />
            </View>
        </ScrollView>
    );
}

const VaLabel = React.memo(
    ({ label, value }: { label: string; value: string }) => {
        const { colors } = useTheme();
        return (
            <View style={[s.mb3]}>
                <Text style={[{ color: colors.primary }]}>{label}</Text>
                <Text style={[]}>{value}</Text>
            </View>
        );
    }
);
