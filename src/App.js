import React, { Component } from 'react';
import './App.css';
import './converter/converter.css';
import Converter from "./converter/Converter";

class App extends Component {

  render(){
  return (
    <div className="App"> 
      <Converter moedaA="USD" moedaB ="AOA"></Converter>
      <Converter moedaA="AOA" moedaB ="USD"></Converter>
    </div>
  );
}
}

export default App;
