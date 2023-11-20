import { Text,Box,Select, Input, Menu, MenuButton, MenuList, IconButton } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import DropDownConfig from '../config/LanguageDropDown.json'; // Import the JSON file

const SettingsBar = () => {
    return (
    <Menu>
        <>

        <MenuButton height="35px" backgroundColor={"transparent"} as={IconButton} icon={<SettingsIcon />}/>

        <MenuList>
            <Box margin="15px 10px">
                <Text margin="10px 0px">Search Language</Text>
                <Select>
                    {Object.entries(DropDownConfig).map(([language, code]) => (
                        <option key={code} value={code}>
                            {language}
                        </option>
                    ))}
                </Select>
            </Box>

            <Box margin="15px 10px">
                <Text margin="10px 0px" >Date (From)</Text>
                <Input
                type="date"
                />
            </Box>

            <Box margin="15px 10px">
                <Text margin="10px 0px" >Date (To)</Text>
                <Input
                type="date"
                />
            </Box>

        </MenuList>

        </>

    </Menu>
    )
}

export default SettingsBar