// Funções que chamam a OHIP Oracle
function getData() {
    return { nome: 'Dados de origem src/index.js' };
}



// Server API Interna
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/data', (req, res) => {
    res.json(getData());
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
