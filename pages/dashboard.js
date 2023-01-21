
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
const style = { flex: 1, alignItems: 'center', padding: 15, justifyContent: 'center' };

class HomeScreen extends Component {
    render() {
        return (
            <View style={style}>
                <Text>Welcome to home!</Text>
                <Button >home</Button>
            </View>
        );
    }
}


export default HomeScreen;