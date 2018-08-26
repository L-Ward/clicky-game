import React from "react";
import "./GameCard.css";

const GameCard = props => (
    <div className="col-2 m-4">
        <img src={props.img} alt="Sphynx" className="img-thumbnail" />
    </div>
)

export default GameCard;