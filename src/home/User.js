import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text} from 'react-native-elements';

export default class User extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <View style={styles.view}>
                <Avatar
                    xlarge
                    rounded
                    source={{uri: this.props.url}}
                />
                <Text h4 style={styles.text}>{ this.props.userName }</Text>
            </View>
        )
    }
}

User.defaultProps = {
    url: 'https://firebasestorage.googleapis.com/v0/b/lift-storage.appspot.com/o/images%2FDonald-Trump-Funny.jpg?alt=media&token=2bd89a3b-ee58-41b4-8eb1-c7e8a97f71e2',
    userName: 'Trump'
};

const styles = StyleSheet.create({
    view: {
        height: 260,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCFCFC',
        borderBottomWidth: 1,
        borderColor: '#000000'
    },
    text: {
        marginTop: 25,
        fontSize: 20
    }
});