//import React, { useState } from 'react';
import React from 'react';
//import Header from './Header';
//import Logon from './pages/Logon';
import Routes from './routes';
import './global.css'

// JSX - (JavaScritp + XML)
// Componente no React é uma função que retorna HTML; Pode ter funcionalidades JS, HTML...

function App() {
  //let counter = useState(0);
  //const [counter, setCounter] = useState(0);
  // Retorna um array com duas posições: A primeira é o valor da variavel, a segunda é uma função de atualização do valor

  //function increment() {
    //counter += 1;
    //setCounter(counter + 1);
    //console.log(counter);
  //}
  return (
    // <Header title="Semana OmniStarck" />
    // <Header>
    //   Semana OmniStarck
    // </Header>
    //<div>
      //<Header>Contador: {counter}</Header>
      //<button onClick={increment}>Incrementar</button>
    //</div>
    <Routes/>
  );
}

export default App;
