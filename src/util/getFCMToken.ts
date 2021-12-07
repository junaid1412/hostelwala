import messaging  from "@react-native-firebase/messaging"
import { firebase } from '@react-native-firebase/messaging';

export async function getFCMToken(){
    const token = await messaging().getToken();
    return token
}