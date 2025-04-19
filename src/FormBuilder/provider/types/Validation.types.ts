import { FieldType } from "../../types/formbuilder.types"

export interface FieldState{
    type: FieldType // type of field
    name: string // field label text
    answered: boolean // field is answered
    required: boolean // field must be answered
    disabled: boolean // not clickable
    hidden: boolean // not visible
}

export interface FormFieldState{
    [fieldName: string]: FieldState
}