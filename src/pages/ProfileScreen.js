import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import Container from "../components/Container";
import connect from "react-redux/es/connect/connect";

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#ddd6e1',
        padding: 30,
        flex: 1,
        justifyContent: 'center'
    }
});

class ProfileScreen extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    };

    render(){
        const { params } = this.props.navigation.state;
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <Container>
                    <Text style={{fontWeight: 'bold', fontSize: 30}}>You are now logged in</Text>
                </Container>
                <Container>
                    <Text>Token {params.token}</Text>
                </Container>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

export default connect(
    mapStateToProps
)(ProfileScreen)