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

type IContextType = {
    newsQuery:IQuery,
    setQuery:React.Dispatch<React.SetStateAction<IQuery>>
}

const INITIAL_QUERY = {
    searchWord:"",
    language:"all",
    selectedDateFrom:"",
    selectedDateTo:""
}

const INITIAL_STATE = {
    newsQuery:INITIAL_QUERY,
    setQuery:()=>{}
}

const FnNewsQueryContext = createContext<IContextType>(INITIAL_STATE)
const UseFnNewsQueryContext = createContext((fnQuery:IQuery)=>{console.log(fnQuery)})

const NewsQueryContext = ({children}:Props) => {

    const [newsQuery,setQuery] = useState<IQuery>(INITIAL_QUERY)

    function updateSetQuery(fnQuery:IQuery){
        setQuery(fnQuery)
    }

    const value = {
        newsQuery,
        setQuery
    }
    
    return (
        <FnNewsQueryContext.Provider value={value}>
            <UseFnNewsQueryContext.Provider value={updateSetQuery}>
                {children}
            </UseFnNewsQueryContext.Provider>
        </FnNewsQueryContext.Provider>
    )
}

export const useNewsQuery = () => useContext(FnNewsQueryContext)
export const useUpdateNewsQuery = () => useContext(UseFnNewsQueryContext)

export default NewsQueryContext