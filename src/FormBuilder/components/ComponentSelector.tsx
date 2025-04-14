import { Box } from "@mui/material";
import { FieldType } from "../types/formbuilder.types";
import TextComponent from "./componentTypes/TextComponent";
import { FieldPropTypes } from "../types/field.types";
import DropdownComponent from "./componentTypes/DropdownComponent";

export const ComponentSelector = (field: FieldPropTypes)=>{
    const type = field.type
    
    switch(type){
        case FieldType.TEXT:
            return <TextComponent {...field} />
        case FieldType.DROPDOWN:
                return <DropdownComponent {...field} />
        default: 
            return (<Box />)
    }
}