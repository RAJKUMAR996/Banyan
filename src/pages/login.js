
import React from 'react';
import { View, Image } from 'react-native';

import { Block, Toast, Button, Card, Icon, Input, NavBar, Text } from 'galio-framework';
import { getcollection } from '../services/firebase.service';
const style = { flex: 1, alignItems: 'center', padding: 15, justifyContent: 'center' };

class LoginScreen extends React.Component {

    login() {
        getcollection().then((res) => {
            res.docs.forEach(r => {
                console.log("data", r.data());
            });
            this.props.navigation.navigate('Home');
        });
    }
    render() {
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

                <Input rounded placeholder='user name' />
                <Input rounded password viewPass placeholder='password' />
                <View style={{ display: 'flex' }}><Button size="large"
                    onPress={() => this.login()}
                >Login</Button>
                    <Button size="large"
                        onPress={() => this.props.navigation.navigate('Register')}
                    >Sign up</Button></View>
            </View>
        );
    }
}
export default LoginScreen;


