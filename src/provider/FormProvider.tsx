import { ReactElement } from "react";
import { FormActionType, FormState, FormStoreType, Store } from "./types";
import React from "react";
import { FormContext } from "./FormContext";
import { formReducers, initialState } from "./reducers";
import { createStore, useStore } from "./helpers/provider.helpers";

// Should be able to take in all kinds of 
// crazy stuff but only ever output a map of field to answer
const FormProvider = ({children}: {children: ReactElement})=>{
    const [state, dispatch] = React.useReducer(formReducers, initialState)

    const store: Store<FormState> = createStore(state);
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