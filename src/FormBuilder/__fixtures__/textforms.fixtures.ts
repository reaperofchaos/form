import { DROPDOWN_OPTION_TYPE } from "../../core/types/dropdown.types";
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
            required: true,
            parameters: {}
        },
        question2: {
            type: FieldType.TEXT,
            name: "Question 2",
            id: "question2",
            required: true,
            parameters: {}
        },
        question3: {
            type: FieldType.TEXT,
            name: "Question 3",
            id: "question3",
            required: true,
            parameters: {}
        },
        question4: {
            type: FieldType.DROPDOWN,
            name: "Question 4",
            id: "question4",
            required: false,
            parameters: {
                optionName: DROPDOWN_OPTION_TYPE.RANDOM,
                options: undefined
            }
        },
        question5: {
            type: FieldType.DROPDOWN,
            name: "Question 5",
            id: "question5",
            required: false,
            parameters: {
                optionName: undefined,
                options: [
                    {label: "yi",
                        value: 1,
                        position: 0,
                    },
                    {label: "er",
                        value: 2,
                        position: 1,
                    },
                    {label: "san",
                        value: 3,
                        position: 2
                    },
                ]
            }
        }
    }
}