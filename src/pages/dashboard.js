
import { Component } from 'react';
import FamilyList from './families';
const style = { padding: 15 };
class HomeScreen extends Component {
    render() {
        return (
            <FamilyList navigation={this.props.navigation}/>
        );
    }
}

export default HomeScreen;
