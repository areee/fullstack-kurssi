import React, { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'
// import Result from './components/Result'



const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  // const [currentWeather, setCurrentWeather] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  console.log('DEBUG: render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountries = filter.length === 0
  ? countries
  : countries.filter(country => country.name.toUpperCase().includes(filter.toUpperCase()))

  const showSelectedCountry = name => {
    console.log(`DEBUG: selected country: ${name}`)
    setFilter(name)
  }

  // const filteredCountries = countries.filter(country => country.name.toUpperCase().includes(filter.toUpperCase()))
  console.log('DEBUG: based on filter, showing', filteredCountries.length, 'countries')

  // console.log('filter', { filter })

  const api_key = process.env.REACT_APP_API_KEY
  console.log('api key', api_key)

  if (filteredCountries.length > 10) {
    return (
      <div>
        <Filter handleFilterChange={handleFilterChange} />
        <p>Too many matches, specify another filter</p>
      </div>
    )
  } else if (filteredCountries.length > 1) {
    return (
      <div>
        <Filter handleFilterChange={handleFilterChange} />
        {
          filteredCountries.map((country, i) =>
            <Countries
              key={i}
              country={country}
              showSelectedCountry={() => showSelectedCountry(country.name)}
            />
          )
        }
        {/* <Result filteredCountries={filteredCountries} /> */}
        {/* <Result filteredCountries={filteredCountries} setFilter={setFilter} currentWeather={currentWeather} setCurrentWeather={setCurrentWeather} /> */}
      </div>
    )
  } else if (filteredCountries.length === 1) {
    return (
      <div>
        <Filter handleFilterChange={handleFilterChange} />
        <Country country={filteredCountries[0]}/>
        
          {/* <Country country={filteredCountries[0]} currentWeather={currentWeather} setCurrentWeather={setCurrentWeather} /> */}
        
      </div>
    )
  }
  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} />
      <p>No countries</p>
    </div>
)
}

export default App;
