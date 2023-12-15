import { Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Text 
      paddingY="15px" 
      fontSize={{base:"xs",lg:"sm"}}
      color="grey" 
    >
      The news is limited because this website is using the Gnews API Free Plan for Proof Of Concept (POC).
    </Text>
  )
}

export default Footer