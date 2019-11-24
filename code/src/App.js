import React from 'react'
import data from './data.json'
import { Album } from './Album'
import { Header } from './Header'

console.log(data)
console.log(Album)

export const App = () => {
  return (
    <div>
      <Header />
        <section id='album-container'>
          {data.albums.items.map((item) => {
            return <Album key={item.id} name={item.name} artistURL={item.artists[0].external_urls.spotify} albumURL={item.external_urls.spotify} image={item.images[1].url} artists={item.artists[0].name} />
          })}      
         </section>
    </div>
  )
}
