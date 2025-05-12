const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('web')); 
app.use('/api', routes); 
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
