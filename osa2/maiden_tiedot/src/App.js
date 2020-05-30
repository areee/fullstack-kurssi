import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ handleFilterChange }) => (
  <div>
    find countries <input onChange={handleFilterChange} />
  </div>
)


const Country = ({ country, currentWeather, setCurrentWeather }) => {
  const api_key = process.env.REACT_APP_API_KEY
  //console.log('api key', api_key)
  //let weather1 = ''
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://api.weatherstack.com/current?access_key=' + api_key + '&query=' + country.capital)
      .then(response => {
        setCurrentWeather(response.data)
        //const weather = response.data
        //console.log('weather', weather)
      })

  }, [api_key, country.capital, setCurrentWeather])
  console.log('weather', currentWeather)

  if (currentWeather != null) {
    return (
      <div>
        <h1>{country.name}</h1>
        <p>
          capital {country.capital}
          <br></br>
        population {country.population}
        </p>
        <h2>Spoken languages</h2>
        <ul>
          {
            country.languages.map((language, i) =>
              <li key={i}>{language.name}</li>
            )
          }
        </ul>
        <img src={country.flag} width='150px' alt='country flag' />
        <h2>Weather in {country.capital}</h2>
        {/* <p>
        test {currentWeather.current.temperature}
      </p> */}
      </div>
    )
  }
  return (
    <div>
      No weather
    </div>
  )
}

  

const Result = ({ filteredCountries, setFilter, currentWeather, setCurrentWeather }) => {

  if (filteredCountries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if (filteredCountries.length > 1) {
    return (
      <div>
        {
          filteredCountries.map((country, i) =>
            <p key={i}>{country.name} <button onClick={() => setFilter(country.name)}>show</button></p>
          )
        }
      </div>
    )
  } else if (filteredCountries.length === 1) {
    return (
      <div>
        <Country country={filteredCountries[0]} currentWeather={currentWeather} setCurrentWeather={setCurrentWeather} />
      </div>
    )
  }
  return (
    <div>
      No countries
    </div>
  )
}

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [currentWeather, setCurrentWeather] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })

  }, [])
  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountries = countries.filter(country => country.name.toUpperCase().includes(filter.toUpperCase()))
  console.log('based on filter, showing', filteredCountries.length, 'countries')

  console.log('filter', { filter })

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} />
      <Result filteredCountries={filteredCountries} setFilter={setFilter} currentWeather={currentWeather} setCurrentWeather={setCurrentWeather} />
    </div>
  )
}

export default App;
