import { Box } from "@mui/material";
import { Field } from "../../types/formbuilder.types";
import { FormLayout } from "../../types/layout.types";

const Header = ({fields, layout, readOnly}: {fields: Record<string, Field>, layout?: FormLayout, readOnly: boolean})=>{
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