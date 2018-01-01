import React, { Component } from 'react';
import Container from "../components/Container";
import { StyleSheet, ScrollView, Text } from 'react-native';
import connect from "react-redux/es/connect/connect";
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#e1e100',
        padding: 30,
        flex: 1,
        justifyContent: 'center'
    }
});

class Home extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: () => (<Icon size={24} color="white" name="home" />)
    };

    render(){
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <Container>
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>This is the home screen</Text>
                </Container>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Home)