export interface FormStoreType{
    answers: Record<string, any>;
    clearAnswers: ()=>void;
    clearAnAnswer: (val: string)=>void;
    updateAnswerForQuestion: (key: string, value: any)=>void;
    setAnswers: (answers: Record<string, any>)=>void;
}

export interface FormState{
    // store the answers of a form
    answers: Record<string, any>,
}

export type FormContextType = React.Context<FormStoreType>;