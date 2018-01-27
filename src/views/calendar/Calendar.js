import React, { Component } from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import connect from "react-redux/es/connect/connect";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Agenda } from 'react-native-calendars';

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#00e11a',
        flex: 1,
        justifyContent: 'center'
    }
});

class Calendar extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        tabBarLabel: 'Calendar',
        tabBarIcon: () => (<Icon size={24} color="white" name="event" />)
    };

    render(){
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <Agenda items={
                    {'2018-01-22': [{text: 'item 1 - any js object'}],
                        '2018-01-23': [{text: 'item 2 - any js object'}],
                        '2018-01-24': [],
                        '2018-01-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
                    }}
                        renderItem={(item, firstItemInDay) => {return (<View />);}}
                        renderEmptyDate={() => {return (<View />);}}
                        rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
                />
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Calendar)