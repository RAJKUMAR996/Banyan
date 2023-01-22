import { Component } from 'react';
import { ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FileUpload from '../components/fileUpload';
import PersonalInfo from '../components/personalInfo';
import { Ionicons } from 'react-native-vector-icons';
import FamilyList from './families';
const Tab = createBottomTabNavigator();

class User extends Component {
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
                    <Tab.Screen name="Pesonal Info" component={PersonalInfo} />
                    <Tab.Screen name="Files" component={FamilyList} />
                </Tab.Navigator>
        );
    }
}

export default User;