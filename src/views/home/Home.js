import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Header} from 'react-native-elements';
import * as viewActionCreators from '../../actions/viewActions'
import {bindActionCreators} from "redux";
import User from '../../components/User';
import styles from "./styles";
import {Button} from "native-base";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: (<Button transparent onPress={() => navigation.navigate('Settings')}><Icon size={24} name='settings' /></Button>),
            tabBarIcon: () => (<Icon size={24} color="white" name="home" />)
        }
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
        user: state.user,
        currentView: state.view.currentView
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({...viewActionCreators}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)