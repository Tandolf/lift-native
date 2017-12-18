import React, { Component } from 'react';
import {StyleSheet, TextInput, ScrollView} from 'react-native';
import Container from "../components/Container";
import { Button } from 'react-native-elements'
import * as LoginActionCreators from './actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Label from '../components/Label';


const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#ddd6e1',
        padding: 30,
        flex: 1,
        justifyContent: 'center'
    },
    label: {
        color: '#2d2d2d',
        fontSize: 20
    },
    textInput: {
        height: 50,
        fontSize: 20,
        backgroundColor: '#FFF',
        borderRadius: 5,
        textAlign: 'center',
    }
});


class Login extends Component {

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    clearText = () => {
        this._usernameTextInput.setNativeProps({text: ''});
        this._passwordTextInput.setNativeProps({text: ''});
    };

    press() {
        const formData = new FormData();
        formData.append("username", this.props.username);
        formData.append("password", this.props.password);
        formData.append("scope", "user");
        formData.append("grant_type", "password");
        this.clearText();
        fetch('https://lift-auth-service.herokuapp.com/uaa/oauth/token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: 'Basic aW9zOnNlY3JldA==',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        }).then(response => {
                if(response.status === 200) {
                    return response.json();
                } else {
                    throw "Bad credentials";
                }
        })
            .then(responseJson => {
                this.props.setToken(responseJson.access_token);
                this.props.navigation.navigate('Profile', { token: responseJson.access_token });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <Container>
                    <Label text="Username or Email" />
                    <TextInput
                        ref={component => this._usernameTextInput = component}
                        autoCapitalize="none"
                        style={styles.textInput}
                        onChangeText={(username) => this.props.setUsername(username) }
                    />
                </Container>
                <Container>
                    <Label text="Password"/>
                    <TextInput
                        ref={component => this._passwordTextInput = component}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(password) => this.props.setPassword(password) }
                    />
                </Container>
                <Container>
                    <Button
                        raised
                        onPress={() => this.press()}
                        title="Login"
                    />
                </Container>
            </ScrollView>
         )
    }
}

function mapStateToProps(state) {
    return {
        token: state.token,
        username: state.username,
        password: state.password
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(LoginActionCreators, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)