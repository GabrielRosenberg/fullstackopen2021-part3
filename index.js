const express = require("express");
const morgan = require('morgan');
const cors = require('cors')
const app = express();

morgan.token("custom", function (req, res) {
	const method = req.method;
	// const path = req.route.path;
	const code = res.statusCode;
	const contentLength = res._contentLength;
	return `${method} ${code} ${contentLength}`;
});

morgan.token("body", function (req, res) {
	const body = JSON.stringify(req.body);
	const method = req.method;
	if (method === "POST") {
		return body;
	}
});
app.use(express.static('build'));
app.use(morgan(":custom - :response-time ms :body"));
app.use(cors());
app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons/", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id == id);
  if (!person) {
    response.status(404).send({ error: "unknown endpoint" });
  }
  response.json(person);
});

app.get("/info", (request, response) => {
  let phonebookInfo = `<p>Phonebook has info for ${persons.length} people<p/>`;
  const date = new Date();
  phonebookInfo = phonebookInfo.concat(`<p>${date.toLocaleString()}<p/>`);
  response.send(phonebookInfo);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.filter((p) => p.id === id);
  const personIdx = persons.indexOf(person);
  persons.splice(personIdx, 1);
  console.log(persons);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (persons.find((p) => body.name === p.name))
    return response.status(400).json({ error: "No name" });
  else if (!body.name || !body.number)
    return response.status(400).json({ error: "No data" });

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons.push(person);
  response.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
