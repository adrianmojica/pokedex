import React, { useState, useEffect } from 'react';
import './styles/PokemonList.css'
import axios from 'axios';
import DetailView from './DetailView';


function PokemonList({pokemon}) {

    const [viewPokemon, setViewPokemon] = useState([])
    const [pokemonInfo, setPokemonInfo] = useState([])
    const [pokeImage, setPokemonImage] = useState([])
    const [pokeType, setPokemonType] = useState([])
    
    useEffect (()=> {
        let cancel;
        let url = viewPokemon;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPokemonInfo(data)
            setPokemonImage(data.sprites.front_default)
            setPokemonType(data.types[0].type.name)
        })
        .catch(err => console.log(err));
    });
    
    return (
        <>
        <div>
            {pokemon.map(p=>(
                <div key={p.name}><button onClick={() => setViewPokemon(p.url)} className="poke-cell">{p.name}</button></div>
            ))}
        </div>
        <DetailView pokemonInfo={pokemonInfo} sprite={pokeImage} type={pokeType}/>
        </>
    );
}

export default PokemonList;
