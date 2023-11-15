import { Card,Image,Heading,Text,VStack, Show, Hide } from '@chakra-ui/react'
import { Article } from '../hooks/useArticles'

interface Props{
    article: Article
}

const ArticleCard = ({article}:Props) => {

  return (

    <Card
      direction={"row"}
      overflow='hidden'
      margin="10px 0px"
      height={{base:"90px",sm: "100px",md:"150px" }}
    >

      <Image
        objectFit='cover'
        minWidth={"100px"}
        width={{base:"80px",sm:"100px",md:"200px" }}
        src={article.urlToImage}
        key={article.title}
      />


      <VStack width="100%" alignItems="center" padding="2px 5px" justifyContent={"space-around"}>
        
        <Heading fontSize={{ base:"10px",sm:"13px",md:"17px"}}>{article.title}</Heading>
        <Show above="md" >
          <Text fontSize={{ md:"13px"}} >{article.description}</Text>
          <Text fontSize={{ md:"12px"}}>{article.publishedAt.slice(0,10)}</Text>
        </Show>
        
      </VStack>
      
    </Card>
  )
}

export default ArticleCard