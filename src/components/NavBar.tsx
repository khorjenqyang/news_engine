import ColorModeSwitch from './ColorModeSwitch'
import { HStack,Image,Text } from '@chakra-ui/react'
import logo from '../assets/news.png'
import { SettingsIcon } from '@chakra-ui/icons'

const NavBar = () => {
  return (
    <>
    <HStack justifyContent="space-between">

      <HStack>
        <Image src={logo} boxSize="40px"/>
        <Text>News Engine</Text>
      </HStack>

      <ColorModeSwitch/>


    </HStack>
    </>
  )
}

export default NavBar