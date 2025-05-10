const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro MongoDB:', err));

// Definir um modelo simples
const TesteSchema = new mongoose.Schema({
  texto: { type: String, required: true },
  criado: { type: Date, default: Date.now }
});

const Teste = mongoose.model('Teste', TesteSchema);

// Rota GET simples
app.get('/teste', async (req, res) => {
  console.log('GET /teste acessado');
  try {
    const itens = await Teste.find();
    console.log('Itens encontrados:', itens.length);
    res.json(itens);
  } catch (err) {
    console.error('Erro:', err);
    res.status(500).send('Erro: ' + err.message);
  }
});

// Rota POST simples
app.post('/teste', async (req, res) => {
  console.log('POST /teste acessado');
  console.log('Body recebido:', req.body);
  
  try {
    const novoItem = new Teste({ texto: req.body.texto });
    console.log('Salvando item...');
    const salvo = await novoItem.save();
    console.log('Item salvo:', salvo);
    res.json(salvo);
  } catch (err) {
    console.error('Erro ao salvar:', err);
    res.status(500).send('Erro: ' + err.message);
  }
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor de teste rodando na porta ${PORT}`));
