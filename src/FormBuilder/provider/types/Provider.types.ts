import { DropdownProps } from "../../../utils";
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
    // options
    options: Record<string, DropdownProps[]>
    // functions
    functions: Record<string, ()=>void>
}

export type FormContextType = React.Context<FormStoreType>;

export type Store<T> = { getState: ()=>T, 
    setState: (state: T)=>void, 
    subscribe: (listener: any) => () => boolean 
}