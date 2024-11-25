const express = require('express');
const app = express();

app.use(express.json());

let todos = [
    { title: "HTML", isCompleted: true, id: 1 },
    { title: "JavaScript", isCompleted: true, id: 2 },
    { title: "React", isCompleted: false, id: 3 }
];

app.get('/', (req, res) => {
    res.send('Welcome to the todo API');
});

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/addtodos', (req, res) => {
    const { title, isCompleted } = req.body;

    if (!title || isCompleted === undefined) {
        return res.status(400).send({ error: "Invalid data" });
    }

    const newTodo = {
        title,
        isCompleted,
        id: todos.length + 1
    };

    todos.push(newTodo);
    res.status(201).send(newTodo); // Using 201 status code for resource creation
});

app.patch("/update/:id", (req, res) => {
    const { id } = req.params;
    const { title, isCompleted } = req.body;

    const index = todos.findIndex((todo) => todo.id == id);

    if (index === -1) {
        return res.status(404).send({ msg: "Todo not found" });
    }

    todos[index].title = typeof title === "string" ? title : todos[index].title;
    todos[index].isCompleted = typeof isCompleted === "boolean" ? isCompleted : todos[index].isCompleted;

    res.send(todos[index]);
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(t => t.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send({ msg: "Todo not found" });
    }

    let deletedTodo = todos.splice(index, 1)[0];
    res.send({ deletedTodo, todos });
});

app.get('/todo/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.find(t => t.id === parseInt(id));

    if (!todo) {
        return res.status(404).send({ msg: "Todo not Found" });
    }

    res.send(todo);
});

app.get('/findbystatus', (req, res) => {
    const { isCompleted } = req.query;

    if (isCompleted === undefined) {
        return res.status(400).send({ msg: "Data is Required" });
    }

    const filteredTodos = todos.filter(todo => String(todo.isCompleted) === isCompleted);
    res.send(filteredTodos);
});

app.listen(8090, () => {
    console.log("Server listening on port http://localhost:8090");
});
