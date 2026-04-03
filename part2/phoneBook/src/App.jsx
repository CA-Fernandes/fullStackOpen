import { useState } from 'react'
import Contact from './component/Contact'
import ContactEntry from './component/ContactEntry'
import SearchContacts from './component/SearchContacts'
import { useEffect } from 'react'
import Notification from './component/Notification'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons);
    })
  }, [])

  const [filter, setFilter] = useState('')

  const addContact = (contactObject) => {
    if(contactExists(contactObject)) {
      updateContact(contactObject)
      return;
    }

    personService
    .create(contactObject)
    .then(recievedPerson => {
      setPersons(persons.concat(recievedPerson))
      setNotification(`Added ${recievedPerson.name}`)
      setTimeout(() => {
          setNotification(null)
        }, 5000)
    })
  }

  const updateContact = (contactObject) => {
    const contact = persons.find(person => person.name === contactObject.name)

    if (window.confirm(`${contact.name} is already added to phonebook, replace the old number with a new one?`)) {
      personService
      .update(contact.id, contactObject)
      .then(recievedPerson => {
        setPersons(persons.map(person => person.id === contact.id ? recievedPerson : person))
        setNotification(`Updated ${recievedPerson.name}'s number`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
    }
    return
  }

  const contactExists = (contactObject) => {
    const hasName = persons.some((contact) => contact.name ===  contactObject.name);
    return hasName ? true : false
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const deleteContact = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
    personService
    .deletePerson(id)
    .then(recievedResponse => {console.log("deletion executed, this is the response data", recievedResponse)
      setPersons(persons.filter(person => person.id !== recievedResponse.id))
    })

    return
    }
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}></Notification>
      <SearchContacts value={filter} onChange={(event) => setFilter(event.target.value)}></SearchContacts>
      <ContactEntry onAddContact={addContact}></ContactEntry>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map((person) => <Contact 
        key={person.id} 
        name={person.name} 
        number={person.number}
        onClickDelete={deleteContact}
        id={person.id}
        >

        </Contact>)}
      </div>
    </div>
  )
}

export default App

