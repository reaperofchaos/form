import { Box } from "@mui/material";
import { FieldType } from "../types/formbuilder.types";
import TextComponent from "./componentTypes/TextComponent";
import { FieldPropTypes } from "../types/field.types";
import DropdownComponent from "./componentTypes/DropdownComponent";
import RadioBooleanComponent from "./componentTypes/RadioBooleanComponent";
import RadioComponent from "./componentTypes/RadioComponent";

export const ComponentSelector = (field: FieldPropTypes)=>{
    const type = field.type
    
    switch(type){
        case FieldType.TEXT:
            return <TextComponent {...field} />
        case FieldType.DROPDOWN:
                return <DropdownComponent {...field} />
        case FieldType.RADIO:
            return <RadioComponent {...field} />
        case FieldType.RADIO_BOOLEAN:
            return <RadioBooleanComponent {...field} />
        default: 
            return (<Box />)
    }
}