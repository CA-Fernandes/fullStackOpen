import { useState } from "react"

const SearchContacts = () => {
    const [searchedName, setSearchedName] = useState('')

    const handleSearch = (event) => {
        setSearchedName(event.target.value);
        console.log(setSearchedName);
        
    }

    return (
        <div>
            filter shown with <input
            value={searchedName}
            onChange={handleSearch}
            >
            </input>
        </div>
    )
}

export default SearchContacts