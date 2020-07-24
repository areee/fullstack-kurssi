import React, { useEffect } from 'react'
import weatherService from '../services/weather'
//import weatherService from './services/weather'

const Weather = ({ weatherInfo, apiKey }) => {
    console.log('sääkaupunki:', weatherInfo)

    // const api_key = process.env.REACT_APP_API_KEY
    // console.log('api key', api_key)

    useEffect(() => {
        weatherService
            .getWeather(apiKey, weatherInfo)
            .then(initialWeather => {

                console.log(initialWeather)

                // setWeatherInfo(initialWeather)
            })
    }, [weatherInfo, apiKey])

    return (
        <>
            <p>Testisää</p>
            {/* <h2>Weather in {weatherInfo.capital}</h2>
            <p><b>temperature: </b>{weatherInfo.temperature}</p> */}
        </>
    )
}

export default Weather