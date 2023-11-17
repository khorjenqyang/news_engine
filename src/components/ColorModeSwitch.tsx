import { Center, HStack,useColorMode} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const ColorModeSwitch = () => {

    const {toggleColorMode,colorMode} = useColorMode();

    return (
        <HStack>
            <Center 
                key={colorMode==="dark"?"dark":"light"}
                as={motion.div}
                initial={{y:-50,opacity:0}}
                animate={{y:0,opacity:1}}
                exit={{y:50,opacity:0}}
                cursor={"pointer"} 
                onClick={toggleColorMode} 
                backgroundColor={colorMode==="dark"?"#f5bd1f":"#2b2c5a"} 
                padding={"8px"} 
                borderRadius={"5px"}
                
            >
                {colorMode==="dark"?<SunIcon color="black"/>:<MoonIcon color="white"/>}
            </Center>
        </HStack>
    )
}

export default ColorModeSwitch