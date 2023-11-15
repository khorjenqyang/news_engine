import { Center, HStack,useColorMode} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ColorModeSwitch = () => {

    const {toggleColorMode,colorMode} = useColorMode();

    return (
        <HStack>
            {colorMode==="dark"?
            <Center cursor={"pointer"} onClick={toggleColorMode} backgroundColor={"#f5bd1f"} padding={"8px"} borderRadius={"5px"}>
                <SunIcon  color="black"/>
            </Center>
            :
            <Center cursor={"pointer"}  onClick={toggleColorMode} backgroundColor={"#2b2c5a"} padding={"8px"} borderRadius={"5px"}>
                <MoonIcon  color="white"/>
            </Center>}
        </HStack>
    )
}

export default ColorModeSwitch