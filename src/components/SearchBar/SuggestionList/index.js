import React from 'react'

// Components
import { SuggestionItem } from '../SuggestionItem'

// CSS Style
import './index.css'

export const SuggestionList = ({ suggestions, handleSuggestion }) => {
  return (
    <div className='pop-up'>
      {suggestions.map((suggestion, index) =>
        <SuggestionItem
          key={index}
          origin={suggestion.origin}
          name={suggestion.name}
          difficulty={suggestion.difficulty}
          suggestion={suggestion}
          handleSuggestion={handleSuggestion}
        />
      )}
    </div>
  )
}