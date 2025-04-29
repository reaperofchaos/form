import { Box } from "@mui/material";
import { FormLayout } from "../../types/layout.types";
import { FieldPropTypes } from "../../types/field.types";
import React from "react";

const Header = ({fields, layout, readOnly}: {fields: Record<string, FieldPropTypes>, layout?: FormLayout, readOnly: boolean})=>{
    if(!layout){
        return <></>; 
    }
    
    return (
        <Box>
            header stuff goes here.
        </Box>
    )
}

export default Header;