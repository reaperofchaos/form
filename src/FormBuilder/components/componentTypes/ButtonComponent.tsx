import React from "react";
import { Button } from "@mui/material";
import { ButtonComponentProps } from "../../types/field.types";
import { useFormProvider } from "../../provider/FormContext";
import { Optional } from "../../../utils";

const ButtonComponent = (props: ButtonComponentProps)=>{
    const id = props.id;
    const label = props.name;
    const functionName = props.parameters.functionName ?? "";
    console.log("functionName", functionName);

    const {useSelector} = useFormProvider();
    const functionFromStore: Optional<()=>void> = useSelector((state)=>state.functions?.[functionName]);
    const functions: Record<string, ()=>void> = useSelector((state)=>state.functions);

    console.log("functions", functions);
    
    const handleClick = ()=>{
        if(functionFromStore){
            functionFromStore();
        }

        if(!functionFromStore){
            console.log("No function was provided or it doesn't exist one. So this button doesn't do anything.")
        }

    }
    
    return (
        <Button id={`${id}-${props.type}`} onClick={handleClick}>
            {label}
        </Button>
    )
}

export default ButtonComponent;