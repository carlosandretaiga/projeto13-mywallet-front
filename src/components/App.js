import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import UserContext from './contexts/UserContext';

import { GlobalStyle } from '../styles/global';
import SignInPage from './Sign/SignInPage';
import SignUpPage from './Sign/SignUpPage';
import Home from './Home/Home';
import TransactionsPage from './Transactions/Transactions';

export default function App( ) {

  const [token, setToken] = useState(''); 
  const [name, setName] = useState('');
  const [transactionsData, setTransactionsData] = useState({});

  return (
    <UserContext.Provider 
    value={{ token, setToken, name, setName, transactionsData, setTransactionsData }}>
    <BrowserRouter>
                <Routes>
                <Route path='/' element={<SignInPage />}/>
                <Route path='/sign-up' element={<SignUpPage />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/transactions/:transId' element={<TransactionsPage />}/>
                </Routes>

            <GlobalStyle />
        </BrowserRouter>
    </UserContext.Provider>
  )
}