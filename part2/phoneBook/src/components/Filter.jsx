
const Filter = ({searchedName, handleSearchChange}) => {
    return (
        <>
            filter shown with <input
            value={searchedName}
            onChange={handleSearchChange}/>
        </>
    )
}

export default Filter