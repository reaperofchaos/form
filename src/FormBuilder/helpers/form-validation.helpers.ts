import { Optional } from "../../utils"
import { Answer, AnswerType, AnswerTypeOptions } from "../types/field.types";
import { FieldType } from "../types/formbuilder.types";

// This is basically the same validation approach as before and liable to require maintenance over time.

// 1. define an evaluation function for a type
// functionally similar to a typeguard but returns boolean instead of a type assertion
export const valueIsStringAndNotEmpty = (value: Optional<string>): boolean=>{
    if(!value) return false;

    return value.trim().length > 0;
}

export const valueIsNumber = (value: Optional<number>): boolean =>{
    return value !== undefined && value !== null;
}

export const valueIsBoolean = (value: Optional<boolean>): boolean=>{
    return value === false || value === true;
}

export const valueIsArray = (value: Optional<unknown[]>): boolean=>{
    if(!value) return false;
    return value.length > 0;
}

// 2. define functions that extends the above for all possible AnswerTypes
export const stringIsAnswered = (value: AnswerType): boolean=>{
    if(typeof value === "string") return valueIsStringAndNotEmpty(value);

    return false;
}

export const numberIsAnswered = (value: AnswerType): boolean=>{
    if(typeof value === "number") return valueIsNumber(value);

    return false;
}

export const booleanIsAnswered = (value: AnswerType): boolean=>{
    if(typeof value === "boolean") return valueIsBoolean(value);

    return false;
}

export const arrayIsAnswered = (value: AnswerType): boolean =>{
    if(!value) return false;

    if(Array.isArray(value)) return valueIsArray(value);

    return false;
}

// 3. Create single method that handles validation for all field types
// The value's type is not filtering down correctly. Value is being interpreted as AnswerType instead of Answer<T>
// so this will create a lot of maintenance over time.
export const validateAnswer = <T extends keyof AnswerTypeOptions>(value: Answer<T> , type: T): boolean =>{
    switch(type){
        case FieldType.DROPDOWN:
        case FieldType.RADIO:
        case FieldType.AUTOCOMPLETE:
            return stringIsAnswered(value) ?? numberIsAnswered(value);
        case FieldType.BUTTON:
            return true;
        case FieldType.TEXT:
            return stringIsAnswered(value);
        case FieldType.RADIO_BOOLEAN:
            return booleanIsAnswered(value);
        case FieldType.MULTISELECT:
            return arrayIsAnswered(value);        
        default: 
            return false;
    }
}

