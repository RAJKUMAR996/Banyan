
import { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, theme } from 'galio-framework';
import { DataHelper } from '../services/firebase.service';

const style = { padding: 15 };

class FamilyList extends Component {
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
            this.isLoaded = true;
            this.setState({ data });
        });
    }

    navigateToFamily() {
        this.props.navigation.navigate('Family Tree');
    }

    render() {
        let data = [];
        if (this.isLoaded) {
            data = this.state?.data?.map((family, i) => {
                return (
                    <View key={`block-${i}`} onTouchEnd={() => this.navigateToFamily()} >
                        <Card key={`card-${i}`}
                            // borderless
                            style={{ padding: theme.SIZES.BASE / 2, marginBottom: 20, backgroundColor: '#fff' }}
                            title={family.Name}
                            caption={"Owner: " + family.Owner}
                            avatar={"http://i.pravatar.cc/100?id=pineaple" + i + 1}
                            imageStyle={{ borderRadius: 10 }}
                        >
                        </Card>
                    </View>
                );
            });
        }
        return (
            <ScrollView style={style}>
                <Text style={{ marginBottom: 20 }}>Welcome to home!</Text>
                {data}
            </ScrollView>
        );
    }
}


export default FamilyList;
