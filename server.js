// REQUIRES
require('dotenv').config()


// DATAS
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const {getArticles, getArticle, addArticle, deleteArticle, updateArticle} = require('./controlers/controls');


// USE
app.use(cors())
app.use(express.json())



// GET ALL ARTICLES OF THE BLOG
app.get('/', async (req, res) => {
    const data = await getArticles();
    res.status(201).json(data);
})


// GET ONE ARTICLE OF THE BLOG
app.get('/:id', async (req, res) => {
    const data = await getArticle(req.params.id);
    res.status(201).json(data);
})

// ADD ARTICLE IN THE BLOG
app.post('/', async (req, res) => {
    const data = await addArticle(req.body);
    res.status(201).json(data);
})

// UPDATE ARTICLE IN THE BLOG
app.patch('/:id', async (req, res) => {
    const data = await updateArticle(req.params.id, req.body);
    res.status(201).json(data);
})

// DELETE ARTICLE IN THE BLOG
app.delete('/:id', async (req, res) => {
    const data = await deleteArticle(req.params.id);
    res.status(200).json({ succes: true });
})

app.listen(port, () => {
  console.log(`Hello there, we're on port ${port}`)
})