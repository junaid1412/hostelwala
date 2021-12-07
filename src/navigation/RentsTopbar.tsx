import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RentDetail, RentList, RentPayment } from "../screens/rent"
const Tab = createMaterialTopTabNavigator();

export function RentsTopbar() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Monthly Rent" component={RentDetail} />
            <Tab.Screen name="Partial Payment List" component={RentList} />
            <Tab.Screen name="Advabce Rent" component={RentList} />
            <Tab.Screen name="Received Rent" component={RentList} />
            <Tab.Screen name="View Rent" component={RentList} />
        </Tab.Navigator>
    );
}