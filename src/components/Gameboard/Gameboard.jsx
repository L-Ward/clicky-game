import React from 'react';
import './Gameboard.css';
import GameCard from './GameCard'

const Gameboard = (props) => {
    console.log(props);
    let classNames = props.incorrect ? 'container incorrect' : 'container';
    return (
        <div className={classNames}>
            <div className='row justify-content-center'>
                {props.images.map((img) => (<GameCard image={img.img} key={img.id} catId={img.id} clickHandler={props.clickHandler} />))}
            </div>
        </div>
    )
};

export default Gameboard;