
import { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, WebView } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
// export const style = { flex: 1, alignItems: 'center', padding: 1, justifyContent: 'center' };
import Members from '../family';
export const personStyle = { fontSize: 50 };
import Member from './Member';



class Familytree extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            food: [],
            maxWid: 1
        })  
    }
    componentDidMount() {
        this.setState = ({
            food: this.props.food
        })
    }
    
    hasChildren(member){
        return member.children && member.children.length > 0;
    }
    render() {
        //const {height, width, scale, fontScale} = useWindowDimensions();
        const members = this.props.members;
        const level = this.props.level || 0;
        const random = () => Math.floor(Math.random() * 255);
        return (

            <ScrollView style={{...{  borderWidth: this.props.level, borderColor: `rgb(${random()}, ${random()}, ${random()})`}}} >
                
                {this.props.members.map((member, i) => {
                    return (
                        <View key={`level-${level}-${i}`}>
                           
                            {/* <Member {...member} style={{marginRight: (marginleft*(i+1))}}/> */}
                            <Member member={member} />
                            {this.hasChildren(member) && (
                                <Familytree members={member.children} level={level+1} child={member.children.length} index={i}/>
                            )}
                        </View>
                    );
                })}
                
                
            </ScrollView>
        );
    }
}
  const styles = StyleSheet.create({
    container: {
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: "absolute",  right: 0,  bottom: 0
    },
    centerView: {
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerNext: {
        
        
        
        
        marginTop: 100,
        marginRight:-200
    },
    StyledLine: { position: "absolute",  right: 0,  bottom: 0 },
    avatarStyle: { minWidth: 20, borderWidth: 1, borderStyle: 'solid', borderRadius: 50,position: "absolute",  right: 0,  bottom: 0 }
});
export default Familytree;