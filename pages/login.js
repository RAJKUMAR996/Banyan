
import React from 'react';
import { View, Image } from 'react-native';

import { Block, Toast, Button, Card, Icon, Input, NavBar, Text } from 'galio-framework';
const style = { flex: 1, alignItems: 'center', padding: 15, justifyContent: 'center' };

class LoginScreen extends React.Component {

    render() {
        return (
            <View style={style}>
                  <Image
          style={{
            width: 75,
            height: 75,borderRadius:50
          }}
          source={require('../assets/splash.png')}
        />
                <Text>Welcome to Banyan!</Text>

                <Input rounded placeholder='user name' />
                <Input rounded password viewPass placeholder='password' />
                <View style={{ display: 'flex' }}><Button size="small"
                    onPress={() => this.props.navigation.navigate('Home')}
                >Login</Button>
                    <Button size="small"
                        onPress={() => this.props.navigation.navigate('Register')}
                    >Register</Button></View>
            </View>
        );
    }
}
export default LoginScreen;


