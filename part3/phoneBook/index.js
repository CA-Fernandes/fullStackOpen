const express = require("express");
const {response, request} = require("express");
const app = express();

let notes = [
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
    res.send(notes);
})

app.get("/api/persons/:id", (req,res) => {
    const id = req.params.id;
    const note = notes.find(note => note.id === id);

    if (note) {
        res.json(note);
    } else {
        res.status(404).send("No such note, error 404")
    }
})

app.get("/info", (req,res) => {
    let date = new Date();

    res.send(`<p>Phonebook has info for ${notes.length}</p>
<p>${date}</p>`);

})

const PORT = 3001;
app.listen(PORT, () =>
    console.log(`server is running on ${PORT}`)
)
