
import { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';

import Members from '../family';
export const personStyle = { fontSize: 50 };

const container= {
        
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  
}
const centerView= {
        
  justifyContent: 'center',
  alignItems: 'center',
}
export const viewStyle ={ margin: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' };

export const avatarStyle ={ minWidth: 20, borderWidth: 1, borderStyle: 'solid', borderRadius: 50 };

export const StyledLine = { position: "absolute",  right: 0,  bottom: 0 };

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
          member: []
        }

    }

    componentDidMount() {
      this.setState({ member: this.props.member});
    }


    render() {

        const {name, avatar} = this.state.member;
        const {partner} = this.state.member;
         const coupleAvatar = <Image style={{ width: 75, height: 75,borderRadius:50 }} source={require('../assets/splash.png')} />
         const random = () => Math.floor(Math.random() * 255);
         const randomWidth = () => Math.floor(Math.random() * 100);
        return (
          <ScrollView>
                <View style={{
                    backgroundColor: `rgb(${random()}, ${random()}, ${random()})`,
                    height: 100,
                    width: 100,
                    flex: 1, 
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>
                  <Text>{name} - {partner}</Text>
                </View>
                
                
            <View>

                
                {/* <Text>{name} - {partner}</Text> */}
            </View>
            </ScrollView>
        );
    }
}


// const Member = (member) => {
//     const { name, avatar } = member;
//     const { partner } = member;
    
//     return (
//       <View style={styles.container}>
//         {/* <View style={styles.avatarStyle}>
//             <Image style={{ width: 75, height: 75,borderRadius:50 }} source={require('../assets/splash.png')} />
//         </View> */}
//         <Text>{member}</Text>
//         <Image  style={{ width: 20, borderWidth: 1, borderColor: 'red' , height: 20,borderRadius:75 }} source={require('../assets/splash.png')} /> 
//         <Text>{name} - {partner}</Text>
//       </View>
//     );
//   };
//   const styles = StyleSheet.create({
//     container: {
        
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         position: "absolute",  right: 0,  bottom: 0
//     },
//     centerView: {
        
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     containerNext: {
        
        
        
        
//         marginTop: 100,
//         marginRight:-200
//     },
//     StyledLine: { position: "absolute",  right: 0,  bottom: 0 },
//     avatarStyle: { minWidth: 20, borderWidth: 1, borderStyle: 'solid', borderRadius: 50,position: "absolute",  right: 0,  bottom: 0 }
// });
export default Member;