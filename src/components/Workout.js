import React, {Component} from "react";
import {View, Text, FlatList, Modal, Button, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    innerContainer: {
        alignItems: 'center',
        backgroundColor: 'grey',
    },
});

export default class Workout extends Component {

    constructor(props) {
        super(props);

        this.props.workout.routines.forEach((routine) => {
            routine.exercises.map( exercise => exercise.name = this.props.exercises[exercise.id].name)
        });

        this.state = {
            modalVisible: false,
        };
    }

    openModal() {
        this.setState({modalVisible:true});
    }

    closeModal() {
        this.setState({modalVisible:false});
    }

    render(){
        return (
            <View>
                <View>
                    <Text>{this.props.workout.day + " " + this.props.workout.date}</Text>
                    <Text>
                        <TeamText size={this.props.workout.team.size}/>
                    </Text>
                    <FlatList
                        data={this.props.workout.routines}
                        renderItem={({item}) => <Routine data={item}/>}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={styles.container}>
                    <Modal
                        visible={this.state.modalVisible}
                        animationType={'fade'}
                        onRequestClose={() => this.closeModal()}
                        transparent={true}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.innerContainer}>
                                <Text>This is content inside of modal component</Text>
                                <Button
                                    onPress={() => this.closeModal()}
                                    title="Close modal"
                                >
                                </Button>
                            </View>
                        </View>
                    </Modal>
                    <Button
                        onPress={() => this.openModal()}
                        title="Open modal"
                    />
                </View>
            </View>
        )
    }
}

Workout.defaultProps = {
    workout: {
        day: "Sunday",
        date: "2018-01-21",
        description: "In teams of two, 3 X 9 min pieces @ 90% effort. 2 min off. I go, you go, one round each at a time",
        team: {
            size: 2,
            iGoUGo: true,
            type: "ONE_FULL_ROUND"
        },
        routines: [
            {
                id: "19cac59e-fe2f-11e7-8be5-0ed5f89f718b",
                workoutType: "AMRAP",
                work: {
                    work: 540,
                    rest: 120
                },
                effort: 90,
                exercises: [
                    {
                        id: "59e24b59ca989685da26e4f1",
                        weight: 90,
                        reps: 8
                    },
                    {
                        id: "59e24b59ca989685da26e4f2",
                        cal: 8
                    }
                ]
            },
            {
                id: "19cac968-fe2f-11e7-8be5-0ed5f89f718b",
                workoutType: "AMRAP",
                work: {
                    work: 540,
                    rest: 120
                },
                effort: 90,
                exercises: [
                    {
                        id: "59e24b59ca989685da26e4f3",
                        weight: 40,
                        reps: 8
                    },
                    {
                        id: "59e24b59ca989685da26e4f4",
                        distance: 30,
                        reps: 8
                    }
                ]
            },
            {
                id: "19cacbca-fe2f-11e7-8be5-0ed5f89f718b",
                workoutType: "AMRAP",
                work: {
                    work: 540,
                    rest: 120
                },
                effort: 90,
                exercises: [
                    {
                        id: "59e24b59ca989685da26e4f5",
                        height: 2.5,
                        reps: 5
                    },
                    {
                        id: "59e24b59ca989685da26e4f6",
                        cal: 10,
                        straps: true,
                        damper: 6
                    }
                ]
            }
        ]
    }
};

const TeamText = props => {

    if(props.size === undefined){ return null; }

    return (
        <Text>{"In teams of " + props.size}</Text>
    )
};

const Routine = props => {
    return (
        <View>
            <Text>{props.data.workoutType + ", " +  props.data.work.work / 60 + " min"}</Text>
            <FlatList
                data={props.data.exercises}
                renderItem={({item}) => <Exercise data={item}/>}
                keyExtractor={(item, index) => index}
            style={{paddingLeft: 20}}/>
        </View>
    )
};

const Exercise = props => {
    return (
        <View>
            <Text>
                <RepsText reps={props.data.reps}/>
                <CalText cal={props.data.cal}/>
                {props.data.name}
            </Text>
        </View>
    )
};

const RepsText = props => {

    if(props.reps === undefined){ return null; }

    return (
        <Text>{props.reps + " "}</Text>
    )
};

const CalText = props => {

    if(props.cal === undefined){ return null; }

    return (
        <Text>{props.cal + ' cal '}</Text>
    )
};

