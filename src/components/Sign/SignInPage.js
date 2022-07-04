import React from 'react';

import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react';
import axios from 'axios';

import { useContext } from "react";

import UserContext from '../contexts/UserContext';
import styled from 'styled-components';

import Container from '../shared/Container';

export default function SignInPage() {


  const { setToken, setTransactionsData } = useContext(UserContext);
  const { setName } = useContext(UserContext);

  const navigate = useNavigate(); 

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const [pageLoaded, setPageLoaded] = useState(true); 
  const [submit, setSubmit] = useState(false);


  function submitLogin (event) {
    event.preventDefault();
    setSubmit(true);

    const body = {
      email: email,
      password: password
    }

    const LOGIN_API = 'https://taigamywallet.herokuapp.com/sign-in';
    const promise = axios.post(LOGIN_API, body);

    promise.then(response => {
      //console.log(response.data)
      setToken(response.data.token);
      setName(response.data.UserName.name);
      setTransactionsData(response.data.transactionsExistsDatabase);
      //console.log(response.data.token)
      //console.log(response.data.UserName.name)
      //console.log(response.data.TransactionsExistsDatabase)
      navigate('/home');

      //console.log(response.data);
    });

    promise.catch(error => {
      alert("Usuário e/ou senha inválidos(s)!");
      setSubmit(false);
    });
  }


  return (
    <Container>
      <ContainerSignIn>

        <h1>MyWallet</h1>

        <FormLogin onSubmit={submitLogin}>

          <InputLogin
            placeholder='E-mail'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <InputLogin
            placeholder='Senha'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type='submit'>
              Entrar
          </Button>

        </FormLogin>
        
        <Link to='/sign-up'>
        <Span>Não tem uma conta? Cadastre-se!</Span>
        </Link>

      </ContainerSignIn>

    </Container>
  )
}

const ContainerSignIn = styled.article`
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

const InputLogin = styled.input`
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


const FormLogin = styled.form`
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
