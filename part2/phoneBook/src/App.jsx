import { useState } from 'react'
import Contact from './component/Contact'
import ContactEntry from './component/ContactEntry'
import SearchContacts from './component/SearchContacts'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const [filter, setFilter] = useState('')

  const addContact = (contactObject) => {
    if(contactExists(contactObject)) {
      return;
    }

    axios
    .post('http://localhost:3001/persons', contactObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      console.log(response.data);
      
    })
  }

  const contactExists = (contactObject) => {
    const hasName = persons.some((contact) => contact.name ===  contactObject.name);

    if (hasName) {
      alert(`${contactObject.name} is already added to phonebook`)
      return true;
    }

    return false;
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )


  return (
    <div>
      <h2>Phonebook</h2>
      <SearchContacts value={filter} onChange={(event) => setFilter(event.target.value)}></SearchContacts>
      <ContactEntry onAddContact={addContact}></ContactEntry>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map((person) => <Contact key={person.name} name={person.name} number={person.number}></Contact>)}
      </div>
    </div>
  )
}

export default App

