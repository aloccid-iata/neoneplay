import { useEffect, useState } from "react";
import useInternalStore from "@/store";
import useRFStore from "@/storeRF";
import useEventListener from "@/hooks/useEventListener";
import isValidUrl from "@/helpers/isValidUrl";


const Searchbar = () => {
    const [isURI, setIsUri] = useState(false)
    const { setAddNodeFlag, addNodeFlag, searchbarValue, setSearchbarValue, } = useInternalStore()



    const handleSearch = (searchValue) => {
        setSearchbarValue(searchValue);
        if (isValidUrl(searchValue)) {
            // if is uri
            setIsUri(true)
        } else {
            setIsUri(false)
            // search in nodes if is not uri
        }
    };


    useEffect(() => {
        if (searchbarValue == "") {
            setIsUri(false)
        }
    }, [addNodeFlag])


    return (
        <div className="flex w-1/2 m-auto m-3 rounded-full bg-white border-0 border-slate-200  ">
            <input className={`inline w-full p-3 pl-5 text-2xl rounded-3xl focus:outline-none text-xl ${isURI ? "text-violet-400" : "text-violet-950"} `} type='text' onChange={(e) => { handleSearch(e.target.value) }} value={searchbarValue} placeholder="Search" />
            {isURI &&
                <div className={`${isURI ? "" : "w-0"} text-slate-50 text-center font-medium bg-violet-400 hover:bg-violet-600 active:bg-violet-900 dark:bg-violet-500 dark:hover:bg-violet-600 dark:active:bg-violet-900    rounded-full transition-all duration-200 m-2 my-1 px-2`}>
                    <div className="relative flex w-1/12 m-2   items-center align-center">
                        {/* <button className=" text-slate-50 mt-[0.82vh] my-auto"> */}
                        <button
                            onClick={() => { setAddNodeFlag(true) }}
                            className=" flex my-auto mx-auto">Add</button>
                    </div>
                </div>
            }
        </div>

    )
}

export default Searchbar;