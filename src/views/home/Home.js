import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import connect from "react-redux/es/connect/connect";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Header} from 'react-native-elements';
import * as UserActionCreators from '../../actions/userActions'
import {bindActionCreators} from "redux";
import User from '../../components/User';
import styles from "./styles";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: () => (<Icon size={24} color="white" name="home" />)
    };

    render(){
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <Header backgroundColor={'#FCFCFC'}
                        outerContainerStyles={{ height: 40 }}
                />
                <User userName={this.props.user.userName}/>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(UserActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)