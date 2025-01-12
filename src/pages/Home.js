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
                    <img className="scribble" src={arrows}></img><br></br>
                    WEB DEVELOPER<br></br>
                    </p6>
        
        </div>
        </>
         );
}

export default Home;