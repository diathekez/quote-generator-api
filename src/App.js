import './App.css';
import Header from './Header'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { render } from '@testing-library/react';


// This fetches the API and grabs the info from the array
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


// Generates random quote upon page loading 
  useEffect(() => {getQuote()}, []);

  return (
    <div className="App">
        <section className="hero is-dark is-fullheight">
          <div className="hero-head">
            <header className="navbar" id="navbar-color">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    Quoth the Raven
                  </a>
                  <span className="navbar-burger" data-target="navbarMenuHeroC">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroC" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">
                      Home
                    </a>
                    <a className="navbar-item">
                      API
                    </a>
                    <a className="navbar-item">
                      About
                    </a>
                    <span className="navbar-item">
                      <a className="button is-success is-inverted">
                        <span className="icon">
                          <i className="fab fa-github"></i>
                        </span>
                        <span>Github Repo</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
            {/* The random quote shows up here */}
            <h1 className="card card-content is-centered title small-box">"{quote}"</h1>
            {/* This button generates a random quote */}
            <button className="button is-danger off-white" onClick={getQuote}>Generate Quote</button>
            </div>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">
                Please take five minutes of your time to think.
              </p>
              <br></br>
              <p className="subtitle">
                Is what I'm thinking right now true?
              </p>
              <p className="subtitle">
                Is it helpful?
              </p>
              <p className="subtitle">
                Is it inspiring?
              </p>
              <p className="subtitle">
                Is it necessary?
              </p>
              <p className="subtitle">
                Is it kind?
              </p>
            </div>
          </div>

        </section>

    </div>
    
  );
}



export default App;