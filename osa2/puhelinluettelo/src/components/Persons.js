import React from 'react'

const Persons = ({ person, deleteSelectedPerson }) => (
    <p>
        {person.name} {person.number} <button onClick={deleteSelectedPerson}>delete</button>
    </p>
)

export default Persons