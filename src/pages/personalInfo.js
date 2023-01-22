import { Component } from 'react';
import { ScrollView } from 'react-native';
import { View, Text } from 'galio-framework';

class PersonalInfo extends Component {
    render() {
        return (
            <ScrollView style={{ padding: 15 }}>
                <Text>Hello</Text>
            </ScrollView>
        );
    }
}

export default PersonalInfo;