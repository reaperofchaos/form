import { Box } from "@mui/material";
import { FormBuilderProps } from "../types/formbuilder.types";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Body from "./layout/body";
import React, { useEffect, useMemo } from "react";
import { useFormProvider } from "../provider/FormContext";
import ReactDndWrapper from "./ReactDndWrapper";
import { determineFormIsAnswered } from "../provider/helpers/formfieldstate.helpers";

const FormBuilderContent = ({form}: {form: FormBuilderProps})=>{
    const hasDragging: boolean = form?.hasDragging ?? false;
    const readOnly: boolean = form?.readOnly ?? false;
    const getFormValues = form.getFormValues;
    const getIsAnswered = form?.getIsAnswered;
    const {useSelector} = useFormProvider();
    const answers = useSelector((state)=>state.answers);
    const formState = useSelector((state)=>state.formFieldState);
    const answered = useMemo(()=>determineFormIsAnswered(formState), [formState]);

    useEffect(()=>{
        getFormValues(answers)
    }, [answers, getFormValues])

    useEffect(()=>{
        if(getIsAnswered){
            getIsAnswered(answered)
        }
    }, [answered, getIsAnswered])

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