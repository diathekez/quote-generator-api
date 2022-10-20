import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';


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
        <section className="hero is-dark is-fullheight background-color">
          <div className="hero-head">
            <header className="navbar" id="navbar-color">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item" href="https://en.wikipedia.org/wiki/The_Raven">
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
                    <a className="navbar-item" href="https://github.com/lukePeavey/quotable">
                      API
                    </a>
                    <span className="navbar-item">
                      <a className="button is-success is-inverted" href="https://github.com/diathekez/quote-generator-api">
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


        </section>

        <footer class="footer">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">
                T.H.I.N.K.
              </p>
              <br></br>
              <p className="subtitle">
                Take a few seconds to reflect on the quote above and also on what you're currently thinking. Then ask yourself the following:
              </p>
              <br></br>
              <p className="subtitle">
                Is it true?
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


          <div class="content has-text-centered">
            <p>
              <strong>© 2022 <a href="https://bryangranados.com/">Bryan Granados</a></strong>
            </p>
          </div>
        </footer>

    </div>
    
  );
}



export default App;