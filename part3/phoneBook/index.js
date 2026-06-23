const express = require("express");
const { response } = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :nameAndNumber'))

morgan.token("nameAndNumber", (req, res) => {
    if (req.method === 'POST') {
        return JSON.stringify(req.body)
    } else {
        return " "
    }
})

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



app.post("/api/persons", (req, res) => {
    const id = Math.floor(Math.random() * 10000 + 5)

    if (!req.body) {
        return res.status(400).json({
            error: 'content missing'
        })
    }
    if (!req.body.name) {
        return res.status(400).json({
            error: 'name is missing'
        })
    } else if (!req.body.number) {
        return res.status(400).json({
            error: 'number is missing'
        })
    }

    const nameExists = persons.find((person) => person.name === req.body.name)
    if (nameExists) {
        return res.status(409).json({
            error: "name must be unique"
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
