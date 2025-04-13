import { Box } from "@mui/material";
import { Field, FieldType } from "../types/formbuilder.types";
import TextComponent from "./componentTypes/TextComponent";

export const ComponentSelector = (field: Field)=>{
    const type = field.type
    
    switch(type){
        case FieldType.TEXT:
            return <TextComponent {...field} />
        default: 
            return (<Box />)
    }
}