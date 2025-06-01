const express = require('express');
const app = express();
app.use(express.json());

// Datos en memoria
let notes = [];
let users = [];
let tasks = [];

let noteId = 1;
let userId = 1;
let taskId = 1;

/* ----------- Notes ----------- */
app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: 'Content is required' });
  const note = { id: noteId++, content };
  notes.push(note);
  res.status(201).json(note);
});

app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  notes = notes.filter(note => note.id !== id);
  res.status(204).end();
});

/* ----------- Users ----------- */
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  const user = { id: userId++, name };
  users.push(user);
  res.status(201).json(user);
});

/* ----------- Tasks ----------- */
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title, userId: assignedTo } = req.body;
  if (!title || !assignedTo) {
    return res.status(400).json({ error: 'Title and userId are required' });
  }

  const userExists = users.some(u => u.id === assignedTo);
  if (!userExists) return res.status(404).json({ error: 'User not found' });

  const task = { id: taskId++, title, userId: assignedTo };
  tasks.push(task);
  res.status(201).json(task);
});

/* ----------- Start Server ----------- */
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
