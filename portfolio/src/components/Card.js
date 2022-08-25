import React from 'react';

const divStyles = {
    display: 'flex',
    alignItems: 'center',
}

const Card = ({ id, name, desc, img }) => {
    return (
        <div className="card" style={{width: '20em', divStyles}}>
            <img className="img-card-top" variant="top" src={img} alt={name}/>
            <h3 className="card-title">{name}</h3>
            <h4 className="mb-2 text-muted">{desc}</h4>          
        </div>
    )
};

export default Card;