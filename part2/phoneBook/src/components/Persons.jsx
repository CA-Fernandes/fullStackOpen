
const Persons = ({persons, searchedName, deletePerson}) => {


    return (
        <div>
            {persons.filter((person) => person.name.toLowerCase().includes(searchedName)).map(personName =>
                <li key={personName.id}>{personName.name} {personName.number}
                    <button onClick={() => deletePerson(personName.id)}>delete</button>
                </li>)}
        </div>)
}

export default Persons;