import { Checkbox, FormControl, ListItemText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { MultiselectComponentAnswerType, MultiselectComponentProps } from "../../types/field.types";
import { useFormProvider } from "../../provider/FormContext";
import { DropdownProps, Optional } from "../../../utils";
import { useMemo } from "react";
import { FormActionType } from "../../provider/types";

const MultiselectComponent = (props: MultiselectComponentProps)=>{
 const optionName = props.parameters.optionName;  
    const options = props.parameters.options;   
    const id = props.id;
    const {useSelector, dispatch} = useFormProvider();
    const value = useSelector((state)=>state.answers?.[id]);
    const optionsFromStore: Optional<DropdownProps[]> = useSelector((state)=>state.options?.[optionName ?? ""]);
    const optionsToUse = useMemo(()=>optionsFromStore ?? options ?? [], [optionsFromStore, options])
    
    const handleChange = (event: SelectChangeEvent<MultiselectComponentAnswerType>)=>{
        const currentValue = event.target.value;
            
        dispatch({type: FormActionType.SET_AN_ANSWER, payload: {key: id, value: currentValue}})
    }

    return (
        <FormControl sx={{ m: 1, width: 500 }}>
        <Select
          multiple
          value={value ?? []}
          onChange={handleChange}
          renderValue={(selected) => selected?.sort().join(', ')}
        >
          {optionsToUse.map((option) => (
            <MenuItem key={option.label} value={option.value}>
                <Checkbox checked={value?.indexOf(option.value) > -1} />
                <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
}

export default MultiselectComponent;