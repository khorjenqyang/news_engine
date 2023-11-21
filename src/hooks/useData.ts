import { useEffect, useState } from 'react'
import ApiClient from '../services/ApiClient'
import { AxiosRequestConfig, CanceledError } from 'axios'

interface FetchResponse<T> {
    articles:T[]
}

const useData = <T>(deps:any[],requestConfig?:AxiosRequestConfig)=>{   

    const [data,setData] = useState<T[]>([])
    const [error,setError] = useState("")
    const [isLoading,setLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController()

        setLoading(true)

        ApiClient
        .get<FetchResponse<T>>("",{signal:controller.signal,...requestConfig})
        .then((res)=>{
            setData(res.data.articles)
            setLoading(false)
        })
        .catch((err)=>{
            if (err instanceof CanceledError) return
            setError(err.message)
            setLoading(false)
        })

        return ()=>controller.abort()
    },deps?[...deps]:[])

    return {data,error,isLoading}

}

export default useData