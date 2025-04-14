import { DROPDOWN_OPTION_TYPE } from "../../core/types/dropdown.types";
import { DropdownProps, Optional } from "../../utils";
import { FieldType } from "./formbuilder.types";

export interface ParameterOptions{
    // array of dropdown props to populate options
    options: Optional<DropdownProps[]>
    // enum that should be a key in the option map in the store
    optionName: Optional<DROPDOWN_OPTION_TYPE>
    // array where index 0 is used the truthy label and index 1 is used for the falsy and all else is ignored
    booleanLabels?: Optional<string[]>
}

export type TextParams = {};
export type DropdownParams = Pick<ParameterOptions, "options" | "optionName">
export type RadioBooleanParams = Pick<ParameterOptions, "booleanLabels">
export type RadioParams = Pick<ParameterOptions, "options" | "optionName">

export interface ParameterComponents{
    [FieldType.DROPDOWN]: DropdownParams
    [FieldType.TEXT]: TextParams,
    [FieldType.RADIO_BOOLEAN]: RadioBooleanParams,
    [FieldType.RADIO]: RadioParams
}

export type Parameters<T extends FieldType> = ParameterComponents[T];