import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import ArticleList from './components/ArticleList'
import Footer from './components/Footer'
import { useNewsQuery } from './context/NewsQueryContext'

function App() {
  
  const newsQuery = useNewsQuery()

  return (
    <>
      <NavBar/>
      <SearchBar/>
      <ArticleList newsQuery={newsQuery}/>
      <Footer/>
    </>
  )
}

export default App
