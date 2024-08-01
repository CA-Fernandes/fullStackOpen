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

export default PersonForm;
