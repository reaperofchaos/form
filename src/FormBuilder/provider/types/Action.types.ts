import { DropdownProps } from "../../../utils";
import { FieldState, FormFieldState } from "./Validation.types";

// Form dispatch action types
export enum FormActionType{
    SET_ALL_ANSWERS = 'setAllAnswers',
    SET_AN_ANSWER = 'setAnAnswer',
    CLEAR_ALL_ANSWERS = 'clearAnswers',
    CLEAR_AN_ANSWER = 'clearAnAnswer',
    SET_ALL_OPTIONS = 'setAllOptions',
    SET_AN_OPTION = 'setAnOption',
    CLEAR_AN_OPTION = 'clearAnOption',
    CLEAR_ALL_OPTIONS = 'clearAllOptions',
    SET_ALL_FUNCTIONS = 'setAllFunctions',
    SET_A_FUNCTION = 'setAFunction',
    CLEAR_ALL_FUNCTIONS = 'clearAllFunctions',
    CLEAR_A_FUNCTION = 'clearAFunction',
    SET_FORM_FIELD_STATE = 'setFormFieldState',
    UPDATE_FORM_FIELD_STATE = 'updateFormFieldState',
    CLEAR_FORM_FIELD_STATE = 'clearFormFieldState',
}

// Interface with a key of action type mapped to its payload type
export interface FormActionPayloads{
    [FormActionType.SET_ALL_ANSWERS]: Record<string, any>,
    [FormActionType.SET_AN_ANSWER]: {key: string, value: any},
    [FormActionType.CLEAR_ALL_ANSWERS]: null,
    [FormActionType.CLEAR_AN_ANSWER]: string,
    [FormActionType.SET_ALL_OPTIONS]: Record<string, DropdownProps[]>,
    [FormActionType.SET_AN_OPTION]: {key: string, value: DropdownProps[]}
    [FormActionType.CLEAR_AN_OPTION]: string,
    [FormActionType.CLEAR_ALL_OPTIONS]: null
    [FormActionType.SET_ALL_FUNCTIONS]: Record<string, ()=>void>,
    [FormActionType.SET_A_FUNCTION]: {key: string, value: ()=>void},
    [FormActionType.CLEAR_ALL_FUNCTIONS]: null,
    [FormActionType.CLEAR_A_FUNCTION]: string,
    [FormActionType.SET_FORM_FIELD_STATE]: FormFieldState,
    [FormActionType.UPDATE_FORM_FIELD_STATE]: {key: string, value: FieldState},
    [FormActionType.CLEAR_FORM_FIELD_STATE]: null
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
| FormAction<FormActionType.SET_ALL_OPTIONS>
| FormAction<FormActionType.SET_AN_OPTION>
| FormAction<FormActionType.CLEAR_ALL_OPTIONS>
| FormAction<FormActionType.CLEAR_AN_OPTION>
| FormAction<FormActionType.SET_ALL_FUNCTIONS>
| FormAction<FormActionType.SET_A_FUNCTION>
| FormAction<FormActionType.CLEAR_ALL_FUNCTIONS>
| FormAction<FormActionType.CLEAR_A_FUNCTION>
| FormAction<FormActionType.SET_FORM_FIELD_STATE>
| FormAction<FormActionType.UPDATE_FORM_FIELD_STATE>
| FormAction<FormActionType.CLEAR_FORM_FIELD_STATE>

// Form Provider dispatch type
export type FormDispatch = (payload: FormDispatchPayloadType)=>void;