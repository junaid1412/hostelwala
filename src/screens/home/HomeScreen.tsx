import React from "react";
import {Button} from "react-native-ui-lib"
import { View, Text } from "../../components/Themed";
import { styles as s, n } from "../../util";

export function HomeScreen(props: any) {
    return (
        <View style={[s.flex1, s.pa3, s.justStart,]}>

       
    <Button label="Update Qualification"  style={[s.my3]} bg-blue30/>
    <Button label="My Details"  style={[s.my3]} bg-green10/>
    <Button label="Update Image"  style={[s.my3]} bg-orange10/>
              
        </View>)
}