import React from 'react'
import ContactSection from './components/ContactSection'
import Header from './components/Header'
import JobSection from './components/JobSection'
import Tasks from './components/Tasks'
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <JobSection />
      <Tasks />
      <ContactSection />
    </>
  )
}

export default App
