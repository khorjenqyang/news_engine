import useArticles from '../hooks/useArticles';
import { Text} from '@chakra-ui/react'
import ArticleCard from './ArticleCard';
import SkeletonCard from './SkeletonCard';

interface Props{
    searchKeyWord:string,
    selectedLanguage:string,
    selectedDateFrom:string;
    selectedDateTo:string
}

const ArticleList = ({searchKeyWord,selectedLanguage,selectedDateFrom,selectedDateTo}:Props) => {

    //trim
    searchKeyWord = searchKeyWord.trim()

    if (searchKeyWord==="") return
    
    const skeletonArray = [1,2,3,4,5,6,7]
    const {data,error,isLoading} = useArticles(searchKeyWord,selectedLanguage,selectedDateFrom,selectedDateTo)

    return (
        <>
            {error && <Text fontSize={"sm"}>{error}<br/>Please Contact Admin</Text>}
            {isLoading && skeletonArray.map(skeleton=><SkeletonCard key={skeleton}/>)}
            {!error && data.length===0&&<Text fontSize={"sm"}>No News Found<br/> Try Another Keyword</Text>}
            {data.map((article,id)=>(
                <ArticleCard key={id} article={article}/>
            ))}
        </>
    )

}

export default ArticleList