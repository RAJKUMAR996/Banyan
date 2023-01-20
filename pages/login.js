
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
import { Input, Block } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export const style = { flex: 1, alignItems: 'center',padding:15, justifyContent: 'center' };

export function LoginScreen({ navigation }) {
    return (
        <View style={style}>
            <Text>Logo</Text>
            <Text>Welcome to Banyan!</Text>

            <Input rounded placeholder='user name' />
            <Input rounded password viewPass placeholder='password' />
            <Button
                onPress={() => navigation.navigate('Home')}
            >Login</Button>
            <Button
                onPress={() => navigation.navigate('Register')}
            >Register</Button>
        </View>
    );
}

