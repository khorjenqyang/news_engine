import { useState } from 'react'
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import ArticleList from './components/ArticleList'
import Footer from './components/Footer'

function App() {
 
  const [selectedSearchWord,setSelectedSearchWord] = useState("")
  const [selectedLanguage,setSelectedLanguage] = useState("")
  const [selectedDateFrom,setSelectedDateFrom] = useState("")
  const [selectedDateTo,setselectedDateTo] = useState("")

  const onSearch = (inputSearchKeyWord:string)=>{
    setSelectedSearchWord(inputSearchKeyWord)
  } 

  const setSettings = (selectedLanguage:string,selectedDateFrom:string,selectedDateTo:string)=>{
    selectedLanguage && setSelectedLanguage(selectedLanguage),
    selectedDateFrom && setSelectedDateFrom(selectedDateFrom),
    selectedDateTo && setselectedDateTo(selectedDateTo)
  }

  return (
    <>
      <NavBar setSettings={setSettings}/>
      <SearchBar 
        onSearchKeyWord={onSearch}
      />
      <ArticleList 
        searchKeyWord={selectedSearchWord}
        selectedLanguage={selectedLanguage}
        selectedDateFrom={selectedDateFrom}
        selectedDateTo={selectedDateTo}
      />
      <Footer/>
    </>
  )
}

export default App
