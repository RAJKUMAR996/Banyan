import { Input, Button, theme, Card, withGalio, GalioProvider } from 'galio-framework';
import { Component, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { DataHelper, firestoreAutoId } from '../services/firebase.service';

const style = { flex: 1, alignItems: 'center', paddingTop: 40, justifyContent: 'center', paddingHorizondal: 20, backgroundColor: '#fff' };
const listStyle = { marginTop: 24, padding: 10, backgroundColor: '#FFC0CB', fontSize: 24 };

class NotificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], message: '' }
        // ({
        //     people: [
        //         { name: 'vanitha', Key: 1 },
        //         { name: 'anitha', Key: 2 },
        //         { name: 'kanitha', Key: 3 },
        //         { name: 'sanitha', Key: 4 },
        //         { name: 'hanitha', Key: 5 },
        //     ]
        // });
    }
    isLoaded = false;
    componentDidMount() {
        this.getAllNotifications();
    }
    getAllNotifications() {
        new DataHelper().getAll('Updates').then(data => {
            this.isLoaded = true;
            console.log('data', data);
            this.setState({ data });
        });
    }

    sendMsg() {
        this.setState({ showError: false });
        const data = {
            CreatedDate: new Date(),
            PID: 'Oxirspr8ADT1dZuDxJJ8',
            Message: this.state.message
        }
        new DataHelper().setData('Updates', firestoreAutoId() , data).then(() => { this.isLoaded = true }).catch(() => {this.setState({ showError: false }) });
    }

    render() {
        let data = [];
        if (this.isLoaded) {

            data = this.state?.data?.map((content, i) => {
                return (
                    <Card key={`test-${i}`}
                        // borderless
                        style={{ padding: theme.SIZES.BASE / 2, marginBottom: 20, backgroundColor: '#FFC0CB' }}
                        title={content.Message}
                        avatar={"http://i.pravatar.cc/100?id=pineaple" + i + 1}
                        imageStyle={{ borderRadius: 10 }}
                    >

                    </Card>
                );
            });
        }
        return (<ScrollView style={{ padding: 10, backgroundColor: '#DAFFD5' }}>
            {data}

            <Input rounded placeholder='Enter your update here' name='message' onChangeText={evt => { this.setState({ message: evt }) }} />
            <Button size="large" onPress={() => this.sendMsg()}>Send To Family</Button>
        </ScrollView>);
    }

}
export default NotificationScreen;