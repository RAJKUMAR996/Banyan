
import React from 'react';
import { View, Image } from 'react-native';
import { where } from "firebase/firestore";

import { Button, Input, Text } from 'galio-framework';
import { DataHelper } from '../services/firebase.service';
const style = { flex: 1, alignItems: 'center', padding: 15, justifyContent: 'center' };

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showError: false
        };
    }

    onPressTitle = () => {
        this.setState({ titleText: "Bird's Nest [pressed]" });
    };
    login() {
        console.log('email', this.state.email);
        this.setState({ showError: false });
        const data = new DataHelper().getAll(undefined, where("Email", '==', this.state.email)).then((res) => {
            const response = res.docs.map(r => r.data());
            console.log('res', response);

            if (response.length && response[0].Email?.toLowerCase() == this.state.email?.toLowerCase()) {
                this.props.navigation.navigate('Home');
            } else {
                this.setState({ showError: true });
            }
        });
    }
    render() {
        // const [email, onChangeEmail] = React.useState('');
        // const [password, onChangepassword] = React.useState('');
        return (
            <View style={style}>
                <Image
                    style={{
                        width: 75,
                        height: 75, borderRadius: 50
                    }}
                    source={require('../../assets/logo.png')}
                />
                <Text>Welcome to Banyan!</Text>

                <Input rounded placeholder='user name' onChangeText={evt => { this.setState({ email: evt?.toLowerCase() }) }}
                    value={this.state.email} />
                <Input rounded password viewPass placeholder='password' onChangeText={evt => { this.setState({ password: evt }) }}
                    value={this.state.password} />

                {this.state.showError ? <Text color='red'>Invalid credentials</Text> : ''}
                <Button size="large"
                    onPress={() => this.login()}
                >Login</Button>

                <Button size="large"
                    onPress={() => this.props.navigation.navigate('Register')}
                >Sign up</Button>
            </View>
        );
    }
}
export default LoginScreen;


