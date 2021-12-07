import React from "react";
import { View, Text } from "../../components/Themed";
import { styles as s, n } from "../../util";

export function RentPayment(props: any) {
    return (
        <View style={[s.flex1, s.pa3, s.justCenter, s.alignCenter]}>
            <Text style={[s.h2]}>RentPayment</Text>
        </View>)
}