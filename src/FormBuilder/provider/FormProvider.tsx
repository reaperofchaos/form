import React, { ReactElement, useEffect } from "react";
import { FormActionType, FormState, FormStoreType, Store } from "./types";
import { FormContext } from "./FormContext";
import { formReducers, initialState } from "./reducers";
import { createStore, useStore } from "./helpers/provider.helpers";
import { DropdownProps } from "../../utils";
import { FieldPropTypes } from "../types/field.types";
import { initializeFormFieldState } from "./helpers/formfieldstate.helpers";

const FormProvider = ({children, options, functions, fields, answers}: {children: ReactElement, options?: Record<string, DropdownProps[]>, functions?: Record<string, ()=>void>, fields: Record<string, FieldPropTypes>, answers: Record<string, any>})=>{
    const [state, dispatch] = React.useReducer(formReducers, initialState)
    const store: Store<FormState> = createStore(state);
    const useSelector =(selector: (state: FormState)=>any) => useStore(store, selector )

    useEffect(()=>{
        //initialize state of the form
        const stateOfForm = initializeFormFieldState(fields, answers);

        dispatch({type: FormActionType.SET_FORM_FIELD_STATE, payload: stateOfForm});
        dispatch({type: FormActionType.SET_ALL_ANSWERS, payload: answers})
    }, [])

    // set the options if you got them
    useEffect(()=>{
        if(options){
            dispatch({type: FormActionType.SET_ALL_OPTIONS, payload: options});
        }
    }, [options])

    // set the functions if you got them
    useEffect(()=>{
        if(functions){
            dispatch({type: FormActionType.SET_ALL_FUNCTIONS, payload: functions});
        }
    }, [functions])


    const contextValue: FormStoreType = {
        store, 
        state,
        dispatch,
        useSelector,
    }

    if(contextValue){
        return (
            <FormContext.Provider value={contextValue}>
                {children}
            </FormContext.Provider>
        )
    }
}

export default FormProvider;