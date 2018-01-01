import React, { Component } from 'react';
import Container from "../components/Container";
import { StyleSheet, ScrollView, Text } from 'react-native';
import connect from "react-redux/es/connect/connect";

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#e10009',
        padding: 30,
        flex: 1,
        justifyContent: 'center'
    }
});

class Graph extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <Container>
                    <Text style={{fontWeight: 'bold', fontSize: 30}}>This is the graph screen</Text>
                </Container>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Graph)