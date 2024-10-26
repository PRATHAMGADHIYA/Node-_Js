const express = require('express');
const app = express();

app.use(express.json());

let initialTodo = [
    {title:"HTML",isCompleted:true,id:1},
    {title:"javascript",isCompleted:true,id:2},
    {title:"React",isCompleted:false,id:3}]

app.get('/', (req, res) => {
    res.send('Welcome to the todo API');
});

app.get('/todos', (req,res) =>{
    res.json(initialTodo);
});

app.post('/addtodos', (req, res) => {
    const { title, isCompleted } = req.body;

    if (!title || isCompleted === undefined) {
        return res.status(400).send({ error: "Invalid data" }); 
    }

    const newTodo = {
        title,
        isCompleted,
        id: initialTodo.length + 1
    };

    initialTodo.push(newTodo);
    res.status(200).send(newTodo);
});

app.patch("/update/:id", (req, res) => {
    const { id } = req.params;
    const { title, isCompleted } = req.body;

    const index = initialTodo.findIndex((todo) => todo.id == id);

    if (index === -1) {
        return res.status(404).send({ msg: "Todo not found" });
    }

    initialTodo[index].title = typeof title === "string" ? title : initialTodo[index].title;
    initialTodo[index].isCompleted = typeof isCompleted === "boolean" ? isCompleted : initialTodo[index].isCompleted;

    res.send(initialTodo[index]);
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const index = initialTodo.findIndex(t => t.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send({ msg: "Todo not found" });
    }

    let deletedTodo = initialTodo.splice(index, 1)[0];
    res.send({ deletedTodo, todos: initialTodo }); 
});

app.get('/todo/:id', (req, res) => { 
    const { id } = req.params;
    const todo = initialTodo.find(t => t.id === parseInt(id));

    if (!todo) {
        return res.status(404).send({ msg: "Todo not found" });
    }

    res.send(todo);
});

app.get('/findbystatus', (req, res) => {
    const { isCompleted } = req.query; 

    if (isCompleted === undefined) {
        return res.status(400).send({ msg: "Data is required" });
    }

    const filteredTodos = initialTodo.filter(todo => String(todo.isCompleted) === isCompleted);
    res.send(filteredTodos); 
});

app.listen(8090, () => {
    console.log("Server listening on port http://localhost:8090");
});
