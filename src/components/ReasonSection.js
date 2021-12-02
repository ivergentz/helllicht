import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow-down-60x100.png'
import { default as handsup, default as test2 } from '../images/highfive.png'
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

const statementTwo = (
  <p>
    lasdjfh lasdfjk kljashdf lasdjfh lasdfjk kljashdfasdjfh lasdfjk kljashdf
    lasdjfh lasdfjk kljashdf
  </p>
)

const buttontext = 'ich bewerbe mich  ✍️'

const ReasonSection = () => {
  return (
    <ReasonContainer>
      <TopStatement className="maxwidth" text={statementOne} />
      <ContentContainer>
        <Reason>
          <h5>1. Das Team</h5>
          <RowReverse>
            <ImgContainer>
              <img className="width" src={test} alt="" />
            </ImgContainer>
            <p className="width">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque id
              voluptate repudiandae libero tempora non ipsa asperiores deleniti
              at mollitia quaerat numquam corrupti perspiciatis quod, fuga
              obcaecati maiores labore amet?
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae ducimus aperiam rem. Eos autem quasi illum ab,
              aperiam, nisi quia expedita exercitationem dicta, fugit esse
              maiores <strong>ad deleniti dignissimos harum.</strong>
            </p>
          </RowReverse>
        </Reason>
        <Reason>
          <h5>1. Das Team</h5>
          <RowReverse>
            <ImgContainer>
              <img className="width" src={test2} alt="" />
            </ImgContainer>
            <p className="width">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque id
              voluptate repudiandae libero tempora non ipsa asperiores deleniti
              at mollitia quaerat numquam corrupti perspiciatis quod, fuga
              obcaecati maiores labore amet?
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae ducimus aperiam rem. Eos autem quasi illum ab,
              aperiam, nisi quia expedita exercitationem dicta, fugit esse
              maiores <strong>ad deleniti dignissimos harum.</strong>
            </p>
          </RowReverse>
        </Reason>
        <Reason>
          <h5>1. Das Team</h5>
          <RowReverse>
            <ImgContainer>
              <img src={test} alt="" />
            </ImgContainer>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque id
              voluptate repudiandae libero tempora non ipsa asperiores deleniti
              at mollitia quaerat numquam corrupti perspiciatis quod, fuga
              obcaecati maiores labore amet?
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae ducimus aperiam rem. Eos autem quasi illum ab,
              aperiam, nisi quia expedita exercitationem dicta, fugit esse
              maiores <strong>ad deleniti dignissimos harum.</strong>
            </p>
          </RowReverse>
        </Reason>
      </ContentContainer>
      <StatementElementTwo text={statementTwo} />
      <img src={handsup} alt="" />
      <img src={arrow} alt="" />
      <h3>Dann nix wie losDann nix wie losDann los</h3>
      <ButtonElement buttonText={buttontext} />
      <LineElement />
    </ReasonContainer>
  )
}

export default ReasonSection

const ReasonContainer = styled.section`
  display: block;
  margin: 0 auto;
  width: 95%;
  background: #fff;

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
    width: 50%;
    margin: 0 auto;
    color: var(--grey);
    font-size: 2rem;
    padding-top: 1.2rem;
    padding-bottom: 3rem;
    text-align: center;
  }

  .maxwidth {
    @media (min-width: 800px) {
      margin: 0 auto;
      max-width: 750px;
    }
  }
`

const ContentContainer = styled.div`
  @media (min-width: 800px) {
    max-width: 1100px;
  }
`
const Reason = styled.div`
  h5 {
    font-size: 2rem;
    color: var(--orange);
    margin: 0;
  }

  .width {
    @media (min-width: 800px) {
      max-width: 60%;
    }
  }

  p {
    color: var(--grey);
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.7rem;
    margin-bottom: 5rem;
  }

  strong {
    font-weight: 700;
  }
`
const RowReverse = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row-reverse;
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
  font-size: 2rem;
  @media (min-width: 800px) {
    max-width: 750px;
    margin: 0 auto;
  }
`

const TopStatement = styled(StatementElement)`
  margin: 10rem 0;
  font-size: 2rem;
`
