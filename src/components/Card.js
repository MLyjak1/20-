import React from 'react';



const Card = ({ id, name, desc, img }) => {
    return (
        <div className="card" style={{height: '20em', width: '20em'}}>
            <img className="img-card-top" variant="top" src={img} alt={name} height="230em"/>
            <h3 className="card-title">{name}</h3>
            <h4 className="mb-2 text-muted">{desc}</h4>          
        </div>
    )
};

export default Card;