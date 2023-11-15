import useData from "./useData";

export interface Article {
    
    title:string,
    description:string,
    content:string,
    author:string,
    publishedAt:string
    urlToImage:string
    url:string

}

const useArticles = (searchKeyWord:string) => useData<Article>(searchKeyWord)

export default useArticles;