import React, { useState } from 'react'
// Views
import ViewRecipe from './pages/ViewRecipe'
import AddRecipe from './pages/AddRecipe'
// CSS Style
import './App.css'
// Yumazzo Api
import yumazzoApi from './config/yumazzoApi'

function App() {
  const [addRecipe, setAddRecipe] = useState(false)
  const [initialRecipe, setInitialRecipe] = useState(yumazzoApi.initialRecipe)

  return (
    <>
      {addRecipe ? (
        <AddRecipe setAddRecipe={setAddRecipe} />
      ) : (
        <ViewRecipe setAddRecipe={setAddRecipe} initialRecipe={initialRecipe} setInitialRecipe={setInitialRecipe} />
      )}
    </>
  )
}

export default App;
