const express = require("express");
const { response } = require("express");
const app = express();

let persons = [
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

app.get("/", (request, response) => {
    response.send("<h1>This is my phonebook application please use /api/person to get the array</h1>");
}
)

app.get("/api/persons", (req, res) => {
    res.send(persons);
})
app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else (
        res.status(404).end()
    )
})

app.get("/api/info", (req, res) => {
    const currentTime = new Date()
    res.send(`<p>Phonebook has info for ${notes.length} people<p>
        <p>${currentTime}<p>`)
})

app.delete("/api/persons/:id", (req, res) => {
    const id = req.params.id
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

const PORT = 3001;
app.listen(PORT, () =>
    console.log(`server is running on ${PORT}`)
)
