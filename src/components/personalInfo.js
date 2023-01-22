import { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Input, Block, Radio, Button } from 'galio-framework';



class PersonalInfo extends Component {
    render() {
        return (
            <ScrollView style={{ padding: 20 }}>
                <Block>
                    <Text>Name:</Text>
                    <Input placeholder="Name" rounded />
                </Block>
                <Block>
                    <Text>Phone:</Text>
                    <Input
                        placeholder="Phone"
                        right
                        icon="phone"
                        family="antdesign"
                        iconSize={20}
                    />
                </Block>

                <Block>
                    <Text>Qualification:</Text>
                    <Input placeholder="Qualification" right
                        icon="book"
                        family="antdesign"
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