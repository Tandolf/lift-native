import React, { Component } from 'react';
import Workout from "../../components/Workout";
import { StyleSheet, ScrollView } from 'react-native';
import connect from "react-redux/es/connect/connect";
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#FFFFFF',
        padding: 0,
        flex: 1,
        justifyContent: 'center'
    }
});

class Graph extends Component {

    constructor(props) {
        super(props)
        this.state = { chosenDate: new Date() };
    }

    static navigationOptions = {
        tabBarLabel: 'Log',
        tabBarIcon: () => (<Icon size={24} color="white" name="add-circle-outline" />)
    };

    render(){
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <Workout exercises={this.props.exercises}/>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        exercises: state.exercises
    }
}

export default connect(mapStateToProps)(Graph)