import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function issueReducer(state=initialState.issues,action){
    switch(action.type){
        case types.LOAD_ISSUE_SUCCESS:
        return action.issues;

        case types.ADD_ISSUE_SUCCESS:
        return[
            ...state,
            action.issue
        ];
        default:
            return state;
    }
}