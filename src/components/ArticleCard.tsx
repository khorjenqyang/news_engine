import { Card,Image,Heading,Text,VStack } from '@chakra-ui/react'
import { Article } from '../hooks/useArticles'

interface Props{
    article: Article
}

const ArticleCard = ({article}:Props) => {

  return (

    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      margin="10px 0px"
      height="200px"
    >

      <Image
        objectFit='cover'
        width="200px"
        src={article.urlToImage}
        key={article.title}
      />


      <VStack position="relative" width="100%" alignItems="center" padding="15px" justifyContent={"space-evenly"}>

        <Text position={"absolute"} top="1" right="1" fontSize="13px">{article.publishedAt.slice(0,10)}</Text>
        <Heading size='md'>{article.title}</Heading>
        <Text>{article.description}</Text>
        
          
      </VStack>
      
    </Card>
  )
}

export default ArticleCard