import React, { useState, Suspense, lazy } from "react";
import SearchInput from "./components/SearchInput";
// import GifCard from "./components/GifCard";
import "./App.css";
import { Button } from "@material-ui/core";

const Placholder = lazy(() => import("./components/Placeholder"));
const GifCard = lazy(() => import("./components/GifCard"));

async function query(search) {
  return await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${
      process.env.REACT_APP_API_KEY
    }`
  )
    .then(data => data.json())
    .then(res => res.data.map(gif => gif.id));
}
function App(props) {
  const [search, setSearch] = useState([]);
  return (
    <div className="App">
      <div className="App-header">
        <SearchInput
          handleChange={value => {
            query(value).then(res => {
              setSearch(res);
            });
          }}
        />
        <Suspense
          fallback={
            <p style={{color: 'black'}}>LOADING........</p>
          }
        >
          <GifCard ids={search} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
