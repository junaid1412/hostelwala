import React from "react";
import { View as DView, Text } from "react-native";
import { styles as s, n } from "./../util";


export const LabelView = (props: any) => (
    <DView style={[s.my1,s.flex1,props.viewStyle]}>
        <Text style={[s.fontBold,s.body,{color:"gray"},props.textStyle]}>{props.label}</Text>
        <Text style={[s.title,props.textStyle]}>{props.value}</Text>
    </DView>
);