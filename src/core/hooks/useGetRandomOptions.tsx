import { useEffect } from "react"
import { DropdownProps } from "../../utils";
import { useDispatch } from "react-redux";
import { setRandomOptions } from "../reducers/core.reducers";

const useGetRandomOptions = (language: string)=>{

    
const dispatch = useDispatch();

    useEffect(()=>{
        const englishOptions: DropdownProps[] = [
            {
                label: "one",
                value: 1,
                position: 0
            },
            {
                label: "two",
                value: 2,
                position: 1
            },
            {
                label: "three",
                value: 3,
                position: 2
            },
            {
                label: "four",
                value: 4,
                position: 3
            },
            {
                label: "five",
                value: 5,
                position: 4
            }
        ];
    
        const japaneseOptions: DropdownProps[] = [{
            label: "ichi",
            value: 1,
            position: 0
        },
        {
            label: "ni",
            value: 2,
            position: 1
        },
        {
            label: "san",
            value: 3,
            position: 2
        },
        {
            label: "chi",
            value: 4,
            position: 3
        },
        {
            label: "go",
            value: 5,
            position: 4
        },
    ]

        const optionsToUse = language === "English" ? englishOptions : japaneseOptions;
        dispatch(setRandomOptions(optionsToUse))
    }, [language, dispatch])
}

export default useGetRandomOptions;