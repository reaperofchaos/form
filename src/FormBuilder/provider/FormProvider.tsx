import { ReactElement, useEffect } from "react";
import { FormActionType, FormState, FormStoreType, Store } from "./types";
import React from "react";
import { FormContext } from "./FormContext";
import { formReducers, initialState } from "./reducers";
import { createStore, useStore } from "./helpers/provider.helpers";
import { DropdownProps } from "../../utils";

const FormProvider = ({children, options}: {children: ReactElement, options?: Record<string, DropdownProps[]>})=>{
    const [state, dispatch] = React.useReducer(formReducers, initialState)
    const store: Store<FormState> = createStore(state);

    // set the options if you got them
    useEffect(()=>{
        if(options){
            dispatch({type: FormActionType.SET_ALL_OPTIONS, payload: options});
        }
    }, [options])

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