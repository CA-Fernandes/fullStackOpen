import { useState } from "react";

const contactEntry = ({onAddContact}) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const addPerson = (event) => {
    event.preventDefault();

    const contactObject = {
        name: newName,
        number: newNumber
    }

    onAddContact(contactObject);

    setNewName('');
    setNewNumber('');
}

    const handleNameChange = (event) => {
    setNewName(event.target.value);
}
    const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
}

    return (
    <div>
        <h1>add a new</h1>
        <form onSubmit={addPerson}>
            <div>
                name: <input 
                value={newName}
                onChange={handleNameChange}
                />
            </div>
        <div>number: <input
        value={newNumber}
        onChange={handleNumberChange}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
        </form>
    </div>)
}

export default contactEntry