import React from 'react';
import './Gameboard.css';
import GameCard from './GameCard'

const Gameboard = props => (
    <div className="board">
        {props.images.map(img =>
            <GameCard img={img.img} key={img.id}/>
        )}
    </div>
)

export default Gameboard;