import LoginScreen from './src/pages/login';
import HomeScreen  from './src/pages/dashboard';
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
      <DrawerNavigator/>
        {/* <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Welcome to Banyan', headerTitleAlign: 'center', }} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator> */}
      </NavigationContainer>
    );
  }
}

export default AppContainer;