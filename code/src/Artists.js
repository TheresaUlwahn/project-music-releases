import React from 'react'
import data from './data.json'
import "./Components/artists.css";

export const Artists = (props) => {
    return (
        <div className="artists">
        {props.artists}
      </div>
            /*<data />
            Export Artists!
        </div>*/
    )
}
