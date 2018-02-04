import React, {Component} from "react";
import styles from "./home/styles";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Button} from "native-base";
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from "moment";
import _ from "lodash";
import WeekHeader from "../components/week/WeekHeader";
import SideBar from "../components/week/SideBar";
import AllDay from "../components/week/AllDay";

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
            headerLeft: (<Button transparent onPress={() => navigation.navigate('Calendar')}><Icon size={24} name='keyboard-arrow-left' /><Text>Months</Text></Button>),
            tabBarIcon: () => (<Icon size={24} color="white" name="event" />),
        }
    };

    render(){
        return (
            <ScrollView horizontal={true} contentContainerStyle={styles.scroll}>
                <View style={{flex: 1}}>
                    <View style={{flex: 3, borderColor: '#cfcfcf', borderBottomWidth: StyleSheet.hairlineWidth}}>
                        <WeekHeader selectedDay={this.state.day} weekdays={ this.state.daysInWeek }/>
                    </View>
                    <View style={{flex: 1, borderColor: '#cfcfcf', borderBottomWidth: StyleSheet.hairlineWidth}}>
                        <AllDay />
                    </View>
                    <View style={{flex: 25}}>
                        <ScrollView>
                            <View style={{ flexDirection: 'row', flex: 1}}>
                                <SideBar style={{flex: 1}} />
                                <View style={{flex: 6}}>
                                    <Text></Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

