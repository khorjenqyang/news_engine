import useArticles from '../hooks/useArticles';
import { Text } from '@chakra-ui/react'
import ArticleCard from './ArticleCard';
import SkeletonCard from './SkeletonCard';
import { IQuery} from '../context/NewsQueryContext';

interface Props{
    newsQuery:IQuery
}

const ArticleList = ({newsQuery}:Props) => {
    
    if (newsQuery.searchWord.trim()==="") return
    
    const skeletonArray = [1,2,3,4,5,6,7]
    const {data,error,isLoading} = useArticles(newsQuery)

    if(error) return <Text fontSize={"sm"}>{error}<br/>Please Contact Admin</Text>
    return (
        <>
            {isLoading && skeletonArray.map(skeleton=><SkeletonCard key={skeleton}/>)}
            {!error && data.length===0&&<Text fontSize={"sm"}>No News Found<br/>Try Another Keyword</Text>}
            {data.map((article,id)=>(
                <ArticleCard key={id} article={article}/>
            ))}
        </>
    )

}

export default ArticleList