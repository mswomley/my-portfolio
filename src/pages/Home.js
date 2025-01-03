import React from "react";
import me from './me.png'

function Home () {
    return (
        <>
        <div className="container">
            <h1 className="title"> Maggie Swomley </h1>
            <p className="about">
                    <img className="me" src={me} alt="portrait" /><br></br><br></br>
                    EDUCATION<br></br><br></br>
                    MIT xPro Coding Bootcamp, Full Stack Web Development 2024<br></br><br></br>
                    Occidental College, BA Biology, 2020<br></br><br></br>
                    LANGUAGES<br></br><br></br>
                    JavaScript, R, MATLAB<br></br><br></br>
                    STACKS<br></br><br></br>
                    MongoDB - Express - React - Node.js  (MERN)<br></br><br></br>
                    </p>
        
        </div>
        </>
         );
}

export default Home;