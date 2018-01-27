import React, { Component } from 'react';
import {StyleSheet, View, Text} from "react-native";
import {ButtonGroup, Button} from 'react-native-elements'
import TimePicker from "./TimePicker";

const styles = StyleSheet.create({
    container: {
        height: 500,
        backgroundColor: '#FFFFFF',
        justifyContent: "flex-start",
        padding: 15
    },
    selectedButton: {
        backgroundColor:'#dcdcdc'
    },
    buttonGroup: {
        width: 275,
        height: 40,
        backgroundColor: 'white',
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#DCDCDC',
    },
    buttonGroup_textStyle: {
        color: 'green',
        fontSize: 13,
    },
    buttonGroup_selectedTextStyle: {
        color: 'white',
    }
});

export default class TimeDatePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        }

    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    render(){
        const component1 = () => <Text>Date</Text>;
        const component2 = () => <Text>Time</Text>;
        const buttons = [
            { element: component1 },
            { element: component2 },
        ];
        return (
            <View style={styles.container}>
                <View style={{ flex: 1}}>
                    <ButtonGroup
                        selectedIndex={this.state.selectedIndex}
                        containerBorderRadius={0}
                        buttons={buttons}
                        selectedBackgroundColor="#E8E8E8"
                        textStyle={styles.buttonGroup_textStyle}
                        selectedTextStyle={styles.buttonGroup_selectedTextStyle}
                        containerStyle={styles.buttonGroup}
                        onPress={(index) => this.updateIndex(index)}
                    />
                </View>
                <View style={{ flex: 2}}>
                    <TimePicker />
                </View>
                <View style={{ flex: 1}}>
                    <Button
                        raised
                        title="Save"
                        backgroundColor='#c10003'
                    />
                </View>
            </View>
        )
    }
}