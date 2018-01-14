import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, Keyboard } from 'react-native';
import Container from "../components/Container";
import { Button, FormLabel, FormInput } from 'react-native-elements'
import * as LoginActionCreators from './actions'
import * as UserActionCreators from '../home/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from "./styles";
import base64 from "base-64";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "thomas.andolf@gmail.com",
            isLoading: false
        };
    };

    componentWillReceiveProps(nextProps){
        if(!nextProps.auth.access_token){
            return;
        } else if(this.props.auth.access_token !== nextProps.auth.access_token) {
            const userId = JSON.parse(base64.decode(nextProps.auth.access_token.split(".")[1])).sub;
            this.props.getUser(userId);
        }
        if(!nextProps.user.id) {
            return;
        }else if (this.props.user.id !== nextProps.user.id) {
            this.setState({isLoading: false});
            this.props.navigation.navigate('Main');
        }
    }

    clearText() {
        this.usernameInput.clearText();
        this.passwordInput.clearText();
    };

    press() {
        this.setState({isLoading: true});
        const loginFormData = new FormData();
        loginFormData.append("username", this.state.username);
        loginFormData.append("password", this.state.password);
        loginFormData.append("scope", "user");
        loginFormData.append("grant_type", "password");
        this.clearText();
        Keyboard.dismiss();
        this.props.getToken(loginFormData);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <Container>
                    <FormLabel>Username or Email</FormLabel>
                    <FormInput
                        ref={input => this.usernameInput = input}
                        autoCapitalize="none"
                        onChangeText={(username) => this.setState({ username: username }) }
                        value={this.state.username}
                    />
                </Container>
                <Container>
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        ref={input => this.passwordInput = input}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password: password }) }
                        value={this.state.password}
                    />
                </Container>
                <Container>
                    <Button
                        raised
                        onPress={() => this.press()}
                        title="Login"
                        backgroundColor='#c10003'
                    />
                </Container>
                <Container>
                    <ActivityIndicator size="large" color={styles.spinner.color} animating={this.state.isLoading} hidesWhenStopped={true} />
                </Container>
            </ScrollView>
         )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        user: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ ...LoginActionCreators, ...UserActionCreators }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)