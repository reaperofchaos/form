// Form dispatch action types
export enum FormActionType{
    SET_ALL_ANSWERS = 'setAllAnswers',
    SET_AN_ANSWER = 'setAnAnswer',
    CLEAR_ALL_ANSWERS = 'clearAnswers',
    CLEAR_AN_ANSWER = 'clearAnAnswer'
}

// Interface with a key of action type mapped to its payload type
export interface FormActionPayloads{
    [FormActionType.SET_ALL_ANSWERS]: Record<string, any>,
    [FormActionType.SET_AN_ANSWER]: {key: string, value: any},
    [FormActionType.CLEAR_ALL_ANSWERS]: null
    [FormActionType.CLEAR_AN_ANSWER]: string
}

// Type leveraging the interface to map an enum to a type
export type FormActionPayloadType<T extends keyof FormActionPayloads> = FormActionPayloads[T];

// form action type for argument in dispatch
export type FormAction<T extends FormActionType> ={
    type: T,
    payload: FormActionPayloadType<T>
}

// TODO: surely a better way
// Possible payloads for a form dispatch action
export type FormDispatchPayloadType = 
| FormAction<FormActionType.CLEAR_ALL_ANSWERS> 
| FormAction<FormActionType.CLEAR_AN_ANSWER> 
| FormAction<FormActionType.SET_AN_ANSWER> 
| FormAction<FormActionType.SET_ALL_ANSWERS>

// Form Provider dispatch type
export type FormDispatch = (payload: FormDispatchPayloadType)=>void;