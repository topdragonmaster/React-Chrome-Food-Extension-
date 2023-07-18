import React, { useState } from 'react'
// Components
import CountrySelect from '../../components/CountrySelect'
import UnitInput from '../../components/UnitInput'
import SubmitButton from '../../components/SubmitButton'
// CSS Style
import './index.css'
// img
import arrow from '../../assets/img/keyboard-arrow-left.svg'
// Validation
import { validateRecipeInput } from '../../validation/addRecipe'
// yumazzo Api
import yumazzoApi from '../../config/yumazzoApi'

const AddRecipe = ({ setAddRecipe }) => {
  const [name, setName] = useState('')
  const [origin, setOrigin] = useState('')
  const [description, setDescription] = useState('')
  const [difficulty, setDifficulty] = useState(0)
  const [protein, setProtein] = useState('')
  const [produce, setProduce] = useState('')
  const [spice, setSpice] = useState('')
  const [cookingOil, setCookingOil] = useState('')
  const [volumn, setVolumn] = useState(0)
  const [serves, setServes] = useState(0)
  const [authenticity, setAuthenticity] = useState('Unverified')
  const [stock, setStock] = useState('')
  const [status, setStatus] = useState('')

  const recipe = {
    name: name,
    origin: origin,
    description: description,
    cookingOil: cookingOil,
    protein: protein,
    produce: produce,
    spice: spice,
    volume: volumn,
    authenticity: authenticity,
    stock: stock,
    serves: serves,
    difficulty: difficulty,
  }

  const handleChange = (e) => {
    e.preventDefault()
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break
      case 'origin':
        setOrigin(e.target.value)
        break
      case 'difficulty':
        setDifficulty(e.target.value)
        break
      case 'description':
        setDescription(e.target.value)
        break
      case 'produce':
        setProduce(e.target.value)
        break
      case 'protein':
        setProtein(e.target.value)
        break
      case 'stock':
        setStock(e.target.value)
        break
      case 'spice':
        setSpice(e.target.value)
        break
      case 'serves':
        setServes(e.target.value)
        break
      case 'volumn':
        setVolumn(e.target.value)
        break
      case 'authenticity':
        setAuthenticity(e.target.value)
        break
      case 'cookingOil':
        setCookingOil(e.target.value)
        break
      default: break
    }
  }

  console.log(recipe)

  const handleNumber = () => {
    recipe.serves = parseInt(recipe.serves)
    recipe.difficulty = parseInt(recipe.difficulty)
    recipe.volume = parseInt(recipe.volume)
    return recipe
  }
  const handleSubmit = async () => {
    if (!validateRecipeInput(recipe).isValid) {
      setStatus('Invalid Submit!')
      return
    }
    handleNumber()
    console.log(recipe)
    fetch(yumazzoApi.postRecipt, {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-type": "application/json",
        'accept': 'application/json',
      }
    })
      .then(response => response.json())
      .then(json => setStatus(json.message))
      .catch(err => console.log(err))
  }

  return (
    <div className='container'>
      <div className='heading'>
        <button className='back' onClick={() => setAddRecipe(false)}>
          <img src={arrow} alt='arrow' />
        </button>
        <span>Add New Recipe</span>
      </div>
      <div className='inputsRow'>
        <div className='inputUnit'>
          <span className='label'>Name</span>
          <input className='lineInput' name='name' onChange={handleChange} />
        </div>
        <div className='inputUnit'>
          <span className='label'>Origin</span>
          <CountrySelect name='origin' handleChange={handleChange} />
        </div>
      </div>
      <div className='inputUnit'>
        <span className='label'>Description</span>
        <textarea className='lineInput' placeholder='Describe your recipe...' style={{ height: '72px' }} name='description' onChange={handleChange}></textarea>
        <span className='sub-label'>0/200 Characters</span>
      </div>
      <div className='inputsRow'>
        <div className='inputUnit'>
          <span className='label'>Difficulty</span>
          <select className='lineInput' name='difficulty' onChange={handleChange}>
            <option value={0}>Easy</option>
            <option value={1}>Medium</option>
            <option value={2}>Hard</option>
          </select>
        </div>
        <div className='inputUnit'>
          <span className='label'>Protein</span>
          <input className='lineInput' name='protein' onChange={handleChange} />
        </div>
      </div>
      <div className='inputsRow'>
        <div className='inputUnit'>
          <span className='label'>Produce</span>
          <input className='lineInput' name='produce' onChange={handleChange} />
        </div>
        <div className='inputUnit'>
          <span className='label'>Spice</span>
          <input className='lineInput' name='spice' onChange={handleChange} />
        </div>
      </div>
      <div className='inputsRow'>
        <div className='inputUnit'>
          <span className='label'>Cooking Oil</span>
          <input className='lineInput' name='cookingOil' onChange={handleChange} />
        </div>
        <div className='inputUnit'>
          <span className='label'>Volumn</span>
          <UnitInput unit='grams' name='volumn' handle={handleChange} />
        </div>
      </div>
      <div className='inputsRow'>
        <div className='inputUnit'>
          <span className='label'>Serves</span>
          <UnitInput unit='people' name='serves' handle={handleChange} />
        </div>
        <div className='inputUnit'>
          <span className='label'>Authenticity</span>
          <select className='lineInput' name='authenticity' onChange={handleChange}>
            <option value='Unverified'>Unverified</option>
            <option value='Verified'>Verified</option>
          </select>
        </div>
      </div>
      <div className='inputUnit'>
        <span className='label'>Stock</span>
        <input className='lineInput' name='stock' onChange={handleChange} />
      </div>
      {status !== '' &&
        <span className='label' style={{ color: '#764AF4', textAlign: 'center' }}>{status}</span>
      }
      <SubmitButton text='Add Recipe' handleSubmit={handleSubmit} />
    </div>
  )
}

export default AddRecipe