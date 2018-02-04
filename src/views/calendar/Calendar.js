import React, { Component } from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CalendarList } from 'react-native-calendars';
import { Button } from "native-base";
import * as viewActionCreators from "../../actions/viewActions";
import {bindActionCreators} from "redux";


const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20
    }
});

class Calendar extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            tabBarIcon: () => (<Icon size={24} color="white" name="event" />),
            header: null
        }
    };

    render(){
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <CalendarList items={
                    {'2018-01-22': [{text: 'item 1 - any js object'}],
                        '2018-01-23': [{text: 'item 2 - any js object'}],
                        '2018-01-24': [],
                        '2018-01-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
                    }}
                      renderItem={(item, firstItemInDay) => {return (<View />);}}
                      renderEmptyDate={() => {return (<View />);}}
                      rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
                      onDayPress={(day) => {this.props.navigation.navigate("Week", { day: day})}}
                      showWeekNumbers={true}
                      firstDay={1}
                />
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentView: state.view.currentView
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ ...viewActionCreators}, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar)