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
        super(props);
        this.state = {
            name: "",
        };
    }

    componentDidMount() {

        console.log('Component did mount bitch!');
        let base64 = this.props.token.split(".");
        const userId = JSON.parse(window.atob(base64[1])).sub;

        fetch('https://lift-service.herokuapp.com/users/' + userId, {
            method: 'Get',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + this.props.token
            }
        }).then(response => {
            if(response.status === 200) {
                return response.json();
            } else {
                throw "Bad credentials";
            }
        }).then(responseJson => {
            console.log(responseJson);
            this.setState({ name: JSON.stringify(responseJson, null, 2) });
            console.log(this.state.name);
        })
        .catch(error => {
            console.error(error);
        });
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
                    <Text style={{fontSize: 18}}>{this.state.name}</Text>
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

export default connect(mapStateToProps)(Home)