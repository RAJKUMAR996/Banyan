
import { Component, Fragment } from 'react';
import { SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
import FamilyTree from './familyTree';
const style = { flex: 1, alignItems: 'center'};

class TreeView extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                >
                <FamilyTree FID="Family1"/>
              </ScrollView>
            </SafeAreaView>
            
        );
    }
}


export default TreeView;