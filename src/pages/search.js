import React, { Component } from "react";
import { DataHelper } from "../services/firebase.service";
import { where } from "firebase/firestore";
import { Card, theme } from "galio-framework";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
//import all the components we are going to use.
const style = { padding: 15 };
class Search extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: "", FID: "Family1", dataSource: [] };
    this.arrayholder = [];
  }

  componentDidMount() {
    const data = new DataHelper()
      .getAll("PersonalInfo", where("FID", "==", this.state.FID), true)
      .then((dataraw) => {
        let data = dataraw.map(d => {
          const q = Object.keys(d);
          let processData = {}
          q.forEach(element => {
            processData = { ...d[element], ...{ id: element } }
          });
          return processData;
        });
        data = data.length ? data : [];

        if (
          data?.length &&
          data[0].FID?.toLowerCase() == this.state.FID?.toLowerCase()
        ) {
          this.setState(
            {
              isLoading: false,
              dataSource: data,
            },
            function () {
              this.arrayholder = data;
            }
          );
        } else {
          this.setState({ isLoading: false, showError: true });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.Name ? item.Name.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: "90%",
          backgroundColor: "#080808",
        }}
      />
    );
  };

  navigateToProfile(data) {
    this.setState({...{ id: data.id }})
    this.props.navigation.navigate('Profile', { id: data.id });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    let data = [];
    if (!this.state.isLoading) {
      data = this.state?.dataSource?.map((family, i) => {
        return (
          <View key={'view-' + i} onTouchEnd={() => { this.navigateToProfile(family) }} >
            <Card
              key={`card-${i}`}
              style={{
                padding: theme.SIZES.BASE / 2,
                marginBottom: 20,
                backgroundColor: "#fff",
              }}
              title={family.Name}
              caption={"Email: " + family.Email}
              avatar={"http://i.pravatar.cc/100?id=pineaple" + i + 1}
              imageStyle={{ borderRadius: 10 }}
            ></Card>
          </View>
        );
      });
    }
    return (
      <ScrollView style={style}>
        <Text style={{ marginBottom: 20 }}>Search members from family: {this.state.FID}</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        {data}
        {!this.state.dataSource?.length && this.state.text ? (
          <Text
            style={{
              marginBottom: 10,
              fontSize: 25,
              color: "#000",
              textAlign: "center",
            }}
          >
            No Profile Found for the search : {this.state.text}{" "}
          </Text>
        ) : null}
      </ScrollView>
    );
  }
}
export default Search;

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
});
