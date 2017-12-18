import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
    textLabel: {
        fontSize: 20,
        fontFamily: 'Verdana',
        marginBottom: 10,
        color: '#2d2d2d'
    }
});

export default class Label extends Component {
    render() {
        return(
            <Text style={this.props.style && this.props.style.textLabel ? this.props.style.textLabel : styles.textLabel}>
                { this.props.text }
            </Text>
        )
    }
}
