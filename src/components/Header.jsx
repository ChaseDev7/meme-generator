import trollFace from '../images/TrollFace.png'

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={trollFace} className="troll-face" />
        <h3 className="header-title">Meme Generator</h3>
      </div>
      <p className="project-title">React Course - Project 3</p>
    </div>
  )
}