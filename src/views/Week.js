import React, {Component} from "react";
import styles from "./home/styles";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Button} from "native-base";
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from "moment";
import _ from "lodash";

export default class Week extends Component {

    constructor(props) {
        super(props);
        const selectedDay = moment(this.props.navigation.state.params.day.dateString);
        const firstDayOfWeek = moment(moment()
            .day("Monday")
            .year(selectedDay.year())
            .isoWeek(selectedDay.isoWeek()));
        const daysInWeek = [];
        _.range(0, 7).forEach((current) => {
            const day = moment(firstDayOfWeek);
            day.add(current, 'd');
            daysInWeek.push(day);
        });

        this.state = {
            day : selectedDay,
            week: selectedDay.isoWeek(),
            daysInWeek: daysInWeek

        }
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerLeft: (<Button transparent onPress={() => navigation.navigate('Calendar')}><Icon size={24} name='keyboard-arrow-left' /></Button>),
            tabBarIcon: () => (<Icon size={24} color="white" name="event" />),
        }
    };

    render(){
        return (
            <ScrollView contentContainerStyle={styles.scroll}>
                <WeekHeader selectedDay={this.state.day} weekdays={ this.state.daysInWeek }/>
                <View>
                    <Text>Selected date: {this.state.day.format()}</Text>
                    <Text>week number: {this.state.week}</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles1 = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        backgroundColor: '#f0ff00',
        justifyContent: 'space-around',
    },
    textWrapper: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderColor: '#e6e6e6',
        borderLeftWidth: StyleSheet.hairlineWidth,
    },
    selectedText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff000a',
        height: 40,
        borderColor: '#e6e6e6',
        borderLeftWidth: StyleSheet.hairlineWidth,
    },
    text: {

    }
});

const WeekHeader = props => {
    const { selectedDay, weekdays } = props;

    return (
        <View style={styles1.wrapper}>
            {
                weekdays.map((current, index) => {
                    if(selectedDay.isSame(current.format(), 'day'))
                        return (<WeekDay key={index} date={current} selected={true}/>);
                    if(selectedDay.isSame(current.format(), 'day') && index === 7)
                        return (<WeekDay key={index} date={current} selected={true} rightBorder={false}/>);
                    if(index === 7)
                        return (<WeekDay text={current.format('D')}/>);
                    return (<WeekDay key={index} date={current}/>)
                })
            }
        </View>
    )
};


const styles2 = StyleSheet.create({
    textWrapper: {
        backgroundColor: '#f8f8f8',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    selected: {
        backgroundColor: '#bf0004',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    rightBorder: {
        borderColor: '#cfcfcf',
        borderLeftWidth: StyleSheet.hairlineWidth,
    }
});

const WeekDay = props => {
    const { date, selected, rightBorder } = props;
    const dateAsString = date.format('D');
    if(selected && !rightBorder)
        return (
            <View style={[styles2.textWrapper]}>
                <View style={styles2.selected}>
                    <Text style={styles2.text}>{ dateAsString }</Text>
                </View>
            </View>
        );
    if(selected)
        return (
            <View style={[styles2.textWrapper, styles1.rightBorder]}>
                <View style={styles2.selected}>
                    <Text style={styles2.text}>{ dateAsString }</Text>
                </View>
            </View>
        );

    return (
        <View style={[styles2.textWrapper, styles1.rightBorder]}>
            <Text style={styles2.text}>{ dateAsString }</Text>
        </View>
    )
};