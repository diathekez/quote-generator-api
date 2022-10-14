import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import { useState } from 'react'
import axios from 'axios';
import { render } from '@testing-library/react';

function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      console.log(res.data.content)
      setQuote(res.data.content)
    }).catch(err =>{
      console.log(err)
    })
  }

  return (
    <div className="App">
      <header classname="">
        
      </header>
      <button onClick={getQuote}>Random Quote</button>
      {quote && <h1>{quote}</h1>}
    </div>
    
  );
}



export default App;
