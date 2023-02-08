const express = require('express')
const app = express()

app.use(express.json())

let persons = {
    "persons": [
      {
        "name": "Arto Hellas",
        "number": "040-123456"
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
    ]
}

app.get('/api/persons', (req, res) => {
    res.json(persons.persons)
})

app.get('/info', (req, res) => {
  const bookLength = persons.persons.length
  const date = new Date()
  res.send(`Phonebook has info for ${bookLength} people<br>${date}`)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})