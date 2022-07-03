import React from 'react';

import { Link, useNavigate } from "react-router-dom";

import exit from '../../assets/images/exit.svg'
import addExit from '../../assets/images/add-exit.svg'
import addEntry from '../../assets/images/add-entry.svg'


import styled from 'styled-components';

import Container from '../shared/Container';

export default function Home() {

  const transactions = 1;

  return (
    <Container>
      <ContainerHome>

        <Header>
        <h2>Olá, Fulano</h2>
        <ImgHeader src={exit} alt="Sair" />
        </Header>
        <ContainerRegisterTransactions>

          {transactions > 0 ?
          <ContainerValueTransactions>

            <ValueTransactions>
              <p>03/11</p> 
              <p>Almoço</p>
              <p>39,90</p>
            </ValueTransactions>

            <ValueTransactions>
              <p>03/11</p> 
              <p>Almoço</p>
              <p>39,90</p>
            </ValueTransactions>
            <ValueTransactions>
              <p>03/11</p> 
              <p>Almoço</p>
              <p>39,90</p>
            </ValueTransactions>
            <ValueTransactions>
              <p>03/11</p> 
              <p>Almoço</p>
              <p>39,90</p>
            </ValueTransactions>

            <ValueTransactions>
              <p>03/11</p> 
              <p>Almoço</p>
              <p>39,90</p>
            </ValueTransactions>

            <ValueTransactions>
              <p>03/11</p> 
              <p>Almoço</p>
              <p>39,90</p>
            </ValueTransactions>

            <ValueTransactions>
              <p>03/11</p> 
              <p>Almoço</p>
              <p>39,90</p>
            </ValueTransactions>

            <ValueTransactions>
              <p>03/11</p> 
              <p>Almoço</p>
              <p>39,90</p>
            </ValueTransactions>

            <ValueTransactions>
              <p>03/11</p> 
              <p>Almoço</p>
              <p>39,90</p>
            </ValueTransactions>

            <ValueTransactions>
              <p>03/11</p> 
              <p>Almoço</p>
              <p>39,90</p>
            </ValueTransactions>
         
            
  

            <ContainerBalance>

              <p><strong>Saldo</strong></p>
              <p>2890,80</p>

            </ContainerBalance>

          </ContainerValueTransactions>
          : <p>Não há registros de entrada ou saída</p>
          }

        </ContainerRegisterTransactions>

        <Footer>

          <ButtonTransaction>
          <ImgFooter src={addEntry} alt="Adicionar entrada" />

            <p>Nova entrada</p>
          </ButtonTransaction>

          <ButtonTransaction>
          <ImgFooter src={addExit} alt="Adicionar saída" />
          <p>Nova saída</p>
          </ButtonTransaction>

        </Footer>

      </ContainerHome>

    </Container>
  )
}

const ContainerBalance = styled.section`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 306px;
  //margin-top: 270px;
  height: 20px;
  margin: 0 auto; 
`

const ContainerScroll = styled.div`

flex-direction: colum;
justify-content: center;
align-items: center;
//padding-top: -20px;
//width: 316px;
  //height: 320px;
  //margin: 0 auto; 
   //scrollbar-width: 320px;
   //-ms-overflow-style: none;
   //overflow:scroll;
`

const ContainerValueTransactions = styled.section`
  position: relative;
  scrollbar-width: none;
    -ms-overflow-style: none;
    overflow:scroll;

    ::-webkit-scrollbar {
    display: none;
    }
  width: 306px;
  height: 360px;
  margin: 0 auto; 
`

const ValueTransactions = styled.div`
  width: 306px;
  //padding-top:-20px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: top;
` 

const Footer = styled.footer` 
    width: 326px;
    height: 160px;
    margin: 0 auto; 

    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
   
    position: fixed;
    bottom: 12px;
    left: 0;
    right: 0;
    z-index: 2;
`

const Header = styled.header`
  margin-top: 25px;
  width: 326px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContainerRegisterTransactions = styled.section`
  margin-top: 20px;
  width: 326px;
  height: 426px;
  background-color: #FFFFFF;
  border-radius: 5px;

  p {
    margin: 0 auto;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;

    width: 180px;

   padding-top: 188px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

`

const ImgHeader = styled.img`

`

const ImgFooter = styled.img`
margin-bottom: 30px;
`

const ContainerHome = styled.article`
  width: 326px;
  margin: 0 auto; 
  h1 {
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 159px;

    color: #FFFFFF;
    //font-family: 'Raleway', sans-serif;
  }

  h2 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    /* identical to box height */
    color: #FFFFFF;
  }
`

const ButtonTransaction = styled.button`
    margin: 0 auto; 
    cursor: pointer;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 0 0.8rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
    width: 155px;
    height: 114px;

    p {
      //display: flex;
      width: 64px;
      //justify-content: start;
    //align-items: left;
    //padding-left: 5px;
    text-align: left;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;

    color: var(--white);
    }

    background: var(--background-buttons);
    border-radius: 5px;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`
