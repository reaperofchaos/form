import { TextField } from "@mui/material"
import { useFormProvider } from "../../provider/FormContext";
import { TextComponentProps } from "../../types/field.types";
import { FormActionType } from "../../provider/types";

const TextComponent = (props: TextComponentProps)=>{    
    const label = props.id;
    const {useSelector, dispatch} = useFormProvider();
    const value = useSelector((state)=>state.answers?.[label]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const currentValue = event.target.value;

        dispatch({type: FormActionType.SET_AN_ANSWER, payload: {key: label, value: currentValue}})
    }

    return (
        <TextField id={`${props.id}-${props.type}`} label={props.name} onChange={onChange} value={value ?? ""}/>
    )
}

export default TextComponent; 