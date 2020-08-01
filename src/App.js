import React from 'react';

//https://www.flaticon.com/br/icone-gratis/fantasma_1673576
import logo from './ghost.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          O site ainda esta <i>em desenvolvimento</i>,
           mas em breve estara disponivel para 
           você desfrutar de muito enterterimento
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curta a pagina!
        </a>
        <input  className='input' placeholder='digite seu email, para ser notificado!'/>
        <a  className="App-link" href='https://www.freepik.com/photos/background'>Background photo created by rawpixel.com - www.freepik.com</a>
      </header>
    </div>
  );
}

export default App;
