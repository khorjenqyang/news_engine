import ColorModeSwitch from './ColorModeSwitch'
import {HStack,Image,Text } from '@chakra-ui/react'
import logo from '/news.png'
import SettingsMenu from './SettingsMenu'

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
          <SettingsMenu/>
        </HStack>

      </HStack>
    </>
  )
}

export default NavBar