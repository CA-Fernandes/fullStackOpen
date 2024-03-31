import { useState, useEffect } from 'react'
import {render} from "react-dom";
import axios from "axios";
const App = () => {
    const [persons, setPersons] = useState([])
    //const [person, setPerson] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchedName, setNewSearch] = useState('')

    useEffect(() => {
        console.log("effect");
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log("promise fulfilled");
                setPersons(response.data);
            })
    }, []);

    const addPerson = (event) => {
        event.preventDefault();
        console.log("Button Clicked", event.target);
        const randomID = Math.floor(Math.random() * 1000);
        const person = {name: newName, number: newNumber, id:randomID}

        const isFound = persons.find(personInArray => personInArray.name === person.name);
        if (isFound) {
            alert(`${person.name} is already added to phonebook`);
            return;
        }

        setPersons(persons.concat(person));
        setNewName('');
        setNewNumber('');

    }

    const handleNameChange = (event) => setNewName(event.target.value);
    const handleNumberChange = (event) => setNewNumber(event.target.value);
    const handleSearchChange = (event) => setNewSearch(event.target.value.toLowerCase());





    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
               <Filter searchedName={searchedName} handleSearchChange={handleSearchChange}></Filter>

                <h2>Add a new</h2>
              <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
            </form>
            <h2>Numbers</h2>
            <Persons persons={persons} searchedName={searchedName}></Persons>
        </div>
    )
}

const Filter = ({searchedName, handleSearchChange}) => {
    return (
        <>
            filter shown with <input
            value={searchedName}
            onChange={handleSearchChange}/>
        </>
    )
}


const Persons = ({persons, searchedName}) => {
    return (
    <div>

    {persons.filter((person) => person.name.toLowerCase().includes(searchedName)).map(personName =>
        <li key={personName.id}>{personName.name} {personName.number}</li>)}
    </div>)
}

const PersonForm = ({ newName,newNumber,handleNumberChange, handleNameChange }) => {
    return (
        <div>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </div>
    );
};


//TODO: Create functionality to add persons name to a list

export default App