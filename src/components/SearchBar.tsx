import { Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import {motion} from 'framer-motion'

interface Props{
  onSearchKeyWord:(input:string)=>void
}

const SearchBar = ({onSearchKeyWord}:Props) => {

  const [searchValue,setSearchValue] = useState("");
  
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
            value={searchValue}
            onChange={(e)=>{
              setSearchValue(e.target.value)
            }}

            onKeyDown={(e)=>{
              if(e.key=="Enter"){
                onSearchKeyWord(searchValue)
              }
            }}
          />

          <InputRightElement width='4.5rem'>
            <Button 
              size='sm' 
              backgroundColor={"transparent"} 
              onClick={()=>onSearchKeyWord(searchValue)}
            >
              <SearchIcon/>
            </Button>
          </InputRightElement>
          
      </InputGroup>
  )
}

export default SearchBar