import React from 'react'

const Countries = ({ country, showSelectedCountry }) => (
    <p>
        {country.name} <button onClick={showSelectedCountry}>show</button>
    </p>
)

export default Countries