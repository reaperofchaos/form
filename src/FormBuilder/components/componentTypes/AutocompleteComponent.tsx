import React, { SyntheticEvent, useMemo } from "react";
import { DropdownProps, Optional } from "../../../utils";
import { useFormProvider } from "../../provider/FormContext";
import { AutocompleteComponentProps } from "../../types/field.types";
import { Autocomplete, TextField } from "@mui/material";
import { FormActionType } from "../../provider/types";

const AutocompleteComponent = (props: AutocompleteComponentProps)=>{ 
    const optionName = props.parameters.optionName;  
    const options = props.parameters.options;   
    const id = props.id;
    const label = props.name;
    const {useSelector, dispatch} = useFormProvider();
    const value = useSelector((state)=>state.answers?.[id]);
    const optionsFromStore: Optional<DropdownProps[]> = useSelector((state)=>state.options?.[optionName ?? ""]);
    const optionsToUse = useMemo(()=>optionsFromStore ?? options ?? [], [optionsFromStore, options])

    const handleChange = (_event: SyntheticEvent<Element, Event>, value: DropdownProps)=>{
        if(value?.value){
            dispatch({type: FormActionType.SET_AN_ANSWER, payload: {key: id, value: value?.value}})
        }
    }
    
    return (
            <Autocomplete
            disablePortal
            options={optionsToUse}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={label} />}
            value={value ?? ""}
            onChange={handleChange}
            />
    )
}

export default AutocompleteComponent; 