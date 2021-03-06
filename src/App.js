import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import Pagination from './Pagination';
import './styles/App.css'




function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
      setLoading(true)
      let cancel
      axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p))
    })

    return () => cancel()
  },[currentPageUrl])


  function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }


  
  if(loading) return "loading..."

  return (
    <>
    <div className="pokedex">
      <PokemonList pokemon={pokemon} />
    </div>
    <div className="pagination">
      <Pagination
          gotoNextPage={nextPageUrl ? gotoNextPage: null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage: null}
        />
    </div>
    </>
  );
}

export default App;
