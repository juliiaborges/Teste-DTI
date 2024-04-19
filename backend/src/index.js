// Importação dos módulos necessários
const express = require('express');
const cors = require('cors');
const petshopRoutes = require('./routes/petshopRoutes');

// Configuração do servidor Express
const app = express();
const port = 3000;

// Middlewares
app.use(cors());  // Permite requisições cross-origin, necessário para comunicação com o frontend
app.use(express.json());  // Permite que o servidor entenda requisições em formato JSON

// Rotas
app.use('/api', petshopRoutes);

// Rota inicial para teste
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// O servidor escuta na porta especificada
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
