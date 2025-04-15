import { DROPDOWN_OPTION_TYPE } from "../../core/types/dropdown.types";
import { DropdownProps, Optional } from "../../utils";
import { FieldType } from "./formbuilder.types";

export enum ParamType{
    OPTIONS = "options",
    OPTION_NAME = "optionName",
    BOOLEAN_LABELS = "booleanLabels",
    FUNCTION_NAME = "functionName"
}

export interface ParameterOptions{
    // array of dropdown props to populate options
    [ParamType.OPTIONS]: Optional<DropdownProps[]>
    // enum that should be a key in the option map in the store
    [ParamType.OPTION_NAME]: Optional<DROPDOWN_OPTION_TYPE>
    // array where index 0 is used the truthy label and index 1 is used for the falsy and all else is ignored
    [ParamType.BOOLEAN_LABELS]?: Optional<string[]>
    // enum that should be a key in the method map in the store
    [ParamType.FUNCTION_NAME]: Optional<string>
}

export type TextParams = object;
export type DropdownParams = Pick<ParameterOptions, ParamType.OPTIONS | ParamType.OPTION_NAME>
export type RadioBooleanParams = Pick<ParameterOptions, ParamType.BOOLEAN_LABELS>
export type RadioParams = Pick<ParameterOptions, ParamType.OPTIONS | ParamType.OPTION_NAME>
export type AutocompleteParams = Pick<ParameterOptions, ParamType.OPTIONS | ParamType.OPTION_NAME>
export type MuliselectParams = Pick<ParameterOptions, ParamType.OPTIONS | ParamType.OPTION_NAME>
export type ButtonParams = Pick<ParameterOptions, ParamType.FUNCTION_NAME>

export interface ParameterComponents{
    [FieldType.DROPDOWN]: DropdownParams
    [FieldType.TEXT]: TextParams,
    [FieldType.RADIO_BOOLEAN]: RadioBooleanParams,
    [FieldType.RADIO]: RadioParams,
    [FieldType.AUTOCOMPLETE]: AutocompleteParams,
    [FieldType.MULTISELECT]: MuliselectParams
    [FieldType.BUTTON]: ButtonParams
}

export type Parameters<T extends FieldType> = ParameterComponents[T];