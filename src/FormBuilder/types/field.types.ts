import { Optional } from "../../utils";
import { Field, FieldProp, FieldType } from "./formbuilder.types";

export type AnswerType = TextAnswerType | NumberType;

export type TextAnswerType = Optional<string>
export type NumberType = Optional<number>


export type TextComponentProps = FieldProp<FieldType.TEXT>;