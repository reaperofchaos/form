import FormProvider from "../provider/FormProvider"
import { FormBuilderProps } from "../types/formbuilder.types";
import FormBuilderContent from "./FormBuilderContent";

const FormBuilder = (form: FormBuilderProps)=>
    (<FormProvider options={form?.options}>
        <FormBuilderContent form={form}/>
    </FormProvider>);

export default FormBuilder;