import LoginScreen from './pages/Login';
import HomeScreen  from './pages/Dashboard';
import RegisterScreen from './pages/Register';
import Familytree from './pages/Familytree';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class AppContainer extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Welcome to Banyan', headerTitleAlign: 'center', }} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FamilyTree" component={Familytree} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppContainer;