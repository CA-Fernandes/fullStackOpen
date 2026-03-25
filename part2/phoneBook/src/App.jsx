import { useState } from 'react'
import Contact from './component/Contact'
import ContactEntry from './component/ContactEntry'
import SearchContacts from './component/SearchContacts'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [filter, setFilter] = useState('')

  const addContact = (contactObject) => {
    if(contactExists(contactObject)) {
      return;
    }
    setPersons(persons.concat(contactObject))
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
