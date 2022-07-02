import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '../styles/global';
import SignInPage from './Sign/SignInPage';
import SignUpPage from './Sign/SignUpPage';

export default function App( ) {

  return (
    <BrowserRouter>
                <Routes>
                <Route path='/' element={<SignInPage />}/>
                <Route path='/sign-up' element={<SignUpPage />}/>
                </Routes>

            <GlobalStyle />
        </BrowserRouter>
  )
}