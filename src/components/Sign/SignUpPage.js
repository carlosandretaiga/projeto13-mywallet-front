import React from 'react';
import { Link, Route, useNavigate } from "react-router-dom";

import styled from 'styled-components';

import Container from '../shared/Container';

export default function SignUpPage() {

  return (
    <Container>
      <ContainerSignUp>

        <h1>MyWallet</h1>

        <Form >

          <Input
            placeholder='Nome'
            type='text'
          />

          <Input
            placeholder='E-mail'
            type='text'
          />

          <Input
            placeholder='Senha'
            type='password'
          />

          <Input
            placeholder='Confirme a senha'
            type='password'
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