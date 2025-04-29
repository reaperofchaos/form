import _ from "lodash";
import { validateAnswer } from "../../helpers/form-validation.helpers";
import { AnswerType, FieldPropTypes } from "../../types/field.types";
import { FieldState, FormFieldState } from "../types/Validation.types";

export const initializeFormFieldState = (fields: Record<string, FieldPropTypes>, answers: Record<string, AnswerType>): FormFieldState=>{
    //initialize state of the form
    const stateOfForm: FormFieldState = {}
    const fieldArray = Object.values(fields);

    fieldArray.forEach((field)=>{
        stateOfForm[field.id] = {
            type: field.type,
            name: field.name,
            required: field?.required ?? false,
            disabled: field?.disabled ?? false,
            hidden: field?.hidden ?? false,
            answered: validateAnswer(answers?.[field.id], field.type)
        }
    })

    return stateOfForm;
}

export const updateFieldState = (key: string, value: string, formFieldState: FormFieldState)=>{
    console.log("key", key, "value", value, formFieldState);

        const updatedFormFieldState = _.cloneDeep(formFieldState);
        const fieldStateForKey: FieldState = _.cloneDeep(formFieldState[key])
        console.log("fieldStateForKey", fieldStateForKey);
        fieldStateForKey.answered = validateAnswer(value, fieldStateForKey?.type);
        updatedFormFieldState[key] = fieldStateForKey;

        return updatedFormFieldState;
}


export const updateFormFieldStateFromAnswers = (answers: Record<string, any>, formFieldState: FormFieldState)=>{

    const keys = Object.keys(answers);
    let updatedFormFieldState = _.cloneDeep(formFieldState);
    keys.forEach((key)=>{
        updatedFormFieldState = updateFieldState(key, answers[key], updatedFormFieldState);
    })

    return updatedFormFieldState;
}

export const determineFormIsAnswered = (stateOfForm: FormFieldState): {isAnswered: boolean, reasonText?: string}=>{
    const unansweredFields = Object.values(stateOfForm).filter((field)=>field.required === true && field.answered === false);
    const unansweredStrings: string[] = unansweredFields.map((field)=>field.name);
    const isPlural = unansweredStrings.length > 1;
    const questions = isPlural ? "questions" : "question";
    const isAre = isPlural ? "are" : "is";
    const isAnswered = unansweredFields.length === 0;
    const reasonText = isAnswered ? undefined :`The ${questions} "${unansweredStrings.join('", "')}" ${isAre} not answered.`

    return {isAnswered, reasonText}
}