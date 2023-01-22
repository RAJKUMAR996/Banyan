import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Svg, {
    Line,
} from 'react-native-svg';
import { Button, theme, withGalio, GalioProvider,Card } from 'galio-framework';
import { DataHelper } from '../services/firebase.service';
import { where } from "firebase/firestore";
const Sample = require('./sample.json');

export default class FamilyTree extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    hasChildren(member) {
        return member.children && member.children.length;
    }
    isLoaded = false;
    componentDidMount() {
        this.getFamilyDetail();
    }
    getFamilyDetail(){
        new DataHelper().getAll('PersonalInfo', where("FID",'==', this.props.FID),true).then(data => {
            this.isLoaded = true;
            this.setState({ data });
            console.log("test", data)
        })
    }
    renderTree(data, level) {
        return (
            <FlatList
                data={data}
                horizontal={true}
                contentContainerStyle={{ padding: 30 }}
                keyExtractor={(item, index) => `${item.name} + ${item.spouse}`}
                listKey={(item, index) => `${item.name} + ${item.spouse}`}
                initialScrollIndex={0}
                renderItem={({ item, index }) => {
                    const { name, spouse } = item;
                    const info = { name, spouse };
                    const avatar = "http://i.pravatar.cc/100?id=" + item.name;
                    return (
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: this.props.childrenGap / 2,
                                paddingRight: this.props.childrenGap / 2
                            }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <View style={{
                                    ...styles.nodeStyle
                                }}>
                                    <Image style={{ ...styles.imageStyle }}
                                        source={{ uri: avatar }} 

                                        />
                                    <Text style={{ ...styles.nodeTitleStyle, color: this.props.nodeTitleColor }}>{info.name} {info.spouse}</Text>
                                </View>
                            </View>
                            {
                                this.hasChildren(item) && <Svg height="50" width="20">
                                    <Line x1="50%" y1="0" x2="50%" y2="150" stroke={this.props.rootColor} strokeWidth={this.props.borderWidth} />
                                </Svg>
                            }
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                {
                                    this.hasChildren(item) && item.children.map((child, index) => {
                                        const { name, spouse } = child;
                                        const info = { name, spouse  };
                                        return (
                                            <View key={child.name + child.spouse}
                                                style={{
                                                    flexDirection: 'row'
                                                }}
                                            >
                                                <View>
                                                    <Svg height="50" width="100%" >

                                                        <Line x1="50%" y1="0" x2="50%" y2="100%" stroke={this.props.rootColor} strokeWidth={this.props.borderWidth} />
                                                        {
                                                            this.hasChildren(item) && item.children.length != 1 && item.children.length - 1 !== index &&
                                                            <Line x1="100%" y1={this.props.borderWidth / 2} x2="50%" y2={this.props.borderWidth / 2} stroke={this.props.rootColor} strokeWidth={this.props.borderWidth} />
                                                        }
                                                        {
                                                            this.hasChildren(item) && item.children.length != 1 && index !== 0 &&
                                                            <Line x1="50%" y1={this.props.borderWidth / 2} x2="0" y2={this.props.borderWidth / 2} stroke={this.props.rootColor} strokeWidth={this.props.borderWidth} />
                                                        }
                                                    </Svg>
                                                    {
                                                        this.renderTree([child], level + 1)
                                                    }
                                                </View>
                                                <View style={{
                                                    height: this.props.borderWidth,
                                                    backgroundColor: this.hasChildren(item) && (item.children.length - 1) !== index ? this.props.rootColor : 'transparent',
                                                    width: this.hasChildren(child) && (child.children.length - 1) !== index ?
                                                        level * this.props.familyGap
                                                        : 0
                                                }} />
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    )
                }}
            />
        )
    }

    render() {
        const { title, titleStyle, titleColor } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ ...styles.titleStyle, color:  titleColor }}>{title}</Text>
                {
                    this.renderTree(this.props.data, 1)
                }
            </View>
        )
    }
}

  const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 14,
        marginBottom: 10,
        fontWeight: "bold",
        textAlign: "left"
    },
    nodeStyle: {
        width: 100,
        height: 100,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "cover"
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        resizeMode: 'cover'
    },
    nodeTitleStyle: {
        fontSize: 10,
        fontWeight: "bold"
    },
});

FamilyTree.defaultProps = {
    title: "Family Tree View",
    titleColor: theme.COLORS.PRIMARY,
    data: Sample,
    rootColor: theme.COLORS.THEME,
    childrenGap: 25,
    nodeTitleColor: theme.COLORS.THEME,
    familyGap: 10,
    borderWidth: 1
}

FamilyTree.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    rootColor: PropTypes.string,
    childrenGap: PropTypes.number,
    nodeTitleColor: PropTypes.string,
    familyGap: PropTypes.number,
    borderWidth: PropTypes.number,
    FID: PropTypes.string
}

// const personObject = {
//     _comment: PropTypes.string,
//     name: PropTypes.string,
//     partner: PropTypes.string,
//     avatar: PropTypes.string,
    
// }

// const familyObject = {
//     _comment: string,
//     name: PropTypes.string,
//     partner: PropTypes.string,
//     avatar: PropTypes.string,
//     children:  personObject[]
// }