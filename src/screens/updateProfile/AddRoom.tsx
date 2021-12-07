import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "../../components/Themed";

import { styles as s, n } from "../../util";
import { TextField, Button, DateTimePicker } from "react-native-ui-lib";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { CustPicker } from "../../components/CustPicker";
import { useDispatch } from "react-redux";



export function AddRoom(props: any) {
    const { colors } = useTheme();
    const [step1, SetStep] = React.useState(true);
    const [hname, Sethname] = React.useState("");
    const [room, Setroom] = React.useState("");
    const [bed, Setbed] = React.useState("");
    const [monthlyStay, SetmonthlyStay] = React.useState("One_Month");
    const [tamount, Settamount] = React.useState("");
    const [paytype, Setpaytype] = React.useState("");
    const [payamunt, Setpayamunt] = React.useState("");
    const [paymode, Setpaymode] = React.useState("");
    const [bdate, Setbdate] = React.useState("");
    const dispatch = useDispatch()
    const OnSave = () => {
        dispatch({ type: "Addroom" })
    }
    return (
        <SafeAreaProvider style={[s.flex1]}>
            <ScrollView>
                {step1 ? (
                    <View style={[s.pt4, s.px3]}>
                        <CustPicker
                            options={HostelOption}
                            value={hname}
                            placeholder="PG/Hostel Location Name"
                            onChange={Sethname}
                        />
                        <CustPicker
                            options={roomOption}
                            value={room}
                            placeholder="Select Room"
                            onChange={Setroom}
                        />
                        <CustPicker
                            options={bedOption}
                            value={bed}
                            placeholder="Select Bed"
                            onChange={Setbed}
                        />

                        <Button style={[s.my4]} label="Next" onPress={() => SetStep(false)} />

                    </View>
                ) : (
                    <View style={[s.pt4, s.px3]}>
                        <CustPicker
                            options={MonthstayOption}
                            value={monthlyStay}
                            placeholder="Months(Stay)"
                            onChange={SetmonthlyStay}
                        />

                        <TextField
                            style={[s.w100]}
                            value={tamount}
                            keyboardType="numeric"
                            maxLength={10}
                            placeholder="Total Amount"
                            onChangeText={Settamount}
                        />
                        <CustPicker
                            options={payTypeOption}
                            value={paytype}
                            placeholder="Payment Type"
                            onChange={Setpaytype}
                        />
                        <TextField
                            style={[s.w100]}
                            defaultValue={payamunt}
                            placeholder="Payable Amount"
                            onChangeText={Setpayamunt}
                            keyboardType="numeric"
                            maxLength={10}
                        />
                        <CustPicker
                            options={payModeOption}
                            value={paymode}
                            placeholder="Payment Mode"
                            onChange={Setpaymode}
                        />
                        <DateTimePicker
                            containerStyle={{ marginVertical: 0 }}
                            title={""}
                            onChange={Setbdate}
                            placeholder="Booking Date(Rent start date)"
                            dateFormat={"MMMM Do, YYYY"}
                            value={bdate}
                        />

                        <Button style={[s.my4]} label="Save Room" onPress={OnSave} />
                        <Button
                            style={[s.my2]}
                            label="Go back"
                            link
                            onPress={() => SetStep(true)}
                        />
                    </View>
                )}
            </ScrollView>
        </SafeAreaProvider>
    );
}


const HostelOption = [...new Array(4).fill(5).map((el, i) => ({ value: `Hostel${i + 1}`, label: `Hostel ${i + 1}` }))];
const roomOption = [...new Array(4).fill(5).map((el, i) => ({ value: `Room${i + 1}`, label: `Room ${i + 1}` }))];
const bedOption = [...new Array(4).fill(5).map((el, i) => ({ value: `Bed ${i + 1}`, label: `Bed ${i + 1}` }))];
const MonthstayOption = [{ value: "One_Month", label: "One Month Non AC" }, { value: "One_Month_AC", label: "One Month AC" }, { value: "More Than One", label: "More Than One" }];
const payTypeOption = [{ value: "Full", label: "Full" }, { value: "Partial", label: "Partial" }, { value: "Advance", label: "Advance" }];
const payModeOption = [{ value: "Cash", label: "Cash" }, { value: "Cheque", label: "Cheque" }, { value: "Cheque", label: "Cheque" }];