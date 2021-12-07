import React from "react";
import { View, Text } from "../../components/Themed";
import { styles as s, n, getFCMToken } from "../../util";
import { TextField, Card, Button, Image } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../../redux/actions";

const show: any = require("./../../assets/images/show.png");
const hide: any = require("./../../assets/images/hide.png");
let large = "large";
export function LoginScreen(props: any) {
  const [showpass, Setshowpass] = React.useState(false);
  const [email, SetEmail] = React.useState("");
  const [fcm_token, Setfcm] = React.useState("");
  const [erremail, Seterremail] = React.useState("");
  const [errpass, Seterrpass] = React.useState("");
  const [password, Setpassword] = React.useState("");

  React.useEffect(() => {
    getFCMToken().then((res) => Setfcm(res));
  }, []);
  const { colors } = useTheme();

  const dispatch = useDispatch();
  const Login = () => {
    console.log("Login");
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        email: "mikedeo123@yopmail.com",
        password: "123456",
        fcm_token: fcm_token,
        device_type: "mike",
        device_id: "sdfasdf_dsfsadfwe",
      },
    });
  };

  const ShowBtn = {
    iconSource: show,
    onPress: () => Setshowpass(false),
    style: {},
  };
  const hideBtn = {
    iconSource: hide,
    onPress: () => Setshowpass(true),
    style: {},
  };

  return (
    <SafeAreaView style={[s.flex1]}>
      <View
        style={[
          s.flex1,
          s.px3,
          s.alignCenter,
          s.justCenter,
          { backgroundColor: "#fff" },
        ]}
      >
        <View
          style={[s.pb1, s.mb7, { width: "100%", backgroundColor: "#fff" }]}
        >
          <Image source={require("../../assets/images/logo.png")} />
        </View>
        <View
          style={[s.w80, s.alignSelfCenter, s.pa2, { backgroundColor: "#fff" }]}
        >
          <TextField
            style={[s.w100]}
            // title="Email"
            keyboardType="email-address"
            placeholder="Email"
            autoCapitalize={"none"}
            onChangeText={SetEmail}
            error={erremail}
          />
          <TextField
            style={[s.w100]}
            autoCapitalize={"none"}
            // title="Password"
            placeholder="Password"
            onChangeText={Setpassword}
            secureTextEntry={showpass}
            rightButtonProps={showpass ? ShowBtn : hideBtn}
            error={errpass}
          />
          <Button style={[s.my4]} label="Login" onPress={Login} />
          <Button
            style={[s.my2]}
            label="I forgot my password"
            link
            onPress={() => props.navigation.navigate("forgetpassword")}
          />
          <Button
            style={[s.my2]}
            label="Create a account"
            link
            onPress={() => props.navigation.navigate("signup")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
