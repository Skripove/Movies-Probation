import {
    TOGGLE_AJAX_IN_PROGRESS
} from './actions';

const defaultState = false;

export const ajaxInProgress = (state=defaultState, action) => {
    switch(action.type){
        case TOGGLE_AJAX_IN_PROGRESS:
            return !state
        default:
            return state
    }
}