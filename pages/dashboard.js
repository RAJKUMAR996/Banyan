
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
const style = { flex: 1, alignItems: 'center',padding:15, justifyContent: 'center' };
export function HomeScreen() {
    return (
        <View style={style}>
            <Text>Welcome to home!</Text>
            <Button >home</Button>
        </View>
    );
}


