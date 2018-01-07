import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Container from "../components/Container";
import { Button, FormLabel, FormInput } from 'react-native-elements'
import * as LoginActionCreators from './actions'
import * as UserActionCreators from '../home/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainScreen from "../pages/MainScreen";
import styles from "./styles";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "thomas.andolf@gmail.com"
        };
    };

    componentWillReceiveProps(nextProps){
        if(this.props.access_token !== nextProps.access_token) {
            const userId = JSON.parse(window.atob(nextProps.access_token.split(".")[1])).sub;
            this.props.getUser(userId);
        } else if(this.props.user !== nextProps.user) {
            this.props.navigation.navigate('Generic', { component: MainScreen });
        }
    }

    clearText = () => {
        this.usernameInput.clearText();
        this.passwordInput.clearText();
    };

    press() {
        const loginFormData = new FormData();
        loginFormData.append("username", this.state.username);
        loginFormData.append("password", this.state.password);
        loginFormData.append("scope", "user");
        loginFormData.append("grant_type", "password");
        this.clearText();
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
            </ScrollView>
         )
    }
}

function mapStateToProps(state) {
    return {
        access_token: state.auth.access_token,
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