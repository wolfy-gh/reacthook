import React from 'react';
import './App.css';
import List from './components/Movielist'
import Filter from './components/filter'
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <div className="header">
        <h3>Movie App</h3>
        <Filter />
        <span></span>
      </div>
      <Container className="container">
        <List />
      </Container>
    </div>
  );
}

export default App;
