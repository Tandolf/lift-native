import React from "react";
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    textWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        backgroundColor: '#760002',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    selectedText: {
        color: '#FFFFFF'
    }
});

const WeekDay = props => {
    const { date, selected } = props;
    const dateAsString = date.format('D');
    if(selected)
        return (
            <View style={[styles.textWrapper]}>
                <View style={styles.selected}>
                    <Text style={styles.selectedText}>{ dateAsString }</Text>
                </View>
            </View>
        );

    return (
        <View style={[styles.textWrapper]}>
            <Text>{ dateAsString }</Text>
        </View>
    )
};

export default WeekDay;