import { Optional } from "../../utils";
import { FieldProp, FieldType } from "./formbuilder.types";

export type AnswerType = TextAnswerType | NumberType;

export type TextAnswerType = Optional<string>
export type NumberType = Optional<number>
export type DropdownType = Optional<string | number>;

export type TextComponentProps = FieldProp<FieldType.TEXT>;
export type DropdownComponentProps =FieldProp<FieldType.DROPDOWN>

export type FieldPropTypes = TextComponentProps | DropdownComponentProps