import React from "react";
import { FlatList, View as DView } from "react-native";
import { View, Text } from "../../components/Themed";
import { styles as s, n } from "../../util";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, ExpandableSection } from "react-native-ui-lib";

import { LabelView } from "../../components/LabelView";
export function TicketList(props: any) {
  const renderItem = ({ item, index }) => {
    return <RenderItem item={item} index={index} />;
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
        <DView style={[s.flexRow, s.justBetween]}>
          <LabelView label="Ticket Type" value="Akota PG" />
          <LabelView
            label="Status"
            value={props.index % 2 === 0 ? "Pending" : "Completed"}
            textStyle={[s.textRight]}
          />
        </DView>
        <LabelView label="Type" value="Refund not Recived" />
        <LabelView label="Create At" value="02-05-2012" />
      </Card>
    </View>
  );
});
