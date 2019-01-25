import React, { useState, useEffect } from 'react';
import SearchInput from './components/SearchInput'
import GifCard from './components/GifCard'
import './App.css';

function query(search) {
  const query = fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.REACT_APP_API_KEY}`)
  query.then(data => data.json()).then(res => console.log(res))
  return search
}
function App(props) {
  const [search, setSearch] = useState('')
    return (
      <div className="App">
        <div className="App-header">
          <SearchInput
          handleChange={ (value) => {
            setSearch(value)
          } } />
          <p>
            {query(search)}
          </p>
          <GifCard />
        </div>
      </div>
    );
  }

export default App;
