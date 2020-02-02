import React, { useState, useEffect } from 'react';
import './styles/PokemonList.css'
import axios from 'axios';
import DetailView from './DetailView';


function PokemonList({pokemon}) {

    const [viewPokemon, setViewPokemon] = useState([])
    const [pokemonInfo, setPokemonInfo] = useState([])
    const [pokeImage, setPokemonImage] = useState([])
    const [pokeType, setPokemonType] = useState([])
    const [pokeKlas, setPokemonKlas] = useState([])
    
    useEffect (()=> {
        let cancel;
        let url = viewPokemon;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPokemonInfo(data)
            setPokemonImage(data.sprites.front_default)
            setPokemonType(data.types[0].type.name)
            setPokemonKlas('animated bounceIn')
        })
        .catch(err => console.log(err));
    });
    
    return (
        <>
        <div className="column">
            <div className="grid-container">
                {pokemon.map(p=>(
                <div className="grid-item" key={p.name}><button className="pokecell" onClick={() => setViewPokemon(p.url)} className="poke-cell">{p.name}</button></div>
            ))}
            </div>
            
        </div>
        <div className="column">
            <DetailView pokemonInfo={pokemonInfo} sprite={pokeImage} type={pokeType} klas={pokeKlas}/>
        </div>
        </>
    );
}

export default PokemonList;
