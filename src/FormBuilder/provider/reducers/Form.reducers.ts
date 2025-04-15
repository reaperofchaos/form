import { FormAction, FormActionType, FormDispatchPayloadType, FormState } from "../types";
import _, { functions } from 'lodash';

export const initialState: FormState = {
    answers: {},
    options: {},
    functions: {}
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

const clearAllAnswers = (state: FormState)=>{
    return {...state, answers: {}}
}

const clearAnAnswer = (state: FormState, action: FormAction<FormActionType.CLEAR_AN_ANSWER>)=>{
    const key = action.payload;
    const answers = _.cloneDeep(state.answers);
    delete answers?.[key];

    return {...state, answers}
}

const setAllOptions = (state: FormState, action: FormAction<FormActionType.SET_ALL_OPTIONS>)=>{
    return  {...state, options: action.payload};
}

const setAnOption = (state: FormState, action: FormAction<FormActionType.SET_AN_OPTION>)=>{
    const {key, value} = action.payload;
    const options = _.cloneDeep(state.options);
    options[key] = value;

    return {...state, options};
}

const clearAllOptions = (state: FormState)=>{
    return {...state, options: {}}
}

const clearAnOption = (state: FormState, action: FormAction<FormActionType.CLEAR_AN_OPTION>)=>{
    const key = action.payload;
    const options = _.cloneDeep(state.options);
    delete options?.[key];

    return {...state, options}
}

const setAllFunctions = (state: FormState, action: FormAction<FormActionType.SET_ALL_FUNCTIONS>)=>{
    return  {...state, functions: action.payload};
}

const setAFunction = (state: FormState, action: FormAction<FormActionType.SET_A_FUNCTION>)=>{
    const {key, value} = action.payload;
    const functions = _.cloneDeep(state.functions);
    functions[key] = value;

    return {...state, functions};
}

const clearAllFunctions = (state: FormState)=>{
    return {...state, functions: {}}
}

const clearAFunction = (state: FormState, action: FormAction<FormActionType.CLEAR_A_FUNCTION>)=>{
    const key = action.payload;
    const functions = _.cloneDeep(state.functions);
    delete functions?.[key];

    return {...state, functions}
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
            return clearAllAnswers(state);
        case FormActionType.CLEAR_AN_ANSWER:
           return clearAnAnswer(state, action);
        case FormActionType.SET_ALL_OPTIONS:
            return setAllOptions(state, action);
        case FormActionType.SET_AN_OPTION:
            return setAnOption(state, action);
        case FormActionType.CLEAR_ALL_OPTIONS:
            return clearAllOptions(state)
        case FormActionType.CLEAR_AN_OPTION:
            return clearAnOption(state, action)
        case FormActionType.SET_ALL_FUNCTIONS:
            return setAllFunctions(state, action);
        case FormActionType.SET_A_FUNCTION:
            return setAFunction(state, action);
        case FormActionType.CLEAR_ALL_FUNCTIONS:
            return clearAllFunctions(state);
        case FormActionType.CLEAR_A_FUNCTION:
            return clearAFunction(state, action)
        default:
            return state;
    }
}

