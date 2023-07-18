import React from 'react'
// CSS Style
import './index.css'

const SubmitButton = ({ text, handleSubmit }) => {
  return (
    <button className='submitButton' type='button' onClick={handleSubmit}>{text}</button>
  )
}

export default SubmitButton