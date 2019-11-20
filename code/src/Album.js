import React from 'react'
/*import data from './data.json'*/
/*import 'code/src/Components/album.css'*/

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
      <div>
        {props.name}
      </div>
      <div>
        {props.artists}
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

