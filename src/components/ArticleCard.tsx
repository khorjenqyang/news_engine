import { Card,Image,Heading,Text,VStack, Show} from '@chakra-ui/react'
import { Article } from '../hooks/useArticles'
import image from '../assets/broken_image.png'

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
      onClick={()=>window.open(article.url, '_blank')}
      cursor={"pointer"} 
    >

      <Image
        objectFit='cover'
        minWidth={"100px"}
        width={{base:"80px",sm:"100px",md:"200px" }}
        src={article.image}
        key={article.title}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src=image;
        }}
      />

      <VStack width="100%" alignItems="center" padding="2px 5px" justifyContent={"space-evenly"}>
        
        <Heading fontSize={{ base:"10px",sm:"13px",md:"17px"}}>{article.title}</Heading>
        <Show above="md" >
          <Text fontSize={{ md:"13px"}} >{article.description}</Text>
        </Show>
        
        <Text fontSize={{ base:"8px",sm:"9px",md:"12px"}}>{article.publishedAt.slice(0,10)}</Text>

      </VStack>
      
    </Card>
  )
}

export default ArticleCard