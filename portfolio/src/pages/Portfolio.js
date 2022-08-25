import React from 'react';
import Card from '../components/Card';

const divStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'Orange',
}

const Portfolio= () => {
    const projectArray = [
        {
            id: 1,
            name: 'PW Gen',
            desc: 'a Random Password Generator',
            tech: ['JS', 'HTML', 'CSS', 'JSON'],
            img: require('../imgs/Screenshot.jpg'),
            gitLink: 'https://github.com/MLyjak1/Challenge_3',
            deployLink: 'https://mlyjak1.github.io/Challenge_3/'
        },
        {
            id: 2,
            name: 'Planner',
            desc: 'A Daily Schedule Maker',
            tech: ['JS', 'HTML', 'CSS', 'JSON'],
            img: require('../imgs/Scheduler.png'),
            gitLink: 'https://github.com/MLyjak1/Work_Daily_Planner',
            deployLink: 'https://MLyjak1.github.io/Work_Daily_Planner/'
        },
        {
            id: 3,
            name: 'Note Taker',
            desc: 'A Note Taking site',
            tech: ['JS', 'HTML', 'CSS', 'JSON'],
            img: require('../imgs/Note-Taker.png'),
            gitLink: 'https://github.com/MLyjak1/11-Notebook',
            deployLink: 'https://mlyjak1.github.io/11-Notebook/'
        },
        {
            id: 4,
            name: 'Concert Finder',
            desc: 'Easily find concerts in any city',
            tech: ['JS', 'HTML', 'CSS', 'JSON'],
            img: require('../imgs/G-10 Screenshot Map.png'),
            gitLink: 'https://github.com/MLyjak1/G-10_Musical_Chairs',
            deployLink: 'https://mLyjak1.github.io/G-10_Musical_Chairs/'
        },
        {
            id: 5,
            name: '360 Degree',
            desc: 'Rate your College Degree',
            tech: ['JS', 'HTML', 'CSS', 'JSON'],
            img: require('../imgs/360deg screenshot.png'),
            gitLink: 'https://github.com/MLyjak1/360_Degrees',
            deployLink: 'https://threesixtydegrees.herokuapp.com/'
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