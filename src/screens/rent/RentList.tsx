import React from "react";
import { FlatList, View as DView } from "react-native";
import { View, Text, } from "../../components/Themed";
import { styles as s, n } from "../../util";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-ui-lib";

import { LabelView } from "../../components/LabelView";
// return (
//     <View style={[s.flex1, s.pa3, s.justCenter, s.alignCenter]}>
//         <Text style={[s.h2]}>RentList</Text>
//     </View>)
export function RentList(props: any) {
  const renderItem = ({ item, index }) => {
    return (
      <View style={[s.pa2]}>
        <Card style={[, s.pa2]}>
          <LabelView label="Tenant Name" value="Refund not Recived" />
          <DView style={[s.flexRow, s.justBetween, s.my1]}>

            <LabelView label="Booked Month" value="Sep-2021" />
            <LabelView label="Due Date" value="15-10-2021" textStyle={[s.textRight]}/>
          </DView>

          <DView style={[s.flexRow, s.justBetween, s.my1]}>

            <LabelView label="Payment Type" value="Partial" />
            <LabelView label="Payment Mode" value="Cash" textStyle={[s.textRight]}/>
          </DView>
          <LabelView label="Total Amount" value="8000" />
          <DView style={[s.flexRow, s.justBetween, s.my1]}>
          <LabelView label="Paid Amount" value="7000" />
          <LabelView label="Remaining Amount" value="1000"  textStyle={[s.textRight]}/>

          </DView>
          <LabelView label="Create At" value="02-07-2021" />
        </Card>
      </View>
    );
  };
  return (
    <FlatList data={[...new Array(7).fill("5")]} renderItem={renderItem} />
  );
}
