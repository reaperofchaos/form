import { Box } from "@mui/material";
import { TextForm } from "./FormBuilder/__fixtures__/textforms.fixtures";
import FormBuilder from "./FormBuilder/components/FormBuilder"
import { useMemo, useState } from "react";
import useGetRandomOptions from "./core/hooks/useGetRandomOptions";
import { DROPDOWN_OPTION_TYPE } from "./core/types/dropdown.types";
import { useSelector } from "react-redux";
import { selectRandomOptions } from "./core/selectors/core.selectors";

const TestFormComponent = ({name}: {name: string})=>{
    const [formAnswers, setFormAnswers] = useState<Record<string, any>>()
    const initialAnswers: Record<string, any> = {question1: "yes", question2: "no", question3: "This is a test", question4: 1, question5: 2}
    const randomOptions = useSelector(selectRandomOptions);
    // form builder doesn't care where the options come from as long as they fit the type
    // app should be responsible for getting the data
    const options = useMemo(()=>({[DROPDOWN_OPTION_TYPE.RANDOM]: randomOptions}), [randomOptions]);

    useGetRandomOptions();

    const getFormValues = (value: Record<string, any>)=>{
        setFormAnswers(value)
    }

    return (<Box>
        <FormBuilder getFormValues={getFormValues} {...TextForm} answers={initialAnswers} options={options}/>
        <Box>{name} - {JSON.stringify(formAnswers)}</Box>
        </Box>);
}

export default TestFormComponent;