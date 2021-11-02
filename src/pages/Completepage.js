import React, { useState } from 'react'
import ContactSection from '../components/ContactSection'
import Header from '../components/Header'
import JobSection from '../components/JobSection'
import ReasonSection from '../components/ReasonSection'
import Sidebar from '../components/Sidebar'
import Tasks from '../components/Tasks'

const Completepage = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <JobSection />
      <Tasks />
      <ContactSection />
      <ReasonSection />
      <ContactSection />
    </>
  )
}

export default Completepage
