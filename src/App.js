import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import styled, { ThemeConsumer } from 'styled-components';
import Characters from './components/Character';

const App = () => {
  const [star, setStar] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  axios.get('https://swapi.dev/api/people')
  .then(res => {
    console.log('11',res);
    console.log(res.data);
    setStar(res.data);
  })
  .catch(err => {
    console.error(err);
  })


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {star.map(data => {
        return (<Characters data={data}/>)
      })}
    </div>
  );
}

export default App;
