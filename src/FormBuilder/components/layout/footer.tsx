import { Box } from "@mui/material";
import { FormLayout } from "../../types/layout.types";
import { FieldPropTypes } from "../../types/field.types";

const Footer = ({fields, layout, readOnly}: {fields: Record<string, FieldPropTypes>, layout?: FormLayout, readOnly: boolean})=>{

    if(!layout){
        return <></>; 
    }
    
    return (
        <Box>
            Footer stuff goes here.
        </Box>
    )
}

export default Footer;