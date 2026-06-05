const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json())

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

/* TODO: Write a post request to generate a new person in the database.
- Send a post request to a api/persons
- Formatting a json string in such a way to send it to api/persons
- Ensuring this person has a unique ID, using math.random
*/

app.post("/api/persons", (req, res) => {
    const id = Math.floor(Math.random() * 10000 + 5)

    if (!req.body) {
        return response.status(404).json({
            error: 'content missing'
        })
    }

    const person = {
        id: `${id}`,
        name: req.body.name,
        number: req.body.number
    }

    persons = persons.concat(person)

    res.json(person)

})


const PORT = 3001;
app.listen(PORT, () =>
    console.log(`server is running on ${PORT}`)
)
