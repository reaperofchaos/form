import { Box } from "@mui/material";
import { Field } from "../../types/formbuilder.types";
import { FormLayout } from "../../types/layout.types";

const Footer = ({fields, layout, readOnly}: {fields: Record<string, Field>, layout?: FormLayout, readOnly: boolean})=>{

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