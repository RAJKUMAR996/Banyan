
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
const style = { flex: 1, alignItems: 'center', padding: 15, justifyContent: 'center', backgroundColor: "#98FB98" };

class EventMessageScreen extends Component {
    render() {
        return (
            <View style={style}>
                <Text>Am latest message!</Text>
            </View>
        );
    }
}


export default EventMessageScreen;