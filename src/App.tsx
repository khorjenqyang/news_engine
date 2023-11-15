import './App.css'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import ArticleList from './components/ArticleList'

function App() {
 
  const [searchKeyWord,setSearchKeyWord] = useState("")

  const onSearch = (inputSearchKeyWord:string)=>{
    setSearchKeyWord(inputSearchKeyWord)
  } 

  return (
    <>
      <NavBar/>
      <SearchBar onClick={onSearch}/>
      <ArticleList searchKeyWord={searchKeyWord}/>
    </>
  )
}

export default App
