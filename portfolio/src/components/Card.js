import React from 'react';

const Card = ({ id, name, desc, img }) => {
    return (
        <div className="card" style={{width: '10em'}}>
            <img className="img-card-top" src={img} alt={name}/>
            <h3>{name}</h3>
        </div>
    )
};

export default Card;