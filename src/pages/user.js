import { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FileUpload from '../components/fileUpload';
import PersonalInfo from '../components/personalInfo';
import { Ionicons } from 'react-native-vector-icons';
import FamilyList from './families';
const Tab = createBottomTabNavigator();

class User extends Component {
    constructor(props) {
        super(props);
        const data = this.props?.route?.params?.id;
        this.state = {
            id: data ? data : 'Oxirspr8ADT1dZuDxJJ8'
        };
    }
    componentDidMount() {
        console.log('user');
        const data = this.props?.route?.params?.id;
        this.setState({...{ id: data ? data : 'Oxirspr8ADT1dZuDxJJ8' }})
    }
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Pesonal Info') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home-outline';
                        } else if (route.name === 'Files') {
                            iconName = focused ? 'ios-folder' : 'ios-folder-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Pesonal Info"
                    children={() => <PersonalInfo id={this.state.id} />} />
                <Tab.Screen name="Files" component={FileUpload} />
            </Tab.Navigator>
        );
    }
}

export default User;