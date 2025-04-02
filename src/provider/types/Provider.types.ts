export interface FormStoreType{
    answers: Record<string, any>
}

export interface FormState{
    // store the answers of a form
    answers: Record<string, any>,
}

export type FormContextType = React.Context<FormStoreType>;