import { EnumDictionary } from "../../utils/types/map.types"

export enum FormActionType{
    SET_ALL_ANSWERS = 'setAllAnswers',
    SET_AN_ANSWER = 'setAnAnswer',
    CLEAR_ALL_ANSWERS = 'clearAnswers',
    CLEAR_AN_ANSWER = 'clearAnAnswer'
}

export enum FormStorePayloadTypeEnum {
    MAP = 'map',
    KEY_VALUE_PAIR = 'keyValuePair',
    NULL = 'null',
    STRING = 'string'
}

export interface FormActionPayloads{
    [FormStorePayloadTypeEnum.MAP]: Record<string, any>,
    [FormStorePayloadTypeEnum.KEY_VALUE_PAIR]: {key: string, value: any},
    [FormStorePayloadTypeEnum.NULL]: null
    [FormStorePayloadTypeEnum.STRING]: string
}

const test2: FormActionPayloads[FormStorePayloadTypeEnum.KEY_VALUE_PAIR] = "test"
const test3: FormActionPayloads[FormStorePayloadTypeEnum.KEY_VALUE_PAIR] = {key: "", value: null}


export const FormActionPayloadTypeDictionary: EnumDictionary<FormActionType, FormStorePayloadTypeEnum> = {
    [FormActionType.SET_ALL_ANSWERS]: FormStorePayloadTypeEnum.MAP,
    [FormActionType.SET_AN_ANSWER]: FormStorePayloadTypeEnum.KEY_VALUE_PAIR,
    [FormActionType.CLEAR_ALL_ANSWERS]: FormStorePayloadTypeEnum.NULL,
    [FormActionType.CLEAR_AN_ANSWER]: FormStorePayloadTypeEnum.STRING
}

export type FormActionPayloadType<T extends FormActionType> = FormActionPayloads[typeof FormActionPayloadTypeDictionary[T]];

const test4: FormActionPayloadType<FormActionType.SET_AN_ANSWER> = {key: "", value: null}
const test5: FormActionPayloadType<FormActionType.SET_AN_ANSWER> = "tssta"

// form action type for argument in dispatch
export type FormAction<T extends FormActionType> ={
    type: T,
    payload: FormActionPayloadType<T>
}

const test: FormActionPayloadType<FormActionType.SET_AN_ANSWER> = "test"
export type FormDispatchPayloadType = FormAction<FormActionType>;

const myTestPayload: FormDispatchPayloadType = {type: FormActionType.CLEAR_AN_ANSWER, payload: test};

export type FormDispatch = (payload: FormDispatchPayloadType)=>void;