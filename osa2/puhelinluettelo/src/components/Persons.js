import React from 'react'

const Persons = ({ person, deleteSelectedPerson }) => (
    <p>
        {person.name} {person.number} <button onClick={deleteSelectedPerson}>delete</button>
    </p>
)

// const Persons = ({ filteredPersons, deleteSelectedPerson }) => (
//     <div>
//         {filteredPersons.map((person, i) =>
//             <p key={i}>
//                 {person.name} {person.number} <button onClick={deleteSelectedPerson}>delete</button>
//             </p>
//         )}
//     </div>
// )

export default Persons