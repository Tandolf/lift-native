import React, { Component } from 'react';
import Container from "../components/Container";
import { StyleSheet, ScrollView, Text } from 'react-native';
import connect from "react-redux/es/connect/connect";
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as UserActionCreators from './actions'
import {bindActionCreators} from "redux";

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
        super(props);
    }

    componentDidMount() {
        console.log('Component did mount bitch!');
        let userId = JSON.parse(window.atob(this.props.token.split(".")[1])).sub;
        this.props.fetchUser(userId);
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
                    <Text style={{fontSize: 18}}>{this.props.user.name.formatted}</Text>
                </Container>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(UserActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)