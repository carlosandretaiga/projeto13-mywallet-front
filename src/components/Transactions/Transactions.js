import React, { useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { useContext } from "react";
import UserContext from '../contexts/UserContext';

import { useParams } from 'react-router-dom';

import Container from '../shared/Container';

export default function TransactionsPage() {

  const {transId} = useParams(); 
  const navigate = useNavigate(); 

  console.log(typeof transId);

  const { token, setTransactionsData } = useContext(UserContext);

  const [nameTransaction, setNameTransaction] = useState('entrada');

  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

//parseFloat('0').toFixed(2)

useEffect(() => {

  if(transId === '0') {
    setNameTransaction('saída');
    setType('exit');
  } else {
    setNameTransaction('entrada');
    setType('entry');
  }
}, [token])

function isNumeric(_value) {
  return /^-?\d+$/.test(_value);
}


function submitForm(event) {
  event.preventDefault();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
  },
};

//Verificando se o value é um valor numerico
if( isNumeric(value) === false) {
  return alert("Digite um valor numérico!");
}

  const data =   {
    type: type,
    value: value,
    description: description
  }

  console.log(data);

  const API = 'https://taigamywallet.herokuapp.com/transactions';

  const promise = axios.post(API, data, config);
  promise.then((response) => {
    setTransactionsData(response.data);
    console.log(response.data);
    navigate('/home');
  });
  promise.catch((error) => {
    alert("Enivo de dados não realizado. Revise-os!")
  })

}

console.log(parseFloat(value).toFixed(2))

console.log(nameTransaction);

  return (
    <Container>
      <ContainerTransaction>

      <Header>
        <h2>Nova {nameTransaction}</h2>
        </Header>

        <Form>

          <Input
            placeholder='Valor'
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />

          <Input
            placeholder='Descrição'
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <Button type='submit' onClick={submitForm}>
              Salvar {nameTransaction}
          </Button>

        </Form>
      

      </ContainerTransaction>

    </Container>
  )
}

const Header = styled.header`
  margin-top: 25px;
  width: 326px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ContainerTransaction = styled.article`
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
`

const Input = styled.input`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 24px; 
        width: 326px;
        height: 58px;
        padding: 0 0.9rem;
        background-color: var(--white);
        border: 1px solid var(--white);
        border-radius: 5px;
        
    &::placeholder {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
    }

    & + input {
        margin-top: 1rem; 
    }

`


const Form = styled.form`
  margin: 0 auto; 
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
    margin: 0 auto; 
    cursor: pointer;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
    width: 326px;
    height: 46px;

    background: var(--background-buttons);
    border-radius: 8px;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: var(--white);
`

const Span = styled.div`
    padding-top: 10px;
    cursor: pointer;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    //text-decoration-line: underline;
    color: var(--white);
`
