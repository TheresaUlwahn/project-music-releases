import React from 'react'
/*import data from './data.json'*/
import "./Components/album.css";

/*console.log(data)
console.log(data.albums.items[1])*/

/*const divStyle = { 
    color: 'blue',
    backgroundImage: 'url(' + data.albums.items[1].images[0].url + ')',
    backgroundSize: 'cover',
    height:'200px',
    width: '200px'
};*/

export const Album = (props) => {
  return (
    <div className="album-cover">
        <img className="album-image" src={props.image} alt="Album" />
        { <div className="icons">
            <img className="heart-icon" src="icons/heart.svg" alt="Heart"/>
            <img className="play-icon" src="icons/play.svg" alt="Play"/>
            <img className="dots-icon" src="icons/dots.svg" alt="Dots"/>
            </div>}
    </div>)
    }


{/* { <div className=“icons”>
            <img className=“icon-heart” src=“icons/heart.svg” alt=“Heart” />
            <img className=“icon-play” src=“icons/play.svg” alt=“Play” />
            <img className=“icon-dots” src=“icons/dots.svg” alt=“Dots” />
</div> } 
  
}  */}

{/*Showing album and name of album*/}

{/*export const Album = () => {
    return (
        <section id="albums">
            <div>
                <div style={divStyle}>
                </div>
                <div> 
                    {data.albums.items[1].name}
                </div>
                <div> 
                    {data.albums.items[1].artists.name}
                </div>
            </div>
        </section>
    )
}
*/}

{/*export const Album = () => {
    return (
        <div>
            <data />
            Export Album!
        </div>
    )
}
*/}

