import React from 'react'
import Header from './components/Header'
import JobSection from './components/JobSection'
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <JobSection />
    </>
  )
}

export default App
