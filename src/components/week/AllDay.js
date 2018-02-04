import React from "react";
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
    }
});

const AllDay = props => {
    return (
        <View style={styles.wrapper}>
            <View style={{flex: 1, paddingLeft: 15, justifyContent: 'center'}}>
                <Text style={{ fontSize: 10, color: '#c7c7c7' }}>{ 'All Day' }</Text>
            </View>
            <View style={{flex: 7 }}>
            </View>
        </View>
    )
};

export default AllDay;