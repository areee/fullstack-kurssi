import React from 'react'

const Country = ({ country }) => {
    return (
        <>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>Spoken languages</h2>

            <ul>
                {
                    country.languages.map((language, i) =>
                        <li key={i}>{language.name}</li>
                    )
                }
            </ul>
            <img src={country.flag} width='150px' alt='country flag' />
        </>
    )
}

export default Country