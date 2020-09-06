
const express = require ('express');
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');


require('./database/index');

mongoose.connect(
    process.env.MONGO_URL , 
    {
        userNewUrlParser: true,
        // useUnifiedTopology: true
    }
);


const clienteRouter = require('./src/Clientes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'));
// app.use(
//   "/clientes",
//   express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
// );


app.use(require("./routes"));


// app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))

app.listen(process.env.PORT || 3000);