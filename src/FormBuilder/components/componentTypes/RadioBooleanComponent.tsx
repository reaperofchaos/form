import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { RadioBooleanComponentProps } from "../../types/field.types";
import { FormActionType } from "../../provider/types";
import { useFormProvider } from "../../provider/FormContext";

const RadioBooleanComponent = (props: RadioBooleanComponentProps)=>{
    const id = props.id;
    const booleanLabels = props?.parameters?.booleanLabels ?? [];
    const truthyLabel = booleanLabels?.[0] ?? "Yes";
    const falsyLabel = booleanLabels?.[1] ?? "No";

    const {useSelector, dispatch} = useFormProvider();
    const value = useSelector((state)=>state.answers?.[id]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const currentValue = event.target.value;
        const valueAsBoolean = currentValue === "true" ? true : false;
        
        dispatch({type: FormActionType.SET_AN_ANSWER, payload: {key: id, value: valueAsBoolean}})
    }


return (<FormControl>
  <RadioGroup
    name={`${id}-${props.type}`}
    value={value ? "true" : "false"}
    onChange={onChange}
  >
    <FormControlLabel value="true" control={<Radio />} label={truthyLabel} />
    <FormControlLabel value="false" control={<Radio />} label={falsyLabel} />
  </RadioGroup>
</FormControl>);

}

export default RadioBooleanComponent;