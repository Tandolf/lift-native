import React, { Component } from 'react';
import { TextInput, ScrollView } from 'react-native';
import Container from "../components/Container";
import { Button } from 'react-native-elements'
import * as LoginActionCreators from './actions'
import * as UserActionCreators from '../home/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Label from '../components/Label';
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
        this._usernameTextInput.setNativeProps({text: ''});
        this._passwordTextInput.setNativeProps({text: ''});
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
                    <Label text="Username or Email" />
                    <TextInput
                        ref={component => this._usernameTextInput = component}
                        autoCapitalize="none"
                        style={styles.textInput}
                        onChangeText={(username) => this.setState({ username: username }) }
                        value={this.state.username}
                    />
                </Container>
                <Container>
                    <Label text="Password"/>
                    <TextInput
                        ref={component => this._passwordTextInput = component}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({ password: password }) }
                        value={this.state.password}
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