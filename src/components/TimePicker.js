import React, { Component } from 'react';
import {StyleSheet, View, Slider, Text} from "react-native";

const styles1 = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        justifyContent: "flex-start",
        padding: 5,
        flex: 1
    },
    timeWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gray: {
        backgroundColor: '#f5f5f5',
        borderWidth: 0.5,
        borderColor: '#c3c3c3'
    },
    numberWrapper: {
        width: 50,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    colonWrapper: {
        width: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
    },
    sliderWrapper: {
        flex: 1,
        paddingTop: 10
    },
    slider: {
        marginLeft: 10,
        marginRight: 10
    }
});


export default class TimePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hours: 12,
            minutes: 0
        }
    }

    render(){
        return (
            <View style={styles1.container}>
                <View style={styles1.timeWrapper}>
                    <View style={[styles1.gray, styles1.numberWrapper]}>
                        <TimeText style={styles1.text} time={this.state.hours} />
                    </View>
                    <View style={styles1.colonWrapper}>
                        <Text style={styles1.text}>:</Text>
                    </View>
                    <View style={[styles1.gray, styles1.numberWrapper]}>
                        <TimeText style={styles1.text} time={this.state.minutes} />
                    </View>
                </View>
                <View style={styles1.sliderWrapper}>
                    <Text>Hours:</Text>
                    <Slider style={styles1.slider}
                            maximumValue={23}
                            step={1}
                            value={this.state.hours}
                            onValueChange={(value) => this.setState({ hours: value })}
                    />
                </View>
                <View style={styles1.sliderWrapper}>
                    <Text>Minutes:</Text>
                    <Slider style={styles1.slider}
                            maximumValue={55}
                            step={5}
                            value={this.state.minutes}
                            onValueChange={(value) => {
                                this.setState({ minutes: value })
                            }}
                    />
                </View>
            </View>
        )
    }
}

const TimeText = props => {
    let time = props.time;
    if(props.time < 10){ time = "0" + props.time }
    return (
        <Text style={props.style}>{time}</Text>
    )
};