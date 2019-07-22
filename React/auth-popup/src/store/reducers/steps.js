import * as actionTypes from '../actions/actionTypes';
import { updObj } from '../../shared/utility';

const initialState = {
    currentStep: 'first'
};

const currentStep = (state, action) => {
    return updObj(state, {
        currentStep: 'second'})
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CURRENT_STEP_NEXT: return currentStepNext(state, action);
        default: return initialState;
    }
};

export default reducer;