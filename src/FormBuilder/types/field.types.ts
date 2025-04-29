import { Optional } from "../../utils";
import { FieldProp, FieldType } from "./formbuilder.types";

export type AnswerType = 
| TextGroupAnswerType
| TextAnswerType 
| NumberAnswerType 
| DropdownAnswerType 
| RadioBooleanAnswerType 
| RadioAnswerType
| AutocompleteAnswerType
| MultiselectComponentAnswerType;

export interface AnswerTypeOptions{
    [FieldType.TEXT]: TextAnswerType,
    [FieldType.TEXT_GROUP]: TextGroupAnswerType,
    [FieldType.DROPDOWN]: DropdownAnswerType,
    [FieldType.RADIO_BOOLEAN]: RadioBooleanAnswerType,
    [FieldType.RADIO]: RadioAnswerType,
    [FieldType.AUTOCOMPLETE]: AutocompleteAnswerType,
    [FieldType.MULTISELECT]: MultiselectComponentAnswerType
    [FieldType.BUTTON]: null;
}

export type TextAnswerType = Optional<string>
export type TextGroupAnswerType = Optional<string[]>
export type NumberAnswerType = Optional<number>
export type DropdownAnswerType = Optional<string | number>;
export type RadioBooleanAnswerType = Optional<boolean>;
export type RadioAnswerType = Optional<string | number>;
export type AutocompleteAnswerType = Optional<string | number>;
export type MultiselectComponentAnswerType = Optional<string[] | number[]>;

export type Answer<T extends keyof AnswerTypeOptions> = AnswerTypeOptions[T]

export type TextComponentProps = FieldProp<FieldType.TEXT>;
export type TextGroupComponentProps = FieldProp<FieldType.TEXT_GROUP>;
export type DropdownComponentProps =FieldProp<FieldType.DROPDOWN>
export type RadioBooleanComponentProps =FieldProp<FieldType.RADIO_BOOLEAN>
export type RadioComponentProps =FieldProp<FieldType.RADIO>
export type AutocompleteComponentProps = FieldProp<FieldType.AUTOCOMPLETE>
export type MultiselectComponentProps = FieldProp<FieldType.MULTISELECT>
export type ButtonComponentProps = FieldProp<FieldType.BUTTON>

export type FieldPropTypes = 
| TextComponentProps 
| TextGroupComponentProps
| DropdownComponentProps 
| RadioBooleanComponentProps 
| RadioComponentProps 
| AutocompleteComponentProps
| MultiselectComponentProps
| ButtonComponentProps