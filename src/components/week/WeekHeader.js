import React from "react";
import {StyleSheet, View} from "react-native";
import WeekDay from "./WeekDay";

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flex: 1,
    },
    weekdays: {
        flexDirection: 'row',
        flex: 7,
        justifyContent: 'space-around',
    }
});

const WeekHeader = props => {
    const { selectedDay, weekdays } = props;

    return (
        <View style={styles.wrapper}>
            <View style={{flex: 1}}>
            </View>
            <View style={styles.weekdays}>
                {
                    weekdays.map((current, index) => {
                        if(selectedDay.isSame(current.format(), 'day'))
                            return (<WeekDay key={index} date={current} selected={true}/>);
                        if(selectedDay.isSame(current.format(), 'day') && index === 7)
                            return (<WeekDay key={index} date={current} selected={true}/>);
                        if(index === 7)
                            return (<WeekDay text={current.format('D')}/>);
                        return (<WeekDay key={index} date={current}/>)
                    })
                }
            </View>
        </View>
    )
};

export default WeekHeader;