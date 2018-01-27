import { get } from '../api/exercisesApi';
import _ from "lodash";

export const SET_EXERCISES = 'SET_EXERCISES';

export function getExercises(userId) {
    return (dispatch, getState) => {
        dispatch(setExercises(_.keyBy(get(getState().auth.access_token), exercise => exercise.id)))
    }
}

export function setExercises(exercises) {
    return {
        type: 'SET_EXERCISES',
        exercises
    }
}
