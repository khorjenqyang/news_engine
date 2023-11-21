import { Text,Box,Select, Input, Menu, MenuButton, MenuList, IconButton } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import DropDownConfig from '../config/LanguageDropDown.json';
import { useState } from 'react';

interface Props {
    setSettings:(selectedLanguage:string,selectedDateFrom:string,selectedDateTo:string)=>void
}

const SettingsBar = ({setSettings}:Props) => {

    const [userSettings,setUserSettings] = useState({
        selectedLanguage:"",
        selectedDateFrom:"",
        selectedDateTo:""
    })

    const changeSettings = (key:string,value:string)=>{
        if (value === "") {
            setUserSettings((prevState)=>({...prevState,[key]:' '}))
            return
        }
        setUserSettings((prevState)=>({...prevState,[key]:value}))
    }

    const triggerSettingsOnClose = ()=>{
        setSettings(userSettings.selectedLanguage,userSettings.selectedDateFrom,userSettings.selectedDateTo)
    }

    return (

    <Menu onClose={triggerSettingsOnClose}>

        <>

        <MenuButton height="35px" backgroundColor={"transparent"} as={IconButton} icon={<SettingsIcon />}/>

        <MenuList>
            <Box margin="0px 10px">
                <Text margin="10px 0px">News Language</Text>
                <Select 
                    id="language"
                    onChange={(e)=>changeSettings("selectedLanguage",e.target.value)}
                >
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
                    id="datefrom"
                    onChange={(e)=>changeSettings("selectedDateFrom",e.target.value)}
                />
            </Box>

            <Box margin="10px 10px">
                <Text margin="10px 0px" >Date (To)</Text>
                <Input
                    type="date"
                    id="datefrom"
                    onChange={(e)=>changeSettings("selectedDateTo",e.target.value)}
                />
            </Box>

        </MenuList>

        </>

    </Menu>
    )
}

export default SettingsBar