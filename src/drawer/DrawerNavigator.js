import { Button, View, BackHandler, Alert } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../pages/dashboard";
import TreeView from '../pages/treeView.js';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/FontAwesome';
import User from "../pages/user";
import NotificationScreen from '../pages/notification'
import Search from "../pages/search";

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
        onPress: () => { navigation.goBack(); console.log("Cancel Pressed") },
        style: "cancel",
      },
      { text: "Yes", onPress: () => { BackHandler.exitApp(); navigation.goBack(); } },
    ],
    { cancelable: false }
  );
  return true;
}

const Drawer = createDrawerNavigator();
class DrawerNavigator extends React.Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={HomeScreen}
          options={{
            drawerLabel: "Dashboard",
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="home"
                size={size}
                color={focused ? 'red' : 'black'}
              />
            )
          }}
        />
        {/* <i class="fa-regular fa-comment"></i> */}
        <Drawer.Screen
          name="Latest Notifications"
          component={NotificationScreen}
          options={{
            drawerLabel: "Notifications",
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="comment"
                size={size}
                color={focused ? 'red' : 'black'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={User}
          options={{
            drawerLabel: "Profile",
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="user"
                size={size}
                color={focused ? 'red' : 'black'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Family Tree"
          component={TreeView}
          options={{
            drawerLabel: "Family Tree",
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="tree"
                size={size}
                color={focused ? 'red' : 'black'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Search for Members"
          component={Search}
          options={{
            drawerLabel: "Search for Members",
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="search"
                size={size}
                color={focused ? 'red' : 'black'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Log Out"
          component={SignOutUser}
          options={{
            drawerLabel: "Log Out",
            drawerIcon: ({ focused, size }) => (
              <Icons
                name="close"
                size={size}
                color={focused ? 'red' : 'black'}
              />
            )
          }}
        />
      </Drawer.Navigator>
    );
  }
};

export default DrawerNavigator;
