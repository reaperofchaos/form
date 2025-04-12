import { FormAction, FormActionType, FormDispatchPayloadType, FormState } from "../types";
import _ from 'lodash';

export const initialState: FormState = {
    answers: {}
}

const setAllAnswers = (state: FormState, action: FormAction<FormActionType.SET_ALL_ANSWERS>)=>{
    return  {...state, answers: action.payload};
}

const setAnAnswer = (state: FormState, action: FormAction<FormActionType.SET_AN_ANSWER>)=>{
    const {key, value} = action.payload;
    const answers = _.cloneDeep(state.answers);
    answers[key] = value;

    return {...state, answers};
}

const clearAllAnswers = (state: FormState,  action: FormAction<FormActionType.CLEAR_ALL_ANSWERS>)=>{
    console.log("state", state);
    console.log("action", action); 
    return {...state, answers: {}}
}

const clearAnAnswer = (state: FormState, action: FormAction<FormActionType.CLEAR_AN_ANSWER>)=>{
    console.log("state", state);
    console.log("action", action); 
    const key = action.payload;
    const answers = _.cloneDeep(state.answers);
    delete answers?.[key];

    return {...state, answers}
}

export const formReducers = (
    state: FormState,
    action: FormDispatchPayloadType
) =>{
    switch(action.type){
        case FormActionType.SET_ALL_ANSWERS:
            return setAllAnswers(state, action);
        case FormActionType.SET_AN_ANSWER:
           return setAnAnswer(state, action);
        case FormActionType.CLEAR_ALL_ANSWERS:
            return clearAllAnswers(state, action);
        case FormActionType.CLEAR_AN_ANSWER:
           return clearAnAnswer(state, action);
        default:
            return state;
    }
}

