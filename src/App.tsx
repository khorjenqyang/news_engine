import { useState } from 'react'
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import ArticleList from './components/ArticleList'

function App() {
 
  const [selectedSearchWord,setSelectedSearchWord] = useState("")
  const [selectedLanguage,setSelectedLanguage] = useState("")
  const [selectedDateFrom,setSelectedDateFrom] = useState("")
  const [selectedDateTo,setselectedDateTo] = useState("")

  const onSearch = (inputSearchKeyWord:string)=>{
    setSelectedSearchWord(inputSearchKeyWord)
  } 

  return (
    <>
      <NavBar/>
      <SearchBar onSearchKeyWord={onSearch}/>
      <ArticleList 
        searchKeyWord={selectedSearchWord}
        selectedLanguage={selectedLanguage}
        selectedDateFrom={selectedDateFrom}
        selectedDateTo={selectedDateTo}
      />
    </>
  )
}

export default App
