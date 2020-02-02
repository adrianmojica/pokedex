import React from 'react';
import './styles/DetailView.css';

const DetailView = ({pokemonInfo, sprite, type, klas}) => {
const { id, name } = pokemonInfo;
console.log("here",sprite);
if (sprite == "") {
  sprite = "pokeball.gif"
} 
  return (
    <div className="detail-view">
      <div className="frame">
        <div className="imageFrame">
          <div className={klas}>
          <img src={sprite} className='sprite-image' alt="sprite"/>
          </div>
          
        </div>
        <div className='data-wrapper'>
          <div className="content animated">
            <div className="data-id">Pokemon # {id}</div>
            <div className='data-name'>Name: {name} </div>
            <div className="data-char">Type: {type}</div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default DetailView;