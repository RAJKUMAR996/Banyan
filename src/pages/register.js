import { Input, Button, theme, withGalio, GalioProvider } from 'galio-framework';
import { Component } from 'react';
import { Text, View } from 'react-native';
const style = { flex: 1, alignItems: 'center', padding: 15, justifyContent: 'center' };

class RegisterScreen extends Component {
    render() {
        return (
            <View style={style}>
                <Text>Register</Text>
                <Input placeholder='Email' />
                <Input password viewPass placeholder='Password' />
                <Input password viewPass placeholder='Confirm Password' />
                <Button
                    onPress={() => this.props.navigation.navigate('Home')}
                >Register</Button>
            </View>
        );
    }
}
export default RegisterScreen;