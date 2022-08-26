import React from 'react';
import flightBanner from '../imgs/flightBanner.jpg';
const style = {
    divStyle:{
    width: "100%",
    display: "flex",
    height: "80vh"
    },
    footStyle:{
        width: "100%",
        textAlign: "center",

    }
}
const Home = () => {
    return (
        <div>
            <header className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-2">Matthew Lyjak: Full-Stack Web Developer</h1>

                </div>
            </header>
            <div className="homePic" style = {style.divStyle}>
            <img src={flightBanner} alt="Flight Bann" width="1000px" style={{margin:"0 auto"}}/>
            </div>
            <footer style={style.footStyle}>123-456-7890<br></br>fdsa@gmail.com</footer>
        </div>
    )
};

export default Home;