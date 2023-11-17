import useData from "./useData";

export interface Article {
    
    title:string,
    description:string,
    content:string,
    url:string
    publishedAt:string
    image:string
    
}

const useArticles = (searchKeyWord:string) => useData<Article>(searchKeyWord)

export default useArticles;