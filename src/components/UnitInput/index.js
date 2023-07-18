import React from 'react'
// CSS Style
import './index.css'

const UnitInput = ({ unit, handle, name }) => {
  return (
    <div className='unitInputContainer'>
      <input className='unitInput' name={name} onChange={handle} />
      <span className='unitSpan'>{unit}</span>
    </div>
  )
}

export default UnitInput