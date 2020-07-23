import React from 'react'

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

export default Country