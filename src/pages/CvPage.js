import { React, useState } from 'react'
import styled from 'styled-components'
import PdfPage from '../components/PdfPage'
import cv from '../media/pdf/cv.pdf'
import LoginForm from './LoginForm'

const CvPage = () => {
  const adminUser = {
    userName: 'helllicht',
    password: 'igcv',
  }

  const [user, setUser] = useState({ userName: '' })
  const [error, setError] = useState('')

  const Login = details => {
    console.log(details)

    console.log(details.userName, adminUser.userName)

    if (
      details.userName === adminUser.userName &&
      details.password === adminUser.password
    ) {
      console.log('Logged in')
      setUser({ userName: details.userName })
    } else if (details.userName !== adminUser.userName) {
      setError('Wrong Name!')
    } else if (details.password !== adminUser.password) {
      setError('Wrong password!')
      console.log(details.password)
    }
    // else if (details.name === '') {
    //   setError('Please type in a Name')//
    else {
      setError('Please type in the correct login information!')
    }
  }

  const Logout = () => setUser({ userName: '' })

  return (
    <>
      <Container>
        {user.userName !== '' ? (
          <PdfPage pdf={cv} Logout={Logout} />
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </Container>
    </>
  )
}

export default CvPage

const Container = styled.section`
  display: flex;
  background: #fff;
  max-width: 1100px;
  padding-top: 9rem;
  justify-content: center;
  margin: 0 auto;
`
