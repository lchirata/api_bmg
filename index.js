const express = require ('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const cors = require('cors');

require('./database/index');



const clienteRouter = require('./src/Clientes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/clientes', clienteRouter);


app.listen(process.env.PORT || 3001);

// app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))