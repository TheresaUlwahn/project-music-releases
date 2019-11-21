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
    <div className="album">
      <img src={props.image} />
      <img src="code/public/icons/heart.svg" className="heartIcon"/>
      <img src="code/public/icons/play.svg" className="playIcon"/>
      <img src="code/src/Components/album.css" className="dotsIcon"/>
        <div className="albumInfo">
            <div className="name">  
                <p>{props.name}</p>
            </div>
            <div className="artists">
                {props.artists}
            </div>
        </div>
    </div>

  )
} 

/*Showing album and name of album*/
/*
export const Album = () => {
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
*/

/*export const Album = () => {
    return (
        <div>
            <data />
            Export Album!
        </div>
    )
}*/

