import { Box } from "@mui/material";
import { FormBuilderProps } from "../types/formbuilder.types";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Body from "./layout/body";
import { useEffect } from "react";
import { useFormProvider } from "../provider/FormContext";
import ReactDndWrapper from "./ReactDndWrapper";
import { FormActionType } from "../provider/types";

const FormBuilderContent = ({form}: {form: FormBuilderProps})=>{
    const hasDragging: boolean = form?.hasDragging ?? false;
    const readOnly: boolean = form?.readOnly ?? false;
    const getFormValues = form.getFormValues;
    const {dispatch, useSelector} = useFormProvider();
    const answers = useSelector((state)=>state.answers);

    useEffect(()=>{
        dispatch({type: FormActionType.SET_ALL_ANSWERS, payload: form.answers})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        getFormValues(answers)
    }, [answers, getFormValues])

    return (
        <ReactDndWrapper hasDragging={hasDragging}>
            <Box>
                <Header layout={form?.header} fields={form.fields} readOnly={readOnly}/>
                <Body layout={form?.body} fields={form.fields} readOnly={readOnly}/>
                <Footer layout={form?.footer} fields={form.fields} readOnly={readOnly}/>
            </Box>
        </ReactDndWrapper>
    )
}

export default FormBuilderContent;