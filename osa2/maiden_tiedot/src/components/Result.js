import React from 'react'

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

export default Filter