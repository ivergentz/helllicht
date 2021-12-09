import React, { useState } from 'react'
import styled from 'styled-components'

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({
    userName: '',
    password: '',
  })

  const submitHandler = e => {
    e.preventDefault()
    Login(details)
  }

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <FormInner>
          <Error>Login</Error>
          {error !== '' ? <div>{error}</div> : ''}
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              name="name"
              id="name"
              onChange={e =>
                setDetails({ ...details, userName: e.target.value })
              }
              value={details.userName}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={e =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </FormGroup>
          <Input type="submit" value="Login" />
        </FormInner>
      </Form>
    </Container>
  )
}

export default LoginForm

const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  display: blocck;
  position: relative;

  :after {
    content: '';
    position: absolute;
    top: -2rem;
    left: -2rem;
    right: -2rem;
    bottom: -2rem;
    z-index: 1;
    border: 1rem solid var(--orange);
  }
`
const FormInner = styled.div`
  position: relative;
  display: block;
  /* background: #fff; */
  padding: 1rem;
  z-index: 2;

  input[type='submit'] {
    display: inline-block;
    padding: 1rem;
    background: var(--orange);
    border-radius: 0;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: 0.4s;

    :hover {
      color: var(--blue);
    }
  }
`
const Error = styled.h2`
  color: var(--blue);
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 30px;
`
const FormGroup = styled.div`
  display: block;
  color: var(--blue);
  width: 300px;
  margin-bottom: 50px;

  &:focus-within label {
    color: var(--orange);
  }
`

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: var(--bggrey);
  border: 0;

  &:focus {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`

const Label = styled.label`
  display: block;
  color: var(--blue);
  font-size: 12px;
  margin-bottom: 5px;
`
