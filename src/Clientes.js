const Cliente = require('../models/Cliente');
const Pedido = require('../models/Pedido');
const Produto = require('../models/Produto');
const PedidoProduto = require('../models/PedidoProduto');
const { request, response } = require('express');
const router = require('express').Router();

router.get('/:id', async (request, response) => {
    const cliente = await Cliente.findOne({
        where: {
            id: request.params.id,
        }
    })
    response.json(cliente);
});

router.post('/', async (request, response) =>{
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

router.get('/', async (request, response) => {
    const clientes = await Cliente.findAll();
    response.json(clientes);
});


module.exports = router;