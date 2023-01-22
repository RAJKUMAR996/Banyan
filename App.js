import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Button, theme, withGalio, GalioProvider, Block } from 'galio-framework';
import AppContainer from './AppNavigator';
const style = { flex: 1, alignItems: 'center', padding: 15, justifyContent: 'center'};


/// Theme reference https://galio.io/docs/#/components/input?id=props

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false
    }
}
  render() {
    return (<GalioProvider theme={{ COLORS: { PRIMARY: '#2e3982', THEME: '#6b88f2' } }}><AppContainer />
    <View style={style}>
    {/* <Text style={{ fontSize:20}}>Latest Update!</Text> */}
    <View style={{display: 'flex'}}><Button size="large" title="Click Me" onPress={()=>{this.setState({show:true})}}>Latest Update!</Button></View>
    <Modal transparent={true}
    visible={this.state.show}>
        <View style={{backgroundColor: "#808080", flex:1}}>
            <View style={{backgroundColor: "#FFD700", margin:50, padding:40, borderRadius:10, flex:1}}>
                <Text style={{ fontSize:20}}>All of you welcome to New Year Party!</Text>
                <Button title="Close Me" onPress={()=>{this.setState({show:false})}}>Close Message</Button>
            </View>

        </View>

    </Modal>
</View></GalioProvider>
    );
  }
}

export default withGalio(App, styles);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center'
  },
  Button: {
    borderRadius: 20
  }
});
