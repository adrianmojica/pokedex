import React from 'react';
import './styles/DetailView.css';

const DetailView = ({pokemonInfo, sprite, type}) => {
const { id, name } = pokemonInfo;
  return (
    <section className="detail-view">
    <img src={sprite} className='sprite-image' alt="sprite"/>
    <div className='data-wrapper'>
      <h1 className='data-name'>ID: {id} {name} </h1>
  <p className="data-char">Type: {type}</p>
    </div>
  </section>
  )
}

export default DetailView;