import { createContext, useContext, useState } from "react"

interface Props{
    children:React.ReactNode
}

export type IQuery = {
    searchWord:string,
    language:string,
    selectedDateFrom:string,
    selectedDateTo:string
}

type IUseFnNewsQueryContext = (fnQuery: IQuery) => void;

const INITIAL_QUERY = {
    searchWord:"",
    language:"all",
    selectedDateFrom:"",
    selectedDateTo:""
}

const FnNewsQueryContext = createContext<IQuery>(INITIAL_QUERY)
const UseFnNewsQueryContext = createContext<IUseFnNewsQueryContext>(()=>{})

const NewsQueryContext = ({children}:Props) => {

    const [newsQuery,setQuery] = useState<IQuery>(INITIAL_QUERY)

    function updateSetQuery(fnQuery:IQuery){
        setQuery(fnQuery)
    }

    return (
        <FnNewsQueryContext.Provider value={newsQuery}>
            <UseFnNewsQueryContext.Provider value={updateSetQuery}>
                {children}
            </UseFnNewsQueryContext.Provider>
        </FnNewsQueryContext.Provider>
    )
}

export const useNewsQuery = () => useContext(FnNewsQueryContext)
export const useUpdateNewsQuery = () => useContext(UseFnNewsQueryContext)

export default NewsQueryContext