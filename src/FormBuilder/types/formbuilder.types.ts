import { AuditingType } from "../../utils";
import { FormLayout } from "./layout.types"

export interface FormBuilderProps extends Form{
    // form displays read only variant
    readOnly?: boolean;
    // should use react dnd provider
    hasDragging?: boolean; 
    // function to return state values to outside
    getFormValues: (values: Record<string, any>)=>void;
    // answers
    answers: Record<string, any>
}

export interface Form extends AuditingType<string>{
    // id of form
    id: string;
    // description of form intention
    description?: string;
    // name of form
    name: string;
    // fields on a form
    fields: Record<string, Field>
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
}

export interface FieldProp<T extends FieldType> extends Field {
    // type
    type: T;
}


export enum FieldType{
    TEXT = "text"
}

