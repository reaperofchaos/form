import { Box } from "@mui/material";
import { FormLayout } from "../../types/layout.types";
import { ComponentSelector } from "../ComponentSelector";
import { FieldPropTypes } from "../../types/field.types";

const Body = ({fields, layout, readOnly}: {fields: Record<string, FieldPropTypes>, layout?: FormLayout, readOnly: boolean})=>{
    const fieldArray = Object.values(fields);

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {fieldArray.map((field)=>
                <ComponentSelector key={field.id} {...field} />
            )}
        </Box>
    )
}

export default Body;