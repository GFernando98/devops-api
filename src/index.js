const express = require('express');
const app = express();
app.use(express.json());

let notes = [];
let id = 1;

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: 'Content is required' });
  const note = { id: id++, content };
  notes.push(note);
  res.status(201).json(note);
});

app.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  notes = notes.filter(note => note.id !== noteId);
  res.status(204).end();
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;