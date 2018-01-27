import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Slider} from 'react-native';
import connect from "react-redux/es/connect/connect";
import Icon from 'react-native-vector-icons/MaterialIcons'
import TimeDatePicker from "../../components/TimeDatePicker";

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#ffffff',
        padding: 30,
        flex: 1,
        justifyContent: 'center'
    }
});

class Graph extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        tabBarLabel: 'Graph',
        tabBarIcon: () => (<Icon size={24} color="white" name="equalizer" />)
    };

    render(){
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <TimeDatePicker />
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Graph)