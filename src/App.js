import React,{useState} from 'react';
import './App.css';
import List from './components/list/Movielist'
import Filter from './components/filter/Filter'
import { Container } from 'react-bootstrap';
import Add from './components/add/Add'
import MovieData from './data'


function App() {
  
  const [movies, setMovies] = useState(MovieData)
  function AddMovie(newMovie) {
    setMovies(prevMovies => {
      return [...prevMovies, newMovie]
    })
  }
  const [search, setSearch]= useState("")
  const [rateSearch , setRateSearch] = useState("")

  return (
    <div className="App">
      <div className="header">
        <h3>Movie App</h3>
        <div className="add">
          <Add onAdd={AddMovie} />
        </div>
        <Filter setSearch={setSearch} setRateSearch={setRateSearch}/>
        <span></span>
      </div>
      <Container className="container">
        <List movies={movies} search={search} rateSearch={rateSearch} />
      </Container>
    

    </div>
  );
}

export default App;
