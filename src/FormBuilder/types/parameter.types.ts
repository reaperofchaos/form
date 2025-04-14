import { DROPDOWN_OPTION_TYPE } from "../../core/types/dropdown.types";
import { DropdownProps, Optional } from "../../utils";
import { FieldType } from "./formbuilder.types";

export interface ParameterOptions{
    options: Optional<DropdownProps[]>
    optionName: Optional<DROPDOWN_OPTION_TYPE>
}

export type TextParams = {};
export type DropdownParams = Pick<ParameterOptions, "options" | "optionName">

export interface ParameterComponents{
    [FieldType.DROPDOWN]: DropdownParams
    [FieldType.TEXT]: TextParams
}

export type Parameters<T extends FieldType> = ParameterComponents[T];