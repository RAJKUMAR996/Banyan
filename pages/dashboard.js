
import { Component, Fragment } from 'react';
import { SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
// import Familytree from './Familytree';
import Test from './Test';
import Members from '../family';
import FamilyTree from './src/FamilyTree';



const style = { flex: 1, alignItems: 'center'};

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state =({
          member: []
        })

        
      }

    componentDidMount() {
        

        this.setState({
            member: Members
        });  
    }

    render() {
        
        let testFood = [{
            imageUrl:"/js.com",
            imageText:'food'
            },{
                imageUrl:"/jsx.com",
                imageText:'Dine'
                }];
        const arr = [1,2,3]
        const member = {Members}

        const marginTop =  40;

        return (
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                >
                <FamilyTree
                title="Rethinam and Family"
                pathColor='black'
                siblingGap={10}
                nodeStyle={{
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                nodeTitleColor='red'
                familyGap={5}
                strokeWidth={2}
                titleColor='green'
                />
              </ScrollView>
            </SafeAreaView>
            
        );
    }
}


export default HomeScreen;