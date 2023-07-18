import React from 'react'
// Components
import { SuggestionList } from './SuggestionList'
// CSS Style
import './index.css'

const SearchBar = ({ value, handleChange, suggestions, handleSuggestion }) => {
  return (
    <div className='searchBar'>
      <input id="search" type="search" placeholder="Search cuisine" value={value} onChange={handleChange} autoComplete='off' />
      {suggestions.length > 0 &&
        <SuggestionList suggestions={suggestions} handleSuggestion={handleSuggestion} />
      }
    </div>
  )
}

export default SearchBar