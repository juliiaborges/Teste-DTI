// Importação dos módulos necessários
const express = require('express');
const cors = require('cors');
const petshopRoutes = require('./routes/petshopRoutes');

// Configuração do servidor Express
const app = express();
const port = 3000;


app.use(cors()); 
app.use(express.json()); 

app.use('/api', petshopRoutes);

// testando
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// Executando na porta
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
