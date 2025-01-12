import React from "react";
import bandaid from './bandaid.png'
import animals from './animals.png'
import stars from './stars.png'
import scribble from './scribble.png'

function Projects () {
    return (
        <>
        <div className="projects">
            <div className="left">
                <p>Art Portfolio</p>
                <p>I created this site using React<br></br>to showcase an artist's portfolio.</p>   
                    <img className="scribble2" src={bandaid}></img>
                    <p><a href="https://art-by-lina.netlify.app/"><button className="button1" >Visit Site</button></a></p>
                    <br></br><br></br><br></br><br></br><br></br>
                    <p><img className="scribble5" src={stars}></img></p>
            </div>


            <div className="right"> 
            <img className="scribble3" src={stars}></img>
                
                <br></br><br></br><br></br>

                <p2>Animated Website</p2><br></br><br></br>
                <p2>This website is a display<br></br> of my designs, illustrations,<br></br> and animations.</p2>
                <br></br><br></br>
                <img className="scribble4" src={animals}></img>
                <br></br>
                <p2><a href="https://maggiecreates.netlify.app/"><button className="button1" >Visit Site</button></a></p2> 
                
             </div>
        </div>
        
        </>
    )
}

export default Projects;