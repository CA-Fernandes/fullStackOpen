import {useState, useEffect} from 'react'
import formService from "./services/formService"
import './index.css'
import Filter from "./components/Filter.jsx";
import Persons from "./components/Persons.jsx";
import PersonForm from "./components/PersonForm.jsx";

const Notification = ({message}) => {
    if (message === null) {
        return
    }
    console.log(message)
    return (
        <div className='notification'>
            {message}
        </div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchedName, setNewSearch] = useState('')
    const [notification, setNotificationMessage] = useState('')

    useEffect(() => {
        console.log('request sent')
        formService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
        console.log('service received')
    }, []);

    const addPerson = (event) => {
        event.preventDefault();
        console.log("Button Clicked", event.target);
        const person = {name: newName, number: newNumber}

        const isFound = persons.find(personInArray => personInArray.name === person.name);
        if (isFound) {
            alert(`${person.name} is already added to phonebook`);
            return;
        }


        console.log('post request sent');
        formService
            .create(person)
            .then(returnedPerson => {
                console.log('person object inserted in database');
                setPersons(persons.concat(returnedPerson));
                setNewName('');
                setNewNumber('');
                setNotificationMessage(`Added ${person.name}`)
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 5000)
            })
    }

    const deletePerson = (id) => {

        const arrayWithoutPerson = persons.filter(personInList => personInList.id !== id)
        const person = persons.find(person => person.id === id);

        if (window.confirm(`Delete ${person.name} ?`)) {
            formService
                .deletePerson(id)
                .then(returnedPersonList => {
                        console.log('deletion completed');
                        console.log(returnedPersonList);
                        setPersons(arrayWithoutPerson);
                    }
                )
        } else {
            console.log("User cancelled action");
        }


    }

    const handleNameChange = (event) => setNewName(event.target.value);
    const handleNumberChange = (event) => setNewNumber(event.target.value);
    const handleSearchChange = (event) => setNewSearch(event.target.value.toLowerCase());


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <Notification message={notification}></Notification>
                <Filter searchedName={searchedName} handleSearchChange={handleSearchChange}></Filter>

                <h2>Add a new</h2>
                <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber}
                            handleNumberChange={handleNumberChange}/>
            </form>
            <h2>Numbers</h2>
            <Persons persons={persons} searchedName={searchedName} deletePerson={deletePerson}></Persons>
        </div>
    )
}


export default App