import React from 'react';
import './App.css';
import { FormColaborador } from './components/FormColaborador';
import { ListagemColaborador } from './components/ListagemColaborador';

function App() {
  return (
    <div className="App">
      <FormColaborador/>
      <ListagemColaborador/>
    </div>
  );
}

export default App;
