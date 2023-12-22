import memesData from '../../memesData.jsx'
import { useState } from 'react';

export default function Meme() {

  const [meme, setmeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function handleClick() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setmeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target

    setmeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <div className="form-container">
      <div className="form">
        <div className="top-text-container">
          <label htmlFor="top-text" className="top-text-label">Top Text</label>
          <input 
            id="top-text" 
            type="text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
             />
        </div>
        <div className="bottom-text-container">
          <label htmlFor="bottom-text" className="bottom-text-label">Bottom Text</label>
          <input 
            id="bottom-text" 
            type="text"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
             />
        </div>
      </div>
      <button onClick={handleClick} className="meme-button">Get a new meme image</button>
      <div className="meme-container">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-top-text">{meme.topText}</h2>
        <h2 className="meme-bottom-text">{meme.bottomText}</h2>
      </div>
    </div>
  )
}