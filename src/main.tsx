import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ColorModeScript,ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import NewsQueryContext from './context/NewsQueryContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <NewsQueryContext>
        <App />
      </NewsQueryContext>
    </ChakraProvider>
  </React.StrictMode>,
)
