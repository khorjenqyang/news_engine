import useData from "./useData";
import {baseParams} from '../services/ApiClient'

export interface Article {
    
    title:string,
    description:string,
    content:string,
    url:string
    publishedAt:string
    image:string
    
}

const useArticles = (searchKeyWord:string,selectedLanguage:string,selectedDateFrom:string,selectedDateTo:string) => {
    
    const requestParam = {
        ...baseParams,
        q:searchKeyWord,
        lang:selectedLanguage.toLowerCase()==="all"?"":selectedLanguage,
        from:selectedDateFrom?selectedDateFrom:"",
        to:selectedDateTo?selectedDateTo:""
    }

    console.log(requestParam)

    return useData<Article>([searchKeyWord],{params:{...requestParam}})
}

export default useArticles;