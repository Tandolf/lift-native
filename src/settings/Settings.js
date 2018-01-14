import React, {Component} from 'react';
import Container from "../components/Container";
import {ScrollView, StyleSheet} from 'react-native';
import connect from "react-redux/es/connect/connect";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Button} from 'react-native-elements'
import * as LoginActionCreators from "../login/actions";
import * as UserActionCreators from '../home/actions'
import {bindActionCreators} from 'redux'

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#FFFFFF',
        padding: 30,
        flex: 1,
        justifyContent: 'center'
    }
});

class Settings extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon: () => (<Icon size={24} color="white" name="settings" />)
    };

    logout() {
        this.props.clearUser();
        this.props.deleteToken();
        this.props.screenProps.rootNavigation.goBack(null);
    }

    render(){
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <Container>
                    <Button
                        raised
                        onPress={() => this.logout()}
                        title="Logout"
                        backgroundColor='#c10003'
                    />
                </Container>
            </ScrollView>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ ...LoginActionCreators, ...UserActionCreators }, dispatch);
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Settings)