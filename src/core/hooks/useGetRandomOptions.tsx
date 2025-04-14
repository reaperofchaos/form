import { useEffect } from "react"
import { DropdownProps } from "../../utils";
import { useDispatch } from "react-redux";
import { setRandomOptions } from "../reducers/core.reducers";

const useGetRandomOptions = ()=>{
    const randomOptions: DropdownProps[] = [{
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
const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setRandomOptions(randomOptions))
    }, [])
}

export default useGetRandomOptions;