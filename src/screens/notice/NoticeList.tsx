import React from "react";
import { FlatList, View as DView } from "react-native";
import { View, Text } from "../../components/Themed";
import { LabelView } from "../../components/LabelView";
import { styles as s, n } from "../../util";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, ExpandableSection } from "react-native-ui-lib";

export function NoticeList(props: any) {
    const renderItem = ({ item, index }) => {
        return <RenderItem item={item} />;
    };
    return (
        <FlatList data={[...new Array(5).fill("5")]} renderItem={renderItem} />
    );
}

const RenderItem = React.memo((props: any) => {
    const { item } = props;
    return (
        <View style={[s.pa2]}>
            <Card style={[ s.pa2]}>
                <LabelView label="Name" value="Mike" />
                <LabelView label="Content" value="43 PG in Vadodara for males, females & working women" />
                <LabelView label="Create At" value="02-05-2012" />
            </Card>
        </View>
    );
});

// const LableView = (props: any) => (
//     <DView>
//         <Text style={[s.fontBold]}>{props.label}</Text>
//         <Text style={[s.title]}>{props.value}</Text>
//     </DView>
// );
