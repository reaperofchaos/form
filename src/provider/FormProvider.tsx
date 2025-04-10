import { ReactElement } from "react";
import { FormActionType, FormStoreType } from "./types";
import React from "react";
import { FormContext } from "./FormContext";
import { formReducers, initialState } from "./reducers";

// Should be able to take in all kinds of 
// crazy stuff but only ever output a map of field to answer
const FormProvider = ({children}: {children: ReactElement})=>{
    const [state, dispatch] = React.useReducer(formReducers, initialState)
    
    // sucks to have to define these actions in the provider and not somewhere else
    const setAnswers = (answers: Record<string, any>)=>{
        dispatch({
            type: FormActionType.SET_ALL_ANSWERS,
            payload: answers
        })
    }

    const updateAnswerForQuestion = (key: string, value: any)=>{
        dispatch({
            type: FormActionType.SET_AN_ANSWER,
            payload: {key, value}
        })
    }

    const clearAnswers = ()=>{
        dispatch({
            type: FormActionType.CLEAR_ALL_ANSWERS,
            payload: null
        })
    }

    const clearAnAnswer = (val: string)=>{
        dispatch({
            type: FormActionType.CLEAR_AN_ANSWER,
            payload: val
        })
    }

    const contextValue: FormStoreType = React.useMemo(()=>({
        answers: state.answers,
        clearAnswers,
        clearAnAnswer,
        updateAnswerForQuestion,
        setAnswers
    }),
    [state, dispatch])

    if(contextValue){
        return (
            <FormContext.Provider value={contextValue}>
                {children}
            </FormContext.Provider>
        )
    }
}

export default FormProvider;