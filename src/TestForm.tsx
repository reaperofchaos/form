import { Box, Button } from "@mui/material";
import { TextForm } from "./FormBuilder/__fixtures__/textforms.fixtures";
import FormBuilder from "./FormBuilder/components/FormBuilder"
import { useMemo, useState } from "react";
import useGetRandomOptions from "./core/hooks/useGetRandomOptions";
import { DROPDOWN_OPTION_TYPE } from "./core/types/dropdown.types";
import { useSelector } from "react-redux";
import { selectRandomOptions } from "./core/selectors/core.selectors";
import { FUNCTION_OPTION_TYPE } from "./core/types/function.types";

const TestFormComponent = ({name}: {name: string})=>{
    const [language, setLanguage] = useState("Japanese")
    const [formAnswers, setFormAnswers] = useState<Record<string, any>>()
    const [canSubmit, setCanSubmit] = useState<string | undefined>();

    const initialAnswers: Record<string, any> = {question1: "yes", question2: "no", question3: "This is a test", question4: 1, question5: 2}
    const randomOptions = useSelector(selectRandomOptions);
    
    // form builder doesn't care where the options come from as long as they fit the type
    // app should be responsible for getting the data
    const options = useMemo(()=>({[DROPDOWN_OPTION_TYPE.RANDOM]: randomOptions}), [randomOptions]);
    
    // ditto to the above with functions as long as they take no arguments and return no values
    const functions = useMemo(()=>{
        const randomFunction = ()=>{
            if(language === "English"){
                setLanguage("Japanese")
            }
    
            if(language === "Japanese"){
                setLanguage("English")
            }
    
        }
        return {[FUNCTION_OPTION_TYPE.RANDOM_FUNCTION]: randomFunction }}, [language]);

    useGetRandomOptions(language);

    const getFormValues = (value: Record<string, any>)=>{
        setFormAnswers(value)
    }

    const getIsAnswered = (value: {isAnswered: boolean, reasonText?: string})=>{
        console.log('value', value);
        setCanSubmit(value?.reasonText)
    }

    return (<Box>
            <Button onClick={()=>setLanguage("English")}>English</Button>
            <Button onClick={()=>setLanguage("Japanese")}>Japanese</Button>
        <FormBuilder getFormValues={getFormValues} getIsAnswered={getIsAnswered} {...TextForm} answers={initialAnswers} options={options} functions={functions}/>
        <Box>{name} - {JSON.stringify(formAnswers)}</Box>
            <Box>Can submit: {canSubmit ? "No" : "Yes"} {canSubmit ? `Reason: ${canSubmit}`: ""} </Box>
        </Box>);
}

export default TestFormComponent;