import { AuditingType, DropdownProps } from "../../utils";
import { Answer, FieldPropTypes } from "./field.types";
import { FormLayout } from "./layout.types"
import {Parameters} from "./parameter.types"

export interface FormBuilderProps extends Form{
    // form displays read only variant
    readOnly?: boolean;
    // should use react dnd provider
    hasDragging?: boolean; 
    // function to return state values to outside
    getFormValues: (values: Record<string, any>)=>void;
    // function to return if form is answered
    getIsAnswered?: (value: {isAnswered: boolean, reasonText?: string})=>void;
    // answers
    answers: Record<string, any>
    // option map for dynamic types
    options?: Record<string, DropdownProps[]>
    // function map for dynamic types
    functions?: Record<string, ()=>void>
}

export interface Form extends AuditingType<string>{
    // id of form
    id: string;
    // description of form intention
    description?: string;
    // name of form
    name: string;
    // fields on a form
    fields: Record<string, FieldPropTypes>
    // header position slot, always vertically at top of form, default is non-existent
    header?: FormLayout;
    // body position slot, if not provided default is a column with all fields
    body?: FormLayout
    // footer position slot, always vertically at the bottom of the form, default is non-existent
    footer?: FormLayout;
}

export  interface Field extends AuditingType<string>{
   // id of field
    id: string;
    // name of field
    name: string;
    // type
    type: FieldType;
    // is required field
    required: boolean;
    // visible but not clickable
    disabled: boolean;
    // not visible and also not clickable
    hidden: boolean;
}

export interface FieldProp<T extends FieldType> extends Field {
    // type
    type: T;
    // parameters
    parameters: Parameters<T>

    // optional onChange
    customOnChange?: (val: Answer<T>)=>void;
}


export enum FieldType{
    TEXT = "text",
    TEXT_GROUP = 'text_group',
    DROPDOWN = "dropdown",
    RADIO_BOOLEAN = "radio_boolean",
    RADIO = "radio",
    AUTOCOMPLETE = 'autocomplete',
    MULTISELECT = 'multiselect',
    BUTTON = 'button'
}

