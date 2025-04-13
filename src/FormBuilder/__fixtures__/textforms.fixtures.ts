import { FieldType, Form } from "../types/formbuilder.types";

export const TextForm: Form = {
    id: "1",
    name: "testTextForm",
    description: "A form with 3 text fields",
    fields: {
        question1: {
            type: FieldType.TEXT,
            name: "Question 1",
            id: "question1",
            required: true
        },
        question2: {
            type: FieldType.TEXT,
            name: "Question 2",
            id: "question2",
            required: true
        },
        question3: {
            type: FieldType.TEXT,
            name: "Question 3",
            id: "question3",
            required: true
        }
    }
}