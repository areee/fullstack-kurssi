import React from 'react'

const Persons = ({ filteredPersons }) => (
    <div>
        {filteredPersons.map((person, i) =>
            <p key={i}>{person.name} {person.number}</p>
        )}
    </div>
)

export default Persons