import React from 'react';
import FormProvider from "../provider/FormProvider"
import { FormBuilderProps } from "../types/formbuilder.types";
import FormBuilderContent from "./FormBuilderContent";

const FormBuilder = (form: FormBuilderProps)=>
    (<FormProvider answers={form?.answers} options={form?.options} functions={form?.functions} fields={form.fields}>
        <FormBuilderContent form={form}/>
    </FormProvider>);

export default FormBuilder;