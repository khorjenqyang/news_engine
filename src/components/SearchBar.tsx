import { Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import {motion} from 'framer-motion'
import { useRef } from 'react'
import { useNewsQuery, useUpdateNewsQuery } from '../context/NewsQueryContext'

const SearchBar = () => {

  const input = useRef() as React.MutableRefObject<HTMLInputElement>

  const newsQuery = useNewsQuery()
  const setNewsQuery = useUpdateNewsQuery()

  function onClick(){
    setNewsQuery({...newsQuery,searchWord:input.current.value})
  }

  return (
      <InputGroup 
            as={motion.div}
            whileHover={{scale:1.02}}  
            size='md' 
            margin="20px 0px"
      >
          <Input
            pr='4.5rem'
            placeholder='Search News Keyword'
            ref={input}

            onKeyDown={(e)=>{
              if(e.key=="Enter"){
                onClick()
              }
            }}
            
          />

          <InputRightElement width='4.5rem'>
            <Button 
              size='sm' 
              backgroundColor={"transparent"} 
              onClick={()=>onClick()}
            >
              <SearchIcon/>
            </Button>
          </InputRightElement>
          
      </InputGroup>
  )
}

export default SearchBar