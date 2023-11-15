import { Box, Skeleton } from '@chakra-ui/react'
import { Card,VStack } from '@chakra-ui/react'

const SkeletonCard = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      margin="10px 0px"
      height="200px"
    >
    
    <Box width="200px">
        <Skeleton height='100%' width="100%"/>
    </Box>

    <VStack position="relative" width="100%" alignItems="center" padding="15px" justifyContent={"space-evenly"}>

        <Skeleton height='30px' width="100%"/>
        <Skeleton height='30px' width="100%"/>
        <Skeleton height='30px' width="100%"/>

    </VStack>
      
    </Card>
  )
}

export default SkeletonCard