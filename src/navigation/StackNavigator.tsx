import * as React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { HomeScreen } from "../screens/home"
import { NoticeList } from "../screens/notice"
import { RentList } from "../screens/rent"
import { FeesList } from "../screens/fees"
import { TicketList } from "../screens/ticket"
import { ProfileView, ChangePassword, ProfileEdit, UpdateQulification, ViewDetails } from "../screens/profile"

import { RentsTopbar } from "./RentsTopbar"
import { ProfileIcon } from './NavigationHelper';

const HomeStack = createNativeStackNavigator();

export function HomeNavigator() {

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="homenavi"
        component={HomeScreen}
        options={({ navigation }) => ({ headerTitle: 'Hostelwala', headerRight: () => <ProfileIcon  {...{ navigation }} /> })}

      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

export function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="profile"
        component={ProfileView}
        options={{ headerTitle: 'Profile' }}
      />
      <ProfileStack.Screen
        name="profileDetails"
        component={ViewDetails}
        options={{ headerTitle: 'My Details' }}
      />
      <ProfileStack.Screen
        name="updateprofile"
        component={ProfileEdit}
        options={{ headerTitle: 'Update Profile' }}
      />
      <ProfileStack.Screen
        name="changepassword"
        component={ChangePassword}
        options={{ headerTitle: 'Change Password' }}
      />
      <ProfileStack.Screen
        name="updateQualification"
        component={UpdateQulification}
        options={{ headerTitle: 'Update Qulification' }}
      />

    </ProfileStack.Navigator>
  );
}

const TicketStack = createNativeStackNavigator();

export function TicketNavigator() {
  return (
    <TicketStack.Navigator>
      <TicketStack.Screen
        name="homenavi"
        component={TicketList}
        options={({ navigation }) => ({ headerTitle: 'Tickets', headerRight: () => <ProfileIcon  {...{ navigation }} /> })}

      />
    </TicketStack.Navigator>
  );
}

const NoticeStack = createNativeStackNavigator();

export function NoticeNavigator() {
  return (
    <NoticeStack.Navigator>
      <NoticeStack.Screen
        name="notice"
        component={NoticeList}
        options={({ navigation }) => ({ headerTitle: 'Notice', headerRight: () => <ProfileIcon  {...{ navigation }} /> })}
      />
    </NoticeStack.Navigator>
  );
}



const RentsStack = createNativeStackNavigator();

export function RentsNavigator() {
  return (
    <RentsStack.Navigator>
      <RentsStack.Screen
        name="rent"
        component={RentList}
        options={({ navigation }) => ({ headerTitle: 'Rents', headerRight: () => <ProfileIcon  {...{ navigation }} /> })}
      />
    </RentsStack.Navigator>
  );
}


const FeesStack = createNativeStackNavigator();

export function FeesNavigator() {
  return (
    <FeesStack.Navigator>
      <FeesStack.Screen
        name="fees"
        component={FeesList}
        options={({ navigation }) => ({ headerTitle: 'Fees Refund', headerRight: () => <ProfileIcon  {...{ navigation }} /> })}
      />
    </FeesStack.Navigator>
  );
}
