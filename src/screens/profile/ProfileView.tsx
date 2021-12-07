import React, { useEffect } from "react";
import { View, Text, useThemeColor } from "../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { styles as s, n, getFCMToken } from "../../util";
import { Avatar, Button } from "react-native-ui-lib";
import { ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
export function ProfileView(props: any) {
    const { colors } = useTheme();
    const dispatch = useDispatch();
    const logout = () => {
        dispatch({ type: "Logout" })
    }
    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((res: any) => console.log(res))
            .catch((error) => console.error(error))
        
    }, []);
    return (
        <ScrollView>
            <View style={[s.flex1, s.pa3, s.alignCenter]}>
                <Avatar
                    size={n(96)}
                    name={"profile"}
                    source={require("../../assets/images/profile.jpg")}
                    // backgroundColor="blue"
                    animate={true}
                />
            </View>
            <View style={[s.flex1, s.pa3]}>
                <VaLabel label="Name" value="John Deo" />
                <VaLabel label="Email" value="admin@gmail.com" />
                <VaLabel label="Mobile" value="+91 98815245420" />
                {/* <View style={[{ borderBottomColor: colors.border, borderBottomWidth: 1 }, s.pb1, s.mb3]}>
                    <Text style={[s.h5,{color:colors.text}]}>User Details</Text>

                </View>
                <View></View> */}
                <Button label="View My Details" outline marginB-20 marginT-30 />
                <Button
                    label="Update Qualification"

                    //   iconSource={() => (
                    //     <Ionicons
                    //       name="play"
                    //       size={n(16)}
                    //       color={colors.primary}
                    //       style={[s.ml3]}
                    //     />
                    //   )}
                    //   iconOnRight={true}
                    outline
                    marginB-20

                />
                <Button label="Edit Profile" outline marginB-20 />
                <Button label="Logout" outline marginB-20 onPress={logout} />
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
