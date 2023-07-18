import React from 'react'
// CSS Style
import './index.css'
// img
import paella from '../../assets/img/paella.svg'

export const Toast = ({ difficulty, description }) => {
  return (
    <div className="panel-toast">
      <div
        className="toast"
        style={
          (difficulty > 1 && { backgroundColor: '#41479B' }) ||
          (difficulty === 1 && { backgroundColor: '#17CFC4' }) ||
          (difficulty < 1 && { backgroundColor: '#6CF600' })}
      >
        <div className="toast-title">
          <img src={paella} alt="pic" width="32px" height="32px" />
          <span>
            {
              (difficulty > 1 && 'Difficulty: Hard') ||
              (difficulty === 1 && 'Difficulty: Medium') ||
              (difficulty < 1 && 'Difficulty: Easy')
            }
          </span>
        </div>
        <div id="description">
          {description}
        </div>
      </div>
    </div>
  )
}