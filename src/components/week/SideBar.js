import React from "react";
import {StyleSheet, Text, View} from "react-native";
import _ from "lodash";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-around',
        paddingTop: 10
    },
    text: {
        fontSize: 12,
        color: '#c7c7c7'
    }
});

const SideBar = props => {
    const hours = [];
    _.range(0, 24).forEach((current) => {
        let hour = current.toString();
        if(hour.length === 1)
            hour = "0" + hour;
        hour += ":00";
        hours.push(hour);
    });

    return (
        <View style={styles.wrapper}>
            {
                hours.map((hour, index) => {
                return (
                    <View key={index} style={{paddingBottom: 40, paddingLeft: 15}}>
                        <Text style={styles.text}>{ hour }</Text>
                    </View>
                )})
            }
        </View>
    )
};

export default SideBar;