import { useEffect, useState } from 'react'
import { Article } from '../hooks/useArticles';
import { Text} from '@chakra-ui/react'
import { CanceledError } from 'axios';
import ApiClient,{params} from '../services/ApiClient'
import ArticleCard from './ArticleCard';
import SkeletonCard from './SkeletonCard';

interface Props{
    searchKeyWord:string
}

interface FetchResponse {
    articles:Article[]
}

const ArticleList = ({searchKeyWord}:Props) => {

    if (!searchKeyWord) return

    const skeletonArray = [1,2,3,4,5,6,7]
    const [data,setData] = useState<Article[]>([])
    const [error,setError] = useState("")
    const [isLoading,setLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController()

        setLoading(true)
        ApiClient
        .get<FetchResponse>("/",{params:{...params,q:searchKeyWord,signal:controller.signal}})
        .then((res)=>{
            setData(res.data.articles.filter(article=>article.title!="[Removed]"))
            setLoading(false)
        })
        .catch(err=>{
            if (err instanceof CanceledError) return
            setError(err)
            setLoading(false)
        })

        return ()=>controller.abort()
        
    },[searchKeyWord]);

    return (
        <>
            {error && <Text>{error}</Text>}
            {isLoading && skeletonArray.map(skeleton=><SkeletonCard key={skeleton}/>)}

            {data.map((article,id)=>(
                <ArticleCard key={id} article={article}/>
            ))}
        </>
    )
}

export default ArticleList