import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
});

export default class Button extends Component {

    getContent() {
        if (this.props.children) {
            return this.props.children;
        }
        return <Text style={this.props.style.label}>{this.props.label}</Text>
    }

    render() {
        return(
            <TouchableHighlight underlayColor="#ccc" onPress={this.props.onPress}
                style={
                    [
                        this.props.noDefaultStyles ? '' : styles.button, this.props.style ? this.props.style.button : ''
                    ]
                }
            >
                {
                    this.getContent()
                }
            </TouchableHighlight>
        )

    }
}
