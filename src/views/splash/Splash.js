import React, {Component} from "react";
import {View, ActivityIndicator, StyleSheet} from 'react-native';;
import * as ExercisesActionCreators from "../../actions/exerciseActions";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as authenticationActionCreators from "../../actions/authenticationActions";
import * as UserActionCreators from "../../actions/userActions";

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    spinner: {
        color: '#2d2d2d'
    }
});

class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };

        this.setState = { isLoading: false};
        if(props.auth.access_token) {

            this.props.navigation.navigate('Main');
        }
        this.props.navigation.navigate('Login');
    }

    render() {
        return(
            <View style={styles.scroll}>
                <ActivityIndicator size="large" color={styles.spinner.color} animating={this.state.isLoading} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ ...authenticationActionCreators, ...UserActionCreators, ...ExercisesActionCreators}, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash)