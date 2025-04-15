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
        },
        question6: {
            type: FieldType.RADIO_BOOLEAN,
            name: "Question 6",
            id: 'question6',
            required: false,
            parameters: {
                booleanLabels: ["hai", "ie"]
            }
        },
        question7: {
            type: FieldType.RADIO,
            name: "Question 7",
            id: 'question7',
            required: false,
            parameters: {
                optionName: DROPDOWN_OPTION_TYPE.RANDOM,
                options: undefined            }
        },
        question8: {
            type: FieldType.AUTOCOMPLETE,
            name: "Question 8",
            id: 'question8',
            required: false,
            parameters: {
                optionName: DROPDOWN_OPTION_TYPE.RANDOM,
                options: undefined            }
        },
        question9: {
            type: FieldType.MULTISELECT,
            name: "Question 9",
            id: 'question9',
            required: false,
            parameters: {
                optionName: DROPDOWN_OPTION_TYPE.RANDOM,
                options: undefined            }
        },
        button1: {
            type: FieldType.BUTTON,
            name: "Random Button",
            id: 'button1',
            required: false,
            parameters: {
                functionName: "randomFunction"
            }
        }
    }
}