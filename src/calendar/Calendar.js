import React, { Component } from 'react';
import Container from "../components/Container";
import { StyleSheet, ScrollView, Text } from 'react-native';
import connect from "react-redux/es/connect/connect";
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#00e11a',
        padding: 30,
        flex: 1,
        justifyContent: 'center'
    }
});

class Calendar extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        tabBarLabel: 'Calendar',
        tabBarIcon: () => (<Icon size={24} color="white" name="event" />)
    };

    render(){
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <Container>
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>This is the calendar screen</Text>
                </Container>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Calendar)