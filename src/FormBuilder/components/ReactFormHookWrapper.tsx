import { Controller, FieldValue } from "react-hook-form";
import ComponentSelector from './ComponentSelector'
import { FieldPropTypes } from "../types";

const ReactFormHookWrapper = (
props: FieldPropTypes
)=>{
    const { name, control, rules, onChange, options, inputProps, ...rest } =
    props;

    return (<Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState: { error } }) => (
        <ComponentSelector {...props}/>
    )}
    />)

    
}