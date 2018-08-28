import React from "react";
import "./GameCard.css";

const GameCard = props => (
    <div className="col-xs-5 col-md-3 my-2">
        <img src={props.image} style={{height:'175px', minWidth:'175px'}} alt="Sphynx" className="img-thumbnail" onClick={() => props.clickHandler(props.catId)}/>
    </div>
)

export default GameCard;