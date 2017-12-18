import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    labelContainer: {
        marginBottom: 20
    }
});

export default class Container extends Component {
    render() {
        return(
            <View style={styles.labelContainer}>
                { this.props.children }
            </View>
        )
    };
}
