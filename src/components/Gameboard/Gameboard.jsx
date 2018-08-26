import React from 'react';
import './Gameboard.css';
import GameCard from './GameCard'

const Gameboard = props => (
    <div className="conatiner">
        <div className="row justify-content-center">
            {props.images.map(img =>
                <GameCard img={img.img} key={img.id} />
            )}
        </div>
    </div>
)

export default Gameboard;