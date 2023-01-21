import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
import AppContainer from './AppNavigator';


/// Theme reference https://galio.io/docs/#/components/input?id=props

class App extends React.Component {
  render() {
    return (<GalioProvider theme={{ COLORS: { PRIMARY: '#2e3982', THEME: '#6b88f2' } }}><AppContainer /></GalioProvider>);
  }
}

export default withGalio(App, styles);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  Button: {
    borderRadius: 20
  }
});
