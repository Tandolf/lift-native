import React from 'react';
import { Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types';
import Home from "../views/home/Home";
import {StackNavigator} from "react-navigation";

const StandardHeader = props => {
    return (
        <Header>
            <Left>
                { props.navigation ? defaultLeft(props.navigation) : null }
            </Left>
            <Body>
                <Title>{ props.header ? props.header : null }</Title>
            </Body>
            <Right>
                { props.right ? props.right : null }
            </Right>
        </Header>
    )
};

const defaultLeft = props => {
    const {goBack} = this.props.navigation;
    return (
        <Button transparent onPress={() => goBack()}>
            <Icon name='keyboard-arrow-left' />
        </Button>
    )
};

const defaultRight = props => {
    return (
        <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name='home' />
        </Button>
    )
};

const HomeNavigation = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            header: StandardHeader,
        })
    },
});

StandardHeader.propTypes = {
    left: PropTypes.element,
    right: PropTypes.element,
    header: PropTypes.string
};

StandardHeader.defaultProps = {
    right: defaultRight()
};

export default StandardHeader