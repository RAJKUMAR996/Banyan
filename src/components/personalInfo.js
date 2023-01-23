import { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Input, Block, Radio, Button } from 'galio-framework';
import { where } from 'firebase/firestore';
import { DataHelper } from '../services/firebase.service';



class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Qualification: '',
            Age: undefined,
            Phone: undefined
        };
    }
    componentDidMount() {
        console.log('id', this.props.id);
        new DataHelper().getAll('PersonalInfo', undefined, true).then((data) => {
            const filter = data.filter(d => d[this.props.id]);
            const rawData = filter.length ? filter[0] : {};
            const personalData = rawData[this.props.id];
            console.log('per', personalData);
            this.setState({ ...personalData })
        })
    }

      render() {
        return (
            <ScrollView style={{ padding: 20 }}>
                <Block>
                    <Text>Name:</Text>
                    <Input placeholder="Name" rounded value={this.state.Name} />
                </Block>
                <Block>
                    <Text>Phone:</Text>
                    <Input
                        placeholder="Phone"
                        right
                        icon="phone"
                        family="antdesign"
                        iconSize={20}
                        value={this.state.Phone}
                    />
                </Block>
                <Block>
                    <Text>Age:</Text>
                    <Input placeholder="Age" value={this.state.Age}
                    />
                </Block>
                <Block>
                    <Text>Qualification:</Text>
                    <Input placeholder="Qualification" right
                        icon="book"
                        family="antdesign" value={this.state.Qualification}
                        iconSize={20} />
                </Block>
                <View style={{ display: 'flex', marginTop: 10, flexDirection: 'row' }}>
                    <Text style={{ marginRight: 10 }}>Gender:</Text>
                    <Radio containerStyle={{ marginRight: 10 }} label="Male" name="Gender" />
                    <Radio style={{ marginRight: 10 }} label="Female" name="Gender" />
                </View>
                <Button size={'large'} style={{ marginTop: 30 }}> Save</Button>
            </ScrollView>
        );
    }
}

export default PersonalInfo;