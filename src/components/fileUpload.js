


import { Component, useState } from 'react';
import { ScrollView, Text, View, Button, Image } from 'react-native';
import { Card, theme, Block, styles } from 'galio-framework';
import { DataHelper } from '../services/firebase.service';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
export const style = { flex:1, alignItems: 'center', justifyContent: 'center'}

class FileUpload extends Component {

   
        state = {
            image: null,
          };
   
    pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            
        });
        if(result.uri)
            alert(result.uri);
        else
            alert('No File Seleted');
        
    }

    pickImage=  async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        })

        console.log(result);

        if(!result.canceled){
            this.setState({ image: result.assets[0].uri });
            //setImage(result.assets[0].uri);
        }
    }
        render(){

            let { image } = this.state;
        return (
            <View style={style}>
                <View style={{flex:1}}>
                    <Button title="Select Document" onPress={this.pickDocument} /></View>
                <View style={{flex:1}}>
                    <Button title="Pick an image" onPress={this.pickImage} />
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
            </View>
        );

    }
}

export default FileUpload;