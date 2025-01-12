import React from "react";
import scribble from './scribble.png'
import arrows from './arrows.png'

function Home () {
    return (
        <>
        <div className="parent">
            <p className="left">
                    <div className="maggietitle"><p1>MAGGIE SWOMLEY</p1></div><br></br><br></br><br></br><br></br>
                    <img className="scribble" src={scribble}></img>
                    </p>
                    <p6 className="right">
                    <div className="container">
            <p className="right">
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <p className="bio">
                    EDUCATION<br></br><br></br>
                    MIT xPro Coding Bootcamp, Full Stack Web Development, 2024<br></br><br></br>
                    Occidental College, BA Biology, 2020<br></br><br></br>
                    CONTACT<br></br><br></br>
                    maggieswomley18@gmail.com<br></br><br></br>
                    <a className="link" href="https://www.linkedin.com/in/margaret-s-5427491a2/">LinkedIn</a>
                 </p>
                    </p>
        
        </div>
                    </p6>
        
        </div>
        </>
         );
}

export default Home;