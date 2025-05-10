const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

// Carregar variáveis de ambiente
dotenv.config();

// Inicializar o app
const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());

// Rota básica para teste
app.get('/', (req, res) => {
  res.json({ msg: 'API da Agricultura Familiar Transparente funcionando!' });
});

// Definir rotas
app.use('/api/producers', require('./routes/producers'));

app.post('/teste', (req, res) => {
    console.log('Rota de teste POST acessada');
    console.log('Body recebido:', req.body);
    res.json({ message: 'Teste POST bem-sucedido', recebido: req.body });
  });

// Definir porta
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
