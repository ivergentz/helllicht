import React, { useState } from 'react'
import styled from 'styled-components'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Insights from '../components/Insights'
import JobSection from '../components/JobSection'
import ReasonSection from '../components/ReasonSection'
import Sidebar from '../components/Sidebar'
import Tasks from '../components/Tasks'

const Completepage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <PageContainer>
        <JobSection />
        <Tasks />
        <ContactSection />
        <ReasonSection />
        <ContactSection />
        <Insights />
      </PageContainer>
      <Footer />
    </>
  )
}

export default Completepage

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`
