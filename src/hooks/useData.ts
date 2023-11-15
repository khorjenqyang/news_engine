import { useEffect, useState } from 'react'
import ApiClient,{params} from '../services/ApiClient'
import { CanceledError } from 'axios'

interface FetchResponse<T> {
    articles:T[]
}

const useData = <T>(searchKeyWord:string)=>{   

    const [data,setData] = useState<T[]>([])
    const [error,setError] = useState("")
    const [isLoading,setLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController()

        setLoading(true)
        ApiClient
        .get<FetchResponse<T>>("/",{params:{...params,q:searchKeyWord,signal:controller.signal}})
        .then((res)=>{
            setData(res.data.articles)
            setLoading(false)
        })
        .catch(err=>{
            if (err instanceof CanceledError) return
            setError(err)
            setLoading(false)
        })

        return ()=>controller.abort()
    },[])

    return {data,error,isLoading}

}

export default useData