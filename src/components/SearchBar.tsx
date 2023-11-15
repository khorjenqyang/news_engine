import { Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'

interface Props{
  onClick:(input:string)=>void
}

const SearchBar = ({onClick}:Props) => {

  const [searchValue,setSearchValue] = useState("");
  
  return (
      <InputGroup size='md' margin="20px 0px">

          <Input
            pr='4.5rem'
            placeholder='Search News'
            value={searchValue}
            onChange={(e)=>{
              setSearchValue(e.target.value)
            }}

            onKeyDown={(e)=>{
              if(e.key=="Enter"){
                onClick(searchValue)
              }
            }}
          />

          <InputRightElement width='4.5rem'>
            <Button 
              size='sm' 
              backgroundColor={"transparent"} 
              onClick={()=>onClick(searchValue)}
            >
              <SearchIcon/>
            </Button>
          </InputRightElement>
          
      </InputGroup>
  )
}

export default SearchBar