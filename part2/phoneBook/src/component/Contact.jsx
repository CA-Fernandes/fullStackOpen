const Contact = ({name, number, onClickDelete, id}) => {
    return(<div>
        {name} {number} 
        <button type="button" onClick={() => onClickDelete(id, name)}>Delete</button>
    </div> )
}

export default Contact