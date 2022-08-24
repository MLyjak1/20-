import React from 'react';
import Card from '../components/Card';

const divStyles = {
    display: 'flex',
    justifyContent: 'space-around',

}

const Portfolio= () => {
    const projectArray = [
        {
            id: 1,
            name: 'PW Gen',
            desc: 'fdsafdsafd',
            tech: ['JS', 'HTML', 'CSS', 'JSON'],
            img: require('../imgs/logo192.png'),
            getLink: '',
            deployLink: ''
        },
        {
            id: 2,
            name: 'other1 Gen',
            desc: 'fdsafdsafd',
            tech: ['JS', 'HTML', 'CSS', 'JSON'],
            img: '',
            getLink: '',
            deployLink: ''
        },
        {
            id: 3,
            name: 'that Gen',
            desc: 'fdsafdsafd',
            tech: ['JS', 'HTML', 'CSS', 'JSON'],
            img: '',
            getLink: '',
            deployLink: ''
        },
        {
            id: 4,
            name: 'fdsahtreah Gen',
            desc: 'fdsafdsafd',
            tech: ['JS', 'HTML', 'CSS', 'JSON'],
            img: '',
            getLink: '',
            deployLink: ''
        },

    ]
    return (
        <div>
            <h1>My Project Cards</h1>
            <div style={divStyles}>
                {projectArray.map(({id, name, desc, img}) => {
                    return <Card key={id} name={name} desc={desc} img={img}/>
                })};
            </div>
        </div>
    )
};

export default Portfolio;