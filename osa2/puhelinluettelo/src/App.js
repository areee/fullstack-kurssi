import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/puhelinluettelo'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [infoMessage, setInfoMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(n => n.name === newName) // the original one in the server
        const changedPerson = { ...person, number: newNumber } // the changed one

        personService
          .update(person.id, changedPerson).then(returnedPerson => {
            setInfoMessage(
              `Updated ${returnedPerson.name}`
            )
            setTimeout(() => {
              setInfoMessage(null)
            }, 2000)
            setPersons(persons.map(person2 => person2.id !== person.id ? person2 : returnedPerson))
          })
          .catch(error => {
            console.log(`DEBUG error: ${error}`)
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setInfoMessage(
            `Added ${returnedPerson.name}`
          )
          setTimeout(() => {
            setInfoMessage(null)
          }, 2000)
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const deletePersonWith = id => {
    const person = persons.find(n => n.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(id)
      setInfoMessage(
        `Deleted ${person.name}`
      )
      setTimeout(() => {
        setInfoMessage(null)
      }, 2000)
      setPersons(persons.filter(n => n.id !== id))
    }
  }

  const filteredPersons = filter.length === 0
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={infoMessage} />
      <Filter handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />

      <h3>Numbers</h3>

      {filteredPersons.map((person, i) =>
        <Persons
          key={i}
          person={person}
          deleteSelectedPerson={() => deletePersonWith(person.id)}
        />
      )}

    </div>
  )

}

export default App