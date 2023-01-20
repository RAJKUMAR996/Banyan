import { StyleSheet, Text, View } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './pages/Login';
import { HomeScreen } from './pages/Dashboard';
import { RegisterScreen } from './pages/Register';

/// Theme reference https://galio.io/docs/#/components/input?id=props


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Welcome to Banyan', headerTitleAlign: 'center', }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default withGalio(App, styles);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  Button: {
    borderRadius: 20
  }
});
