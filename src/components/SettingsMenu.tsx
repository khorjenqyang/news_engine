import { Text,Box,Select, Input, Menu, MenuButton, MenuList, IconButton } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import DropDownConfig from '../config/LanguageDropDown';
import {  useNewsQuery, useUpdateNewsQuery } from '../context/NewsQueryContext';
import { useRef } from 'react';

const SettingsMenu = () => {

    const settings = useRef({
        language:"all",
        selectedDateFrom:"",
        selectedDateTo:""
    })

    const prevSettings = useRef({...settings.current})

    const newsQuery = useNewsQuery()
    const setNewsQuery = useUpdateNewsQuery()

    const triggerSettingsOnClose = ()=>{  

        if (
            settings.current.language === prevSettings.current.language &&
            settings.current.selectedDateFrom === prevSettings.current.selectedDateFrom &&
            settings.current.selectedDateTo === prevSettings.current.selectedDateTo
        ) return

        prevSettings.current.language = settings.current.language
        prevSettings.current.selectedDateFrom = settings.current.selectedDateFrom
        prevSettings.current.selectedDateTo = settings.current.selectedDateTo

        setNewsQuery({...newsQuery,
            language:settings.current.language,
            selectedDateFrom:settings.current.selectedDateFrom,
            selectedDateTo:settings.current.selectedDateTo
        })
    }

    return (
        <>
            <Menu onClose={triggerSettingsOnClose}>
                <MenuButton height="35px" backgroundColor={"transparent"} as={IconButton} icon={<SettingsIcon />}/>

                <MenuList>
                    <Box margin="0px 10px">
                        <Text margin="10px 0px">News Language</Text>
                        <Select 
                            id="language"
                            onChange={(e)=>{settings.current.language = e.target.value}}
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
                            onChange={(e)=>{settings.current.selectedDateFrom = e.target.value}}
                        />
                    </Box>

                    <Box margin="10px 10px">
                        <Text margin="10px 0px" >Date (To)</Text>
                        <Input
                            type="date"
                            id="datefrom"
                            onChange={(e)=>{settings.current.selectedDateTo = e.target.value}}
                        />
                    </Box>

                </MenuList>
            </Menu>
        </>
    )
}

export default SettingsMenu