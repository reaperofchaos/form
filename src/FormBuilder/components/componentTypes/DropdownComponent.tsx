import { ChangeEvent, useMemo } from "react";
import { DropdownProps, Optional } from "../../../utils";
import { useFormProvider } from "../../provider/FormContext";
import { DropdownComponentProps } from "../../types/field.types";
import { MenuItem, TextField } from "@mui/material";
import { FormActionType } from "../../provider/types";

const DropdownComponent = (props: DropdownComponentProps)=>{ 
    const optionName = props.parameters.optionName;  
    const options = props.parameters.options;   
    const id = props.id;
    const label = props.name;
    const {useSelector, dispatch} = useFormProvider();
    const value = useSelector((state)=>state.answers?.[id]);
    const optionsFromStore: Optional<DropdownProps[]> = useSelector((state)=>state.options?.[optionName ?? ""]);
    const optionsToUse = useMemo(()=>optionsFromStore ?? options ?? [], [optionsFromStore, options])

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const currentValue = event.target.value;
        dispatch({type: FormActionType.SET_AN_ANSWER, payload: {key: id, value: currentValue}})
    }
    
    return (
            <TextField        
                value={value ?? ""}
                label={label}
                id={`${id}-${props.type}`}
                select
                onChange={handleChange}
            >
                {optionsToUse?.map((option)=>
                     <MenuItem key={option.label} value={option.value}>{option.label}</MenuItem>
                )}
            </TextField>
    )
}

export default DropdownComponent; 