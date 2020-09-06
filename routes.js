
const routes = require("express").Router();

const Cliente = require('./models/Cliente');
const { request, response } = require('express');


routes.get('/:id', async (request, response) => {
    const cliente = await Cliente.findOne({
        where: {
            id: request.params.id,
        }
    })
    response.json(cliente);
});

routes.post('/', async (request, response) =>{
    const cliente = await Cliente.create({
        nome: request.body.nome,
        cpf: request.body.cpf,
        email:request.body.email,
        telefone:request.body.telefone,
        empresa: request.body.empresa,
        cnpj: request.body.cnpj

    });
    response.json(cliente);
});

routes.get('/', async (request, response) => {
    const clientes = await Cliente.findAll();
    response.json(clientes);
});


module.exports = routes;