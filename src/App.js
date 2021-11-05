import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled, { ThemeConsumer } from 'styled-components';
import Characters from './components/Character';

const StyledH1 = styled.h1`
  font-size:50px;
  color: #B6C311;
`
const StyledApp = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  const [star, setStar] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
  .then(res => {
    console.log(res)
    setStar(res.data);
  })
  .catch(err => {
    console.error(err);
  })
  },[])
  


  return (
    <StyledApp className="App">
      <StyledH1 className="Header">Characters</StyledH1>
      {star.map(data => {
        return (<Characters data={data} key={data.mass}/>)
      })}
    </StyledApp>
  );
}

export default App;
