import { FormDispatchPayloadType } from "./Action.types";

export interface FormStoreType{
    store: Store<FormState>
    state: FormState,
    dispatch: React.ActionDispatch<[action: FormDispatchPayloadType]>,
    useSelector: (selector: (state: FormState) => any) => any
}

export interface FormState{
    // store the answers of a form
    answers: Record<string, any>,
}

export type FormContextType = React.Context<FormStoreType>;

export type Store<T> = { getState: ()=>T, 
    setState: (state: T)=>void, 
    subscribe: (listener: any) => () => boolean 
}