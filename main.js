const express = require('express');
const app = express();

let phoneBook = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send("This is the root directory")
})

app.get('/api/persons', (req, res) => {
    res.json(phoneBook);
    res.status(200);
})



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})