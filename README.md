# Agricultura Familiar Transparente

Sistema para apoiar agricultores familiares no gerenciamento de sua produção, cadastro de produtores, integração com sindicatos e geração de relatórios.

## Funcionalidades

- **Dados de Produção**: Visualização e filtro por cultura, volume, localização.
- **Cadastro de Produtores**: Gerencie informações pessoais e produtivas dos agricultores.
- **Integração com Sindicatos**: Acompanhe eventos, treinamentos e políticas agrícolas.
- **Pesquisa e Filtro**: Busque produtores e cultivos facilmente.
- **Relatórios e Gráficos**: Geração de relatórios exportáveis.

## Tecnologias

- Frontend: React (Create React App)
- Backend: Node.js, Express
- Banco de Dados: MongoDB Atlas

## Como rodar o projeto

### 1. Clone o repositório

```sh
git clone https://github.com/gabrieldeoliveira72/agricultura-familiar.git
cd agricultura-familiar
```

### 2. Configure as variáveis de ambiente do backend

Crie um arquivo `.env` na pasta `server` com:

```
MONGO_URI=coloque_sua_uri_do_mongodb_atlas_aqui
PORT=5000
```

### 3. Rode o backend

```sh
cd server
npm install
npm start
```

### 4. Rode o frontend

```sh
cd ../client
npm install
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o sistema.

## Como contribuir

1. Faça um fork do projeto.
2. Crie uma branch nova: `git checkout -b minha-feature`
3. Faça o commit das suas alterações: `git commit -m 'Minha contribuição'`
4. Envie para o GitHub: `git push origin minha-feature`
5. Abra um Pull Request.

---
