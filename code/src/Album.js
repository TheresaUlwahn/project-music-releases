import React from 'react'
/*import data from './data.json'*/
import "./Components/album.css";

/*console.log(data)
console.log(data.albums.items[1])*/

export const Album = (props) => {
    return (
        <div className="album-cover">
            {/* only album cover and icons*/}
            <div className="cover-and-icons">    
                <div className="icons">
                    <img className="heart-icon" src="icons/heart.svg" alt="Heart"/>
                    <img className="play-icon" src="icons/play.svg" alt="Play"/>
                    <img className="dots-icon" src="icons/dots.svg" alt="Dots"/>
                </div>
                {/* link to the album for the album picture*/}
                <a href={props.albumURL}> 
                    <img className="album-image" src={props.image}  alt="Album" /> 
                </a>
            </div>
            {/* linked info about the album with name of artist and album name*/}
            <div className="album-info">
                <div className="album-title">  
                    <a href={props.albumURL}>{props.name}</a>
                </div>
                <div className="artist-name">
                <a href={props.artistURL}>{props.artists}</a>
                </div>
            </div>
        </div> 
    )   
}

