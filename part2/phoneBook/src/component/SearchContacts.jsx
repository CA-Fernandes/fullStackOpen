import { useState } from "react"

const SearchContacts = ({value, onChange}) => {

    return (
        <div>
            filter shown with <input
            value={value}
            onChange={onChange}
            >
            </input>
        </div>
    )
}

export default SearchContacts