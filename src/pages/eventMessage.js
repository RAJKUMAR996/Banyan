
import { Component } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
const style = { flex: 1, alignItems: 'center', padding: 15, justifyContent: 'center'};


class EventMessageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <View style={style}>
                <Text style={{ fontSize:30, width:50, height:50}}>Latest Msg</Text>
                <Button title="Click Me" onPress={()=>{this.setState({show:true})}}>Open Message</Button>
                <Modal transparent={true}
                visible={this.state.show}>
                    <View style={{backgroundColor: "#FFFFFF", flex:1}}>
                        <View style={{backgroundColor: "#FFFF00", margin:50, padding:40, borderRadius:10, flex:1}}>
                            <Text style={{ fontSize:20}}>All of you welcome to New Year Party!</Text>
                            <Button title="Close Me" onPress={()=>{this.setState({show:false})}}>Close Message</Button>
                        </View>

                    </View>

                </Modal>
            </View>

        );
    }
}
export default EventMessageScreen;