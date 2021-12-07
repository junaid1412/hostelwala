import { ScrollView } from "react-native";
import React from "react";
// import { View, Text } from "../../components/Themed";

// import { styles as s, n } from "../../util";
import { TextField, Card, Button, Picker, DateTimePicker } from "react-native-ui-lib";
export const CustPicker = ({ options, value, placeholder, onChange }: { options: any; value?: string; placeholder?: string; onChange?: (d: any) => void }) => {
    // const { options,  value, placeholder, onChange } = props;
    return (
        <Picker
            // title={title}
            placeholder={placeholder}
            useNativePicker
            value={value}
            onChange={onChange}
        // rightIconSource={dropdown}
        // containerStyle={{ marginTop: 20 }}
        // renderPicker={() => {
        //   return (
        //     <View>
        //       <Text>Open Native Picker!</Text>
        //     </View>
        //   );
        // }}
        // renderNativePicker={props => {
        //   return (
        //     <View flex bg-red50>
        //       <Text>CUSTOM NATIVE PICKER</Text>
        //     </View>
        //   );
        // }}
        // topBarProps={{doneLabel: 'YES', cancelLabel: 'NO'}}
        >

            {options.map((option: any) => (
                <Picker.Item key={option.value} value={option.value} label={option.label} />
            ))}

        </Picker>
    );
}