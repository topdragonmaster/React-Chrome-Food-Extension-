import React, { useState, useEffect } from 'react'
// Components
import SearchBar from '../../components/SearchBar'
import { TitleBar } from '../../components/TitleBar'
import { Toast } from '../../components/Toast'
import { Info } from '../../components/Info'
// Api
import yumazzoApi from '../../config/yumazzoApi'
// Debounce
import { debounce } from 'debounce'

function ViewRecipe({ setAddRecipe, initialRecipe, setInitialRecipe }) {
  const [searchWord, setSearchWord] = useState('')
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const fetchSuggestions = async () => {
      const data = await fetch(yumazzoApi.getAllRecipes, {
        'Access-Control-Allow-Origin': '*',
      })
      const recipes = await data.json()
      if (searchWord !== '') {
        const res = recipes.message.filter(recipe => recipe.name.toLowerCase().includes(searchWord.toLowerCase()))
        setSuggestions(res)
      } else {
        setSuggestions([])
      }
    }
    const debouncedFetch = debounce(fetchSuggestions, 100)
    debouncedFetch()
  }, [searchWord])

  const handleSearchChange = async (e) => {
    e.preventDefault()
    setSearchWord(e.target.value)
  }

  const handleSuggestion = (clickedSuggestion) => {
    setInitialRecipe(clickedSuggestion)
    setSuggestions([])
  }

  // console.log('recipe', recipe)

  return (
    <div className="container">
      <SearchBar
        value={searchWord}
        handleChange={handleSearchChange}
        suggestions={suggestions}
        handleSuggestion={handleSuggestion}
        onClick={() => setSuggestions([])}
      />
      <TitleBar origin={initialRecipe.origin} name={initialRecipe.name} setAddRecipe={setAddRecipe} />
      <Toast difficulty={initialRecipe.difficulty} description={initialRecipe.description} />
      <Info
        authenticity={initialRecipe.authenticity}
        cookingOil={initialRecipe.cookingOil}
        produce={initialRecipe.produce}
        protein={initialRecipe.protein}
        serves={initialRecipe.serves}
        spice={initialRecipe.spice}
        stock={initialRecipe.stock}
        volumn={initialRecipe.volume}
      />
    </div>
  )
}

export default ViewRecipe;
