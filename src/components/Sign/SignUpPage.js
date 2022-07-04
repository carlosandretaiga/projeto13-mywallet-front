import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import Container from '../shared/Container';

export default function SignUpPage() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [pageLoaded, setPageLoaded] = useState(true);

  function signUpForm(event) {
    event.preventDefault();
    setPageLoaded(false);

    const body = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }

    const SIGN_UP_API = 'https://taigamywallet.herokuapp.com/sign-up';
    //const SIGN_UP_API = 'http://localhost:5009/sign-up';
    //https://taigamywallet.herokuapp.com/sign-up

    const promise = axios.post(SIGN_UP_API, body);
    promise
    .then(response => {
      navigate('/')
      console.log(response.data);
    })
    .catch(error => {
      alert('Cadastro inválido! Por favor verifique seus dados.');
      setPageLoaded(true);
    })
  }

  return (
    <Container>
      <ContainerSignUp>

        <h1>MyWallet</h1>

        <Form onSubmit={(event) => 
        signUpForm(event)}>

          <Input
            placeholder='Nome'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required maxlength="30"
            autoComplete='on'
          />

          <Input
            placeholder='E-mail'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='on'
          />

          <Input
            placeholder='Senha'
            type='password'
            value={password}    
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            placeholder='Confirme a senha'
            type='password'
            value={confirmPassword}    
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button type='submit'>
            Cadastrar
          </Button>

        </Form>
        <Link to='/'>
        <Span>Já tem uma conta? Entre agora!</Span>
        </Link>

      </ContainerSignUp>

    </Container>
  )
}

const ContainerSignUp = styled.article`
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

    margin-top: 89px;

    color: #FFFFFF;
    //font-family: 'Raleway', sans-serif;
  }
`

const Input = styled.input`
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 16px;
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


    a { 
        text-decoration: none;
        color: var(--white);
    }

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