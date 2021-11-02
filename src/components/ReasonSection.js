import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow-down-60x100.png'
import handsup from '../images/highfive.png'
import test from '../images/iver.png'
import ButtonElement from './ButtonElement'
import LineElement from './LineElement'
import StatementElement from './StatementElement'

const statementOne = (
  <p>
    Lorem ipsum dolor sit amet consectetur,{' '}
    <b style={{ color: 'var(--orange)' }}> elit.</b> Iure amet provident
    dolorem, recusandae at laudantium nisi magni consequatur
  </p>
)

const statementTwo = <p>lasdjfh lasdfjk kljashdf</p>

const ReasonSection = () => {
  return (
    <ReasonContainer>
      <StatementElement text={statementOne} />
      <Reason>
        <h5>1. Das Team</h5>
        <ImgContainer>
          <img src={test} alt="" />
        </ImgContainer>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque id
          voluptate repudiandae libero tempora non ipsa asperiores deleniti at
          mollitia quaerat numquam corrupti perspiciatis quod, fuga obcaecati
          maiores labore amet?
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          ducimus aperiam rem. Eos autem quasi illum ab, aperiam, nisi quia
          expedita exercitationem dicta, fugit esse maiores{' '}
          <strong>ad deleniti dignissimos harum.</strong>
        </p>
      </Reason>
      <Reason>
        <h5>1. Das Team</h5>
        <ImgContainer>
          <img src={test} alt="" />
        </ImgContainer>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque id
          voluptate repudiandae libero tempora non ipsa asperiores deleniti at
          mollitia quaerat numquam corrupti perspiciatis quod, fuga obcaecati
          maiores labore amet?
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          ducimus aperiam rem. Eos autem quasi illum ab, aperiam, nisi quia
          expedita exercitationem dicta, fugit esse maiores{' '}
          <strong>ad deleniti dignissimos harum.</strong>
        </p>
      </Reason>
      <Reason>
        <h5>1. Das Team</h5>
        <ImgContainer>
          <img src={test} alt="" />
        </ImgContainer>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque id
          voluptate repudiandae libero tempora non ipsa asperiores deleniti at
          mollitia quaerat numquam corrupti perspiciatis quod, fuga obcaecati
          maiores labore amet?
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          ducimus aperiam rem. Eos autem quasi illum ab, aperiam, nisi quia
          expedita exercitationem dicta, fugit esse maiores{' '}
          <strong>ad deleniti dignissimos harum.</strong>
        </p>
      </Reason>
      <StatementElementTwo text={statementTwo} />
      <img src={handsup} alt="" />
      <img src={arrow} alt="" />
      <h3>Dann nix wie losDann nix wie losDann nix wie los</h3>
      <ButtonElement />
      <LineElement />
    </ReasonContainer>
  )
}

export default ReasonSection

const ReasonContainer = styled.section`
  display: block;
  margin: 0 auto;
  width: 85%;

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    margin-top: 3em;
    margin-bottom: 3em;
  }

  h3 {
    display: block;
    margin: 0 auto;
    color: var(--grey);
    font-size: 1.7rem;
    padding-top: 1.2rem;
    padding-bottom: 3rem;
    text-align: center;
  }
`
const Reason = styled.div`
  h5 {
    font-size: 1.7rem;
    color: var(--orange);
    margin: 0;
  }

  p {
    color: var(--grey);
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.3rem;
    margin-bottom: 5rem;
  }

  strong {
    font-weight: 700;
  }
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;
  width: 100%;

  img {
    margin: 0 auto;

    max-width: 280px;
    max-height: 250px;
    object-fit: cover;
    justify-content: center;
  }
`

const StatementElementTwo = styled(StatementElement)`
  margin-top: 0;
`
