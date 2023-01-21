
import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
import { Input, Block } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'galio-framework';
import { firebase } from '../../firebase/config';
export const style = { flex: 1, alignItems: 'center',padding:15, justifyContent: 'center' };
export const personStyle = { fontSize: 50 };

export default class Familytree extends React.Component {
    render() {
      return (<View style={style}>
                <Text>FamilyTree</Text>
                <Text>Welcome to FamilyTree!</Text>
                
            </View>);
    }
  }