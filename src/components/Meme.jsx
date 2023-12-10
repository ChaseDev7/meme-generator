import memesData from '../../memesData.jsx'
import { useState } from 'react';

export default function Meme() {

  const [memeImage, getMemeImage] = useState(" ")

  function handleClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    getMemeImage(memesArray[randomNumber].url)
  }

  return (
    <div className="form-container">
      <div className="form">
        <div className="top-text-container">
          <label htmlFor="top-text" className="top-text-label">Top Text</label>
          <input id="top-text" type="text" />
        </div>
        <div className="bottom-text-container">
          <label htmlFor="bottom-text" className="bottom-text-label">Bottom Text</label>
          <input id="bottom-text" type="text" />
        </div>
      </div>
      <button onClick={handleClick} className="meme-button">Get a new meme image</button>
      <div className="meme-image">
        <img src={memeImage} />
      </div>
    </div>
  )
}