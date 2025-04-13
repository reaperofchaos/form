import { Box } from "@mui/material";
import { TextForm } from "./FormBuilder/__fixtures__/textforms.fixtures";
import FormBuilder from "./FormBuilder/components/FormBuilder"
import { useState } from "react";

const TestFormComponent = ({name}: {name: string})=>{
    const [formAnswers, setFormAnswers] = useState<Record<string, any>>()

    const initialAnswers: Record<string, any> = {question1: "yes", question2: "no", question3: "This is a test"}

    const getFormValues = (value: Record<string, any>)=>{
        setFormAnswers(value)
    }

    return (<Box>
        <FormBuilder getFormValues={getFormValues} {...TextForm} answers={initialAnswers}/>
        <Box>{name} - {JSON.stringify(formAnswers)}</Box>
        </Box>);
}

export default TestFormComponent;