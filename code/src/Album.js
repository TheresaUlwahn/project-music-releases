import React from 'react'
/*import data from './data.json'*/
import "./Components/album.css";

/*console.log(data)
console.log(data.albums.items[1])*/

export const Album = (props) => {
    return (
        <div className="album-cover">
            <img className="album-image" src={props.image} alt="Album" />
             <div className="icons">
                <img className="heart-icon" src="icons/heart.svg" alt="Heart"/>
                <img className="play-icon" src="icons/play.svg" alt="Play"/>
                <img className="dots-icon" src="icons/dots.svg" alt="Dots"/>
            </div>
       
        
            <div className="album-info">
                <div className="album-title">  
                    <a href={props.albumURL}>{props.albumTitle}</a>
                </div>
                <div className="artist-name">
                    {props.artists}
                </div>
             </div>
        </div> 
    )   
}

