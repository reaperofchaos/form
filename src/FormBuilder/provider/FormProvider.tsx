import { ReactElement, useEffect } from "react";
import { FormActionType, FormState, FormStoreType, Store } from "./types";
import React from "react";
import { FormContext } from "./FormContext";
import { formReducers, initialState } from "./reducers";
import { createStore, useStore } from "./helpers/provider.helpers";
import { DropdownProps } from "../../utils";

const FormProvider = ({children, options, functions}: {children: ReactElement, options?: Record<string, DropdownProps[]>, functions?: Record<string, ()=>void>})=>{
    const [state, dispatch] = React.useReducer(formReducers, initialState)
    const store: Store<FormState> = createStore(state);
    
    console.log('state', store.getState());

    // set the options if you got them
    useEffect(()=>{
        if(options){
            dispatch({type: FormActionType.SET_ALL_OPTIONS, payload: options});
        }
    }, [options])

    // set the functions if you got them
    useEffect(()=>{
        if(functions){
            console.log('functions in hook', functions);
            dispatch({type: FormActionType.SET_ALL_FUNCTIONS, payload: functions});
        }
    }, [functions])

    const useSelector =(selector: (state: FormState)=>any) => useStore(store, selector )

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