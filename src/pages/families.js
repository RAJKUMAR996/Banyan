
import { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavBar, Card, theme, Block, styles } from 'galio-framework';
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

    render() {
        let data = [];
        if (this.isLoaded) {
            data = this.state?.data?.map((family, i) => {
                return (
                    <Card key={`test-${i}`}
                        // borderless
                        style={{ padding: theme.SIZES.BASE / 2, marginBottom: 20, backgroundColor: '#fff' }}
                        title={family.Name}
                        caption={"Owner: " + family.Owner}
                        avatar={"http://i.pravatar.cc/100?id=pineaple" + i + 1}
                        // footerStyle={{marginBottom:10}}
                        imageStyle={{ borderRadius: 10 }}
                    // image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
                    >

                    </Card>
                );
            });
        }
        return (
            <ScrollView style={style}>
                <NavBar title="Screen Title" />
                <Text style={{marginBottom:20}}>Welcome to home!</Text>
                {data}
            </ScrollView>
        );
    }
}


export default FamilyList;
