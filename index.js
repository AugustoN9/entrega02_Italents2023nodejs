const express = require("express");
const app = express();
const usuario = require("./router/usuario.router")

const port = 3002;

app.use(express.json());

app.use("/usuario", usuario);

app.get("/teste", (request, response) => {
    response.send("Olá Mundo, testando ...");
});

app.get("/contato", (request, response) => {
    response.send("nosso contato email@email.com");
});

app.listen(port, () => {
    console.log(`Servidor iniciado e rodando em http://localhost:${port}`);
});




