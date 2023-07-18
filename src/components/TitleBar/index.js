import React from 'react'
// img
import medium from '../../assets/img/logo-medium.svg'
import twitter from '../../assets/img/twitter.svg'
import telegram from '../../assets/img/telegram.svg'
// CSS Style
import './index.css'

export const TitleBar = ({ origin = '', name, setAddRecipe }) => {
  const imgSrc = "https://flagsapi.com/" + origin.toUpperCase() + "/flat/24.png"
  return (
    <div className="title">
      <div style={{ gap: '10px' }}>
        <img id="origin" src={imgSrc} alt="flag" />
        <span id="name">{name}</span>
      </div>
      <div style={{ gap: '10px' }}>
        <button className="btn-circle"><img src={twitter} alt='twitter' /></button>
        <button className="btn-circle"><img src={telegram} alt='telegram' /></button>
        <button className="btn-circle"><img src={medium} alt='medium' /></button>
        <button className="btn-add" onClick={() => setAddRecipe(true)}>+ Add Recipe</button>
      </div>
    </div>
  )
}