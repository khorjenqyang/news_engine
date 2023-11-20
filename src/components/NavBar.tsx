import ColorModeSwitch from './ColorModeSwitch'
import {HStack,Image,Text } from '@chakra-ui/react'
import logo from '../assets/news.png'
import SettingsBar from './SettingsMenu'

interface Props {
  
}

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between">

        <HStack>
          <Image src={logo} boxSize="40px"/>
          <Text>News Engine</Text>
        </HStack>

        <HStack>
          <ColorModeSwitch/>
          <SettingsBar/>
        </HStack>

      </HStack>
    </>
  )
}

export default NavBar