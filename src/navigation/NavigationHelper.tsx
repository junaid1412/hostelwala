import Ionicons from '@expo/vector-icons/Ionicons';
import * as React from 'react';
import { useNavigation } from '@react-navigation/core';


export function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}



export function ProfileIcon(props: any) {
    const navigation = useNavigation()
    return <Ionicons name="person-circle" size={30} onPress={() => navigation.navigate("profile")} />
}
