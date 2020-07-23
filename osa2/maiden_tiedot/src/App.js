import React, { useState, useEffect } from 'react'
//import Filter from './components/Filter'
//import Country from './components/Country'
//import Result from './components/Result'
import axios from 'axios'

const App = () => {
  // const [countries, setCountries] = useState([])
  // const [filter, setFilter] = useState('')
  // const [currentWeather, setCurrentWeather] = useState('')

  // useEffect(() => {
  //   console.log('effect')
  //   axios
  //     .get('https://restcountries.eu/rest/v2/all')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setCountries(response.data)
  //     })

  // }, [])
  // console.log('render', countries.length, 'countries')

  // const handleFilterChange = (event) => {
  //   setFilter(event.target.value)
  // }

  // const filteredCountries = countries.filter(country => country.name.toUpperCase().includes(filter.toUpperCase()))
  // console.log('based on filter, showing', filteredCountries.length, 'countries')

  // console.log('filter', { filter })

  const api_key = process.env.REACT_APP_API_KEY
  console.log('api key', api_key)

  return (
    <div>
      <p>Moi maailma</p>

      {/* <Filter handleFilterChange={handleFilterChange} />
      <Result filteredCountries={filteredCountries} setFilter={setFilter} currentWeather={currentWeather} setCurrentWeather={setCurrentWeather} /> */}
    </div>
  )
}

export default App;
