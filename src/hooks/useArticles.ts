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
        from:selectedDateFrom.trim()?selectedDateFrom + "T00:00:00Z":"",
        to:selectedDateTo.trim()?selectedDateTo + "T00:00:00Z":""
    }

    return useData<Article>([searchKeyWord,selectedLanguage,selectedDateFrom,selectedDateTo],{params:{...requestParam}})
}

export default useArticles;