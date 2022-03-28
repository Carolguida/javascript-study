const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos()) // Converte automaticamente para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.params.nome,
        preco: req.params.preco
    })

    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.deleteProduto(req.params.id)
    res.send({message: 'Deletado com sucesso!', data: produto})
})

app.listen(porta, () => console.log(`Servidor executando na porta ${porta}.`))
