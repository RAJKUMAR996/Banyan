import LoginScreen from './src/pages/login';
import HomeScreen from './src/pages/dashboard';
import RegisterScreen from './src/pages/register';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './src/drawer/DrawerNavigator';
const Stack = createNativeStackNavigator();

class AppContainer extends React.Component {
  render() {
    return (
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Welcome to Banyan', headerShown: false, headerTitleAlign: 'center', }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator> */}
      <DrawerNavigator/>
      </NavigationContainer>
    );
  }
}

export default AppContainer;