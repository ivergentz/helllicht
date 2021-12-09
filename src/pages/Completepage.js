import { React } from 'react'
import styled from 'styled-components'
import ContactSection from '../components/ContactSection'
import Insights from '../components/Insights'
import JobSection from '../components/JobSection'
import ReasonSection from '../components/ReasonSection'
import Tasks from '../components/Tasks'

const CompletePage = () => {
  return (
    <>
      <PageContainer>
        <JobSection />
        <Tasks />
        <ContactSection />
        <ReasonSection />
        <ContactSection />
        <Insights />
      </PageContainer>
    </>
  )
}

export default CompletePage

const PageContainer = styled.div`
  background: #fff;
  margin: 0 auto;
  max-width: 1100px;
  padding-top: 1.7rem;
`
