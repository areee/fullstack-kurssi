import React, { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Weather = ({ capital, apiKey }) => {
    const [temperature, setTemperature] = useState('')
    const [weatherIcons, setWeatherIcons] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    const [windDir, setWindDir] = useState('')

    useEffect(() => {
        weatherService
            .getWeather(apiKey, capital)
            .then(initialWeather => {
                setTemperature(initialWeather.temperature)
                setWeatherIcons(initialWeather.weather_icons[0])
                setWindSpeed(initialWeather.wind_speed)
                setWindDir(initialWeather.wind_dir)
            })
    }, [capital, apiKey])

    return (
        <>
            <h2>Weather in {capital}</h2>
            <p><b>temperature: </b>{temperature} Celsius</p>
            <img src={weatherIcons} alt='weather icon' />
            <p><b>wind: </b>{windSpeed} mph direction {windDir}</p>
        </>
    )
}

export default Weather