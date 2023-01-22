import { Button, View, BackHandler, Alert } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../pages/dashboard";
import Icon from 'react-native-vector-icons/Ionicons';

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function SignOutUser({ navigation }) {
  Alert.alert(
    "Exit App",
    "Do you want to exit?",
    [
      {
        text: "No",
        onPress: () => {navigation.goBack(); console.log("Cancel Pressed")},
        style: "cancel",
      },
      { text: "Yes", onPress: () => {BackHandler.exitApp(); navigation.goBack(); } },
    ],
    { cancelable: false }
  );
  return true;
}

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{ drawerLabel: "Dashboard" }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ drawerLabel: "Notifications" }}
      />
      <Drawer.Screen
        name="Profile"
        component={NotificationsScreen}
        options={{ drawerLabel: "Profile" }}
      />
      <Drawer.Screen
        name="Family Tree"
        component={NotificationsScreen}
        options={{ drawerLabel: "Family Tree" }}
      />
      <Drawer.Screen
        name="Search for Members"
        component={NotificationsScreen}
        options={{ drawerLabel: "Search for Members" }}
      />
      <Drawer.Screen
        name="Log Out"
        component={SignOutUser}
        options={{ drawerLabel: "Log Out" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
