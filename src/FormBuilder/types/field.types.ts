import { Optional } from "../../utils";
import { FieldProp, FieldType } from "./formbuilder.types";

export type AnswerType = TextAnswerType | NumberAnswerType | DropdownAnswerType | RadioBooleanAnswerType | RadioAnswerType;

export type TextAnswerType = Optional<string>
export type NumberAnswerType = Optional<number>
export type DropdownAnswerType = Optional<string | number>;
export type RadioBooleanAnswerType = Optional<boolean>;
export type RadioAnswerType = Optional<string | number>;

export type TextComponentProps = FieldProp<FieldType.TEXT>;
export type DropdownComponentProps =FieldProp<FieldType.DROPDOWN>
export type RadioBooleanComponentProps =FieldProp<FieldType.RADIO_BOOLEAN>
export type RadioComponentProps =FieldProp<FieldType.RADIO>

export type FieldPropTypes = TextComponentProps | DropdownComponentProps | RadioBooleanComponentProps | RadioComponentProps