import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { RadioComponentProps } from "../../types/field.types";
import { FormActionType } from "../../provider/types";
import { useFormProvider } from "../../provider/FormContext";
import { useMemo } from "react";
import { DropdownProps, Optional } from "../../../utils";

const RadioComponent = (props: RadioComponentProps)=>{
const optionName = props.parameters.optionName;  
    const options = props.parameters.options;   
    const id = props.id;
    const {useSelector, dispatch} = useFormProvider();
    const value = useSelector((state)=>state.answers?.[id]);
    const optionsFromStore: Optional<DropdownProps[]> = useSelector((state)=>state.options?.[optionName ?? ""]);
    const optionsToUse = useMemo(()=>optionsFromStore ?? options ?? [], [optionsFromStore, options])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const currentValue = event.target.value;
        dispatch({type: FormActionType.SET_AN_ANSWER, payload: {key: id, value: currentValue}})
    }

return (<FormControl>
  <RadioGroup
    name={`${id}-${props.type}`}
    value={value ?? ""}
    onChange={onChange}
  >
    {optionsToUse?.map((option)=>
        <FormControlLabel key={`select-option-${option.label}`} value={option.value} control={<Radio />} label={option.label} />
    )}
  </RadioGroup>
</FormControl>);

}

export default RadioComponent;