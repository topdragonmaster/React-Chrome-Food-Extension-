import React from 'react'
// CSS Style
import './index.css'
// Difficulty img
import Easy from '../../../assets/img/easy.svg'
import Medium from '../../../assets/img/medium.svg'
import Hard from '../../../assets/img/hard.svg'

export const SuggestionItem = ({ origin, name, difficulty, suggestion, handleSuggestion }) => {
  const imgSrc = "https://flagsapi.com/" + origin.toUpperCase() + "/flat/24.png";
  return (
    <div className='item' onClick={() => handleSuggestion(suggestion)}>
      <div className='left'>
        <div className='country'>
          <img src={imgSrc} alt="flag" />
          <span className="name">{name}</span>
        </div>
        <div className='difficulty'>
          {
            (difficulty === 0 && <><img src={Medium} alt='easy' /><span>Medium</span></>) ||
            (difficulty < 0 && <><img src={Easy} alt='medium' /><span>Easy</span></>) ||
            (difficulty > 0 && <><img src={Hard} alt='hard' /><span>Hard</span></>)
          }
        </div>
      </div>
      <div className='divider'>|</div>
      <div className='right'>30min</div>
    </div>
  )
}