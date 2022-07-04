import React from 'react';

import { useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import UserContext from '../contexts/UserContext';

import { useEffect } from 'react';

import exit from '../../assets/images/exit.svg'
import addExit from '../../assets/images/add-exit.svg'
import addEntry from '../../assets/images/add-entry.svg'

import styled from 'styled-components';
import Container from '../shared/Container';

export default function Home() {

  const navigate = useNavigate();

  const { name, token, transactionsData } = useContext(UserContext);

  //const [transactionsData, setTransactionsData] = useState([]);

  //const transactions = 1;

  console.log(transactionsData);

  const balance = [
    {
      id: 0,
      newType: 'Nova saída',
      image: addEntry
    },
    {
      id: 1,
      newType: 'Nova entrada',
      image: addExit
    }
  ]

console.log(balance);

if(name === '' ) {
  navigate('/');
}

let filterValuesEntry = transactionsData.filter((e) => {
  return e.type === 'entry';
}
);

let filterValuesExit = transactionsData.filter((e) => {
  return e.type === 'exit';

});

const arrayValuesEntry = [];
const arrayValuesExit = [];

filterValuesEntry.map((e) => {
  arrayValuesEntry.push(parseFloat(e.value));               
})

filterValuesExit.map((e) => {
  arrayValuesExit.push(parseFloat(e.value));               
})

function calculeSum(num) {
  let _sum = 0;
  for(let i =0; i< num.length; i++) {
     _sum += num[i];
  }
  return _sum;
}

let amountEntry = calculeSum(arrayValuesEntry);
let amountExit = calculeSum(arrayValuesExit);

console.log(amountEntry, amountExit);

let balanceAmount = (amountEntry - amountExit); 

  return (
    <Container>
      <ContainerHome>

        <Header>
          <h2>Olá, {name}</h2>
          <Link to='/'>
          <ImgHeader src={exit} alt="Sair" />
          </Link>
        </Header>
        <ContainerRegisterTransactions>

          {transactionsData.length > 0 ?
            <ContainerValueTransactions>
              {transactionsData.reverse().map((item, index) =>

                <ValueTransactions key={index}>
                  <ValueTransactionsLeft>
                  <h6>{item.dayMonth}</h6>
                  <h5>{item.description}</h5>
                  </ValueTransactionsLeft>

                  <ValueTransactionsRight>
                  <h4>{item.value}</h4>
                  </ValueTransactionsRight>
                </ValueTransactions>

              )}

              <ContainerBalance>

                <h5>SALDO</h5>
                <h3>{balanceAmount}</h3>

              </ContainerBalance>

            </ContainerValueTransactions>
            : <p>Não há registros de entrada ou saída</p>
          }

        </ContainerRegisterTransactions>

        <Footer>

            <ButtonTransaction onClick={() => navigate('/transactions/1')}>
              <ImgFooter src={addEntry} alt="Adicionar entrada" />
              <p>Nova entrada</p>
            </ButtonTransaction>
         
            <ButtonTransaction onClick={() => navigate('/transactions/0')}>
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
  justify-content: start;
  //align-items: center;
  width: 306px;
  padding-top: 50px;
  //margin-top: 370px;
  height: 20px;
  margin: 0 auto; 

  h5 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }

  h3 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: #03AC00;

  }
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
  //margin-top: 10px;
  padding-top: 10px;
  margin-bottom: 20px;

  h6 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    width: 50px;
    color: #C6C6C6;
  }

  h5 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-left: 4px;
    width: 320px;
    line-height: 19px;
    color: #000000;
  }

  h4 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    //color: #C70000;
    //#03AC00
  }
`

const ValueTransactions = styled.div`
  width: 306px;
  //padding-top:-20px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
`
const ValueTransactionsLeft = styled.div`
  width: 250px;
  //padding-left: 10px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
`

const ValueTransactionsRight = styled.div`
  //width: 200px;
  //margin-left: 100px;
  height: 30px;
  display: flex;
  justify-content: flex-end;
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
