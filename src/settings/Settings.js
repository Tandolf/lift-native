import React, { Component } from 'react';
import Container from "../components/Container";
import { StyleSheet, ScrollView, Text } from 'react-native';
import connect from "react-redux/es/connect/connect";
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#0015e1',
        padding: 30,
        flex: 1,
        justifyContent: 'center'
    }
});

class Settings extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon: () => (<Icon size={24} color="white" name="settings" />)
    };

    render(){
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <Container>
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>This is the settings screen</Text>
                </Container>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Settings)