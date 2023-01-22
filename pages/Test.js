
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
export const style = { flex: 1 };
export const personStyle = { fontSize: 50 };


class Test extends Component {



    render() {
        const imageUrl = this.props.imageUrl;
        console.log('imageUrl', imageUrl)
        return (

            <View style={style}>
                
                <Text>{imageUrl}</Text>
                
            </View>
        );
    }
}
export default Test;