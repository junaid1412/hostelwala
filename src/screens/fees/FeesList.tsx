import React from "react";
import { FlatList, View as Dview } from "react-native";
import { View, Text } from "../../components/Themed";
import { styles as s, n } from "../../util";
import { LabelView } from "../../components/LabelView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, ExpandableSection } from "react-native-ui-lib";
export function FeesList(props: any) {
    const renderItem = ({ item, index }) => {
        return <RenderItem item={item} />;
    };
    return (
        <FlatList data={[...new Array(7).fill("5")]} renderItem={renderItem} />
    );
}

const RenderItem = React.memo((props: any) => {
    const { item } = props;
    return (
        <View style={[s.pa2]}>
            <Card style={[, s.pa2]}>
                <Dview style={[s.flexRow, s.justBetween, s.my1]}>
                    <LabelView label="Name" value="Mike" />
                    <LabelView label="Mobile" value="9871742785" textStyle={[s.textRight]} />
                </Dview>
                <Dview style={[s.flexRow, s.justBetween, s.my1]}>

                    <LabelView label="PG Location" value="Akota PG" />
                    <LabelView label="Room" value="5 of floor" textStyle={[s.textRight]} />
                </Dview>
                <LabelView label="Bed" value="2 of Room 5" viewStyle={[s.my1]} />
                <LabelView label="Bank Name" value="State Bank Of India" viewStyle={[s.my1]} />
                <LabelView label="Bank A/c No" value="95576446783516346" viewStyle={[s.my1]} />
                <Dview style={[s.flexRow, s.justBetween, s.my1]}>
                    <LabelView label="Refund Amount" value="200" />
                    <LabelView label="Create At" value="02-05-2012"  textStyle={[s.textRight]} />
                </Dview>
                {/* <Text>Name</Text>
            <Text>Mobile</Text>
            <Text>PG Location</Text>
            <Text>Room</Text>
            <Text>Bed</Text>
            <Text>Bank Name</Text>
            <Text>Bank A/c No </Text>
            <Text>Refund Amount </Text>
            <Text>Create At</Text> */}
            </Card>
        </View>
    );
});
