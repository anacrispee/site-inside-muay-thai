express = require('express');
const app = express();
const port = 3000;
const nodemailer = require('nodemailer');

app.use(express.json());

//Rotas:
app.use('/nodemailer', require('./routes/nodemailer'));
app.use(express.static('public'));

app.listen(port, () => {
    console.log('Servidor rodando na porta: ', port);
})