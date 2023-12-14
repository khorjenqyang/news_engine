import useData from "./useData";
import {baseParams} from '../services/ApiClient'
import { IQuery } from "../context/NewsQueryContext";

export interface Article{
    title:string,
    description:string,
    content:string,
    url:string
    publishedAt:string
    image:string
}

const useArticles = (newsQuery:IQuery) => {
    
    const requestParam = {
        ...baseParams,
        q:newsQuery.searchWord,
        lang:newsQuery.language.toLowerCase()==="all"?"":newsQuery.language,
        from:newsQuery.selectedDateFrom.trim()?newsQuery.selectedDateFrom + "T00:00:00Z":"",
        to:newsQuery.selectedDateTo.trim()?newsQuery.selectedDateTo + "T00:00:00Z":""
    }

    return useData<Article>([newsQuery],{params:{...requestParam}})
}

export default useArticles;