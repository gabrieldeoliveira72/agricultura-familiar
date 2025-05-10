const express = require('express');
const router = express.Router();
const Producer = require('../models/Producer');

// @route GET api/producers
// @desc Obter todos os produtores
// @access Public
router.get('/', async (req, res) => {
  try {
    const producers = await Producer.find().sort({ createdAt: -1 });
    res.json(producers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

// @route GET api/producers/:id
// @desc Obter um produtor por ID
// @access Public
router.get('/:id', async (req, res) => {
  try {
    const producer = await Producer.findById(req.params.id);
    
    if (!producer) {
      return res.status(404).json({ msg: 'Produtor não encontrado' });
    }
    
    res.json(producer);
  } catch (err) {
    console.error(err.message);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Produtor não encontrado' });
    }
    
    res.status(500).send('Erro no servidor');
  }
});

// @route POST api/producers
// @desc Criar um novo produtor
// @access Public
router.post('/', async (req, res) => {
  console.log('POST /api/producers - Requisição recebida');
  console.log('Body:', req.body);
  
  try {
    // Verificar se o email já existe
    let producer = await Producer.findOne({ email: req.body.email });
    
    if (producer) {
      console.log('Email já existe:', req.body.email);
      return res.status(400).json({ msg: 'Produtor com este email já existe' });
    }
    
    // Criar novo produtor
    console.log('Criando novo produtor');
    producer = new Producer({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      farmData: req.body.farmData
    });
    
    console.log('Salvando produtor');
    await producer.save();
    console.log('Produtor salvo com sucesso');
    
    res.json(producer);
  } catch (err) {
    console.error('ERRO AO CADASTRAR PRODUTOR:', err);
    res.status(500).send('Erro no servidor: ' + err.message);
  }
});

// @route PUT api/producers/:id
// @desc Atualizar um produtor
// @access Public
router.put('/:id', async (req, res) => {
  try {
    let producer = await Producer.findById(req.params.id);
    
    if (!producer) {
      return res.status(404).json({ msg: 'Produtor não encontrado' });
    }
    
    // Atualizar campos
    const { name, email, phone, address, farmData } = req.body;
    
    if (name) producer.name = name;
    if (email) producer.email = email;
    if (phone) producer.phone = phone;
    if (address) producer.address = address;
    if (farmData) producer.farmData = farmData;
    
    await producer.save();
    
    res.json(producer);
  } catch (err) {
    console.error(err.message);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Produtor não encontrado' });
    }
    
    res.status(500).send('Erro no servidor');
  }
});

// @route DELETE api/producers/:id
// @desc Excluir um produtor
// @access Public
router.delete('/:id', async (req, res) => {
  try {
    const producer = await Producer.findById(req.params.id);
    
    if (!producer) {
      return res.status(404).json({ msg: 'Produtor não encontrado' });
    }
    
    await producer.deleteOne();
    
    res.json({ msg: 'Produtor removido' });
  } catch (err) {
    console.error(err.message);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Produtor não encontrado' });
    }
    
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
