const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

//Configurando o transporte de email:
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "anacrispee@edu.univali.br",
        pass: "Jesus2022"
    }
});

//Receber os dados do formulário e enviar o email:
router.post("/", (req, res) => {
    console.log('teste');
    const {email, telefone, mensagem} = req.body;

    //Configuração dos dados do email:
    const emailData = {
        from: email,
        to: "anacrispee@gmail.com",
        subject: "Formulário de contato - Mensagem de " + email,
        text: mensagem
    }

    //Função para enviar o email:
    transporter.sendMail(emailData, (error, info) => {
        if (error) {
            console.log("Erro ao enviar email", error);
            res.status(500).send("Erro ao enviar email");
        }else {
            console.log("Email enviado com sucesso!", info.response);
            res.status(200).send("Email enviado com sucesso");
        }
    })
    })

module.exports = router;