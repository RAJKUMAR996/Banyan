
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
import { DataHelper } from '../services/firebase.service';
const style = { flex: 1, alignItems: 'center', padding: 15, justifyContent: 'center' };

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    isLoaded = false;
    componentDidMount() {
        this.getAllFamilies();
    }
    getAllFamilies() {
        new DataHelper().getAll('Families').then(data => {
            console.log('data', data);
            this.isLoaded = true;
            this.setState({ data });
        });
    }

    render() {
        let data = [];
        if (this.isLoaded) {
            data = this.state?.data?.map((family, i) => {
                return (
                    <View key={`family-${i}`}>
                        <Text>{i + 1}</Text>
                        <Text>Name: {family.Name}</Text>
                        <Text>Owner: {family.Owner}</Text>
                    </View>);
            });
        }
        return (
            <View style={style}>
                <Text>Welcome to home!</Text>
                <Button >home</Button>
                {data}
            </View>
        );
    }
}


export default HomeScreen;