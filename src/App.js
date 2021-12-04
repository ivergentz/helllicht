import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { GlobalStyle } from './GlobalStyle'
import CompletePage from './pages/CompletePage'
import CvPage from './pages/CvPage'
import RecordPage from './pages/RecordPage'

const App = ({ toggle, isOpen }) => {
  return (
    <Router>
      <GlobalStyle />
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<CompletePage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/record" element={<RecordPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
