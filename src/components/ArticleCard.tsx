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
      height={{base:"100px",sm: "120px",md:"200px" }}
    >

      <Image
        objectFit='cover'
        width={{sm:"100px",md:"200px" }}
        src={article.urlToImage}
        key={article.title}
      />


      <VStack position="relative" width="100%" alignItems="center" padding="15px" justifyContent={"space-evenly"}>

        <Heading size='md'>{article.title}</Heading>
        <Hide below="md">
          <Text position={"absolute"} top="0" right="1" fontSize="13px">{article.publishedAt.slice(0,10)}</Text>
        <Text>{article.description}</Text>
        </Hide>
        
      </VStack>
      
    </Card>
  )
}

export default ArticleCard