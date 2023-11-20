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

    if (searchKeyWord==="") return
    
    const skeletonArray = [1,2,3,4,5,6,7]
    const {data,error,isLoading} = useArticles(searchKeyWord,selectedLanguage,selectedDateFrom,selectedDateTo)

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